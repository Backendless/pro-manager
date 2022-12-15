#!/bin/bash

set -e

work_dir="/opt/backendless"

echo "creating working folder $work_dir"

sudo mkdir -p $work_dir

nvm_dir="$work_dir/.nvm"
echo "installing nvm to $nvm_dir ..."
export XDG_CONFIG_HOME=$nvm_dir
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
echo "nvm installed"

export NVM_DIR=$nvm_dir
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
nvm install v14.18.2
nvm use v14.18.2

echo "installing k3s..."
curl -sfL https://get.k3s.io | sh -
echo "k3s installed"

sudo mkdir $work_dir/.kube

echo "export KUBECONFIG=$work_dir/.kube/config" >> ~/.bashrc
export KUBECONFIG=$work_dir/.kube/config
sudo k3s kubectl config view --raw > $work_dir/.kube/config

echo "saved k3s config to work dir"

cd $work_dir

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
Environment="KUBECONFIG=/opt/backendless/.kube/config"
WorkingDirectory=/opt/backendless/pro-manager
ExecStart=/opt/backendless/.nvm/versions/node/v14.18.2/bin/node ./src
Restart=always

EOF

sudo systemctl daemon-reload
echo "system daemon reloaded. Starting pro manager"
sudo systemctl start pro-manager.service
systemctl status pro-manager.service