#!/bin/bash

set -e

work_dir="/opt/backendless"

sudo mkdir -p $work_dir

nvm_dir="$work_dir/.nvm"

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash | NVM_DIR=nvm_dir

export NVM_DIR=$nvm_dir
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
nvm install v14.18.2
nvm use v14.18.2

curl -sfL https://get.k3s.io | sh -

sudo mkdir $work_dir/.kube

echo "export KUBECONFIG=$work_dir/.kube/config" >> ~/.bashrc
export KUBECONFIG=$work_dir/.kube/config
sudo k3s kubectl config view --raw > $work_dir/.kube/config

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
sudo systemctl start pro-manager.service