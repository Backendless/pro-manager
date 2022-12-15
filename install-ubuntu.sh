#!/bin/bash

set -e

echo "creating user bl-pro-manger"
sudo adduser --gecos 'user for backendless pro-manager' --disabled-password --quiet bl-pro-manager
sudo passwd -d bl-pro-manager
sudo su bl-pro-manager

work_dir="/home/bl-pro-manager"

cd $work_dir
echo "creating working folder $work_dir"


nvm_dir="$work_dir/.nvm"
echo "installing nvm to $nvm_dir ..."
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
echo "nvm installed"

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
nvm install v14.18.2
nvm use v14.18.2

echo "installing k3s..."
curl -sfL https://get.k3s.io | sh -
echo "k3s installed"

mkdir ~/.kube
echo "export KUBECONFIG=~/.kube/config" >> ~/.bashrc
export KUBECONFIG=~/.kube/config
sudo k3s kubectl config view --raw > ~/.kube/config

echo "saved k3s config to work dir"

git clone https://github.com/Backendless/pro-manager.git

cd pro-manager

npm i

echo "systemd: Creating service file pro-manager"
sudo tee /etc/systemd/system/pro-manager.service > /dev/null << EOF
[Unit]
Description=Backendless Pro Manager
Documentation=https://github.com/Backendless/pro-manager#readme

[Install]
WantedBy=multi-user.target

[Service]
Environment="KUBECONFIG=/home/bl-pro-manager/.kube/config"
WorkingDirectory=/home/bl-pro-manager/pro-manager
ExecStart=/home/bl-pro-manager.nvm/versions/node/v14.18.2/bin/node ./src
Restart=always

EOF

sudo systemctl daemon-reload
echo "system daemon reloaded. Starting pro manager"
sudo systemctl start pro-manager.service
systemctl status pro-manager.service