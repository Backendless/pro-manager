#!/bin/bash

set -e

echo "creating user bl-pro-manger"
sudo adduser --gecos 'user for backendless pro-manager' --disabled-password --quiet bl-pro-manager
sudo passwd -d bl-pro-manager
sudo adduser bl-pro-manager sudo
sudo adduser bl-pro-manager adm
sudo adduser bl-pro-manager systemd-journal
su bl-pro-manager

work_dir="/home/bl-pro-manager"

exec 1> >(tee -a "/home/bl-pro-manager/pro-manager-install.log")
echo "Backendless Pro Manager installation started at `date`"

cd $work_dir
echo "in working folder $work_dir"


nvm_dir="$work_dir/.nvm"
export NVM_DIR="$work_dir/.nvm"

echo "installing nvm to $nvm_dir ..."
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
echo "nvm installed"


[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
nvm install v14.18.2
nvm use v14.18.2

echo "installing k3s..."
curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="server --disable traefik" sh -
echo "k3s installed"

mkdir ~/.kube
echo "export KUBECONFIG=~/.kube/config" >> ~/.bashrc
export KUBECONFIG=~/.kube/config
sudo k3s kubectl config view --raw > ~/.kube/config

echo "saved k3s config to work dir"

git clone https://github.com/Backendless/pro-manager.git

cd pro-manager

git config --global --add safe.directory /home/bl-pro-manager/pro-manager

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
Environment="HOME=/home/bl-pro-manager"
WorkingDirectory=/home/bl-pro-manager/pro-manager
ExecStart=/bin/bash -c "PATH=$PATH:/home/bl-pro-manager/.nvm/versions/node/v14.18.2/bin exec /home/bl-pro-manager/.nvm/versions/node/v14.18.2/bin/node ./src"
Restart=always

EOF

sudo systemctl daemon-reload
echo "system daemon reloaded. Starting pro manager"
sudo systemctl enable pro-manager.service
sudo systemctl start pro-manager.service
echo "pro-manager.service enabled"
systemctl status pro-manager.service

echo 'installing ingress'

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.5.1/deploy/static/provider/cloud/deploy.yaml  | tee ./ingress-nginx-install.log

kubectl get pods --namespace=ingress-nginx | tee ./ingress-nginx-info.txt

echo 'installing cert manager'

kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.12.0/cert-manager.yaml  | tee ./cert-manager-install.log

kubectl get Issuers,ClusterIssuers,Certificates,CertificateRequests,Orders,Challenges --all-namespaces  | tee ./cert-manager-info.txt

kubectl get events -A > events.txt

cat << EOF

*******************************************************************************************************************
*******************************************************************************************************************

█████╗░░█████╗░░█████╗░██╗░░██╗███████╗███╗░░██╗██████╗░██╗░░░░░███████╗░██████╗░██████╗  ██████╗░██████╗░░█████╗░
██╔══██╗██╔══██╗██╔══██╗██║░██╔╝██╔════╝████╗░██║██╔══██╗██║░░░░░██╔════╝██╔════╝██╔════╝  ██╔══██╗██╔══██╗██╔══██╗
██████╦╝███████║██║░░╚═╝█████═╝░█████╗░░██╔██╗██║██║░░██║██║░░░░░█████╗░░╚█████╗░╚█████╗░  ██████╔╝██████╔╝██║░░██║
██╔══██╗██╔══██║██║░░██╗██╔═██╗░██╔══╝░░██║╚████║██║░░██║██║░░░░░██╔══╝░░░╚═══██╗░╚═══██╗  ██╔═══╝░██╔══██╗██║░░██║
██████╦╝██║░░██║╚█████╔╝██║░╚██╗███████╗██║░╚███║██████╔╝███████╗███████╗██████╔╝██████╔╝  ██║░░░░░██║░░██║╚█████╔╝
╚═════╝░╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝╚══════╝╚═╝░░╚══╝╚═════╝░╚══════╝╚══════╝╚═════╝░╚═════╝░  ╚═╝░░░░░╚═╝░░╚═╝░╚════╝░

Copyright 2012-2023, Backendless Corp. All rights reserved.

Congratulations, the initial part of the Backendless Pro installation is complete. To proceed with the installation,
open a web browser and navigate to <instance IP address>:5050
EOF

sleep 1
exit 0