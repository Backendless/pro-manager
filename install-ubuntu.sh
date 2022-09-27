#!/bin/bash

set -e

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash \
    && source ~/.bashrc \
    && nvm install v14.18.2

curl -sfL https://get.k3s.io | sh - \
     && mkdir ~/.kube \
     && echo "export KUBECONFIG=~/.kube/config" >> ~/.bashrc \
     && source ~/.bashrc \
     && sudo k3s kubectl config view --raw > "$KUBECONFIG"

git clone https://github.com/Backendless/pro-manager.git

cd pro-manager

npm i

./app start