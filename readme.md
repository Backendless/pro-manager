# About (ALPHA phase)
**Pro Manager** is a backendless product created to simplify installation and managing on-premise Backendless version.

The Pro Manager is currently in **ALPHA** stage. There can be some breaking changes and you can use it on your own risk. 

# Requirements
- 4Gb memory
- 4 CPU
- 20 GB disk space

# Pre requirements
### Mac OS
- Install Docker desktop https://www.docker.com/products/docker-desktop/
- Go to preference and enable kubernetes ![img_1.png](Doc/img/mac-os-enable-k8s.png)

### Ubuntu
```
curl -o- https://raw.githubusercontent.com/Backendless/pro-manager/main/install-ubuntu.sh  | bash
```

- Install node
  ```
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash \
    && source ~/.bashrc \
    && nvm install v14.18.2
  ```
- Install k3s 
  ```
    curl -sfL https://get.k3s.io | sh - \
     && mkdir ~/.kube \
     && echo "export KUBECONFIG=~/.kube/config" >> ~/.bashrc \
     && source ~/.bashrc \
     && sudo k3s kubectl config view --raw > "$KUBECONFIG"
     && kubectl get nodes
    ```
  Make sure that you have access to kubectl. Execute `kubectl get nodes`. The result should as the following:
    ```
    sergey.kukurudzyak@dev-k3s:~/pro-manager$ kubectl get nodes
    NAME                         STATUS   ROLES                  AGE   VERSION
    dev-k3s.us.backendless.com   Ready    control-plane,master   19h   v1.24.3+k3s1
    ```

### AWS EC2
[AWS EC2 basic installation](./Doc/aws-ec2-basic.md)

# Start Pro Manager
- Clone Pro Manager
```
git clone https://github.com/Backendless/pro-manager.git
```
- ```
  npm i
  ```
- ```
  npm run start
  ``` 



# Ingress load balancer
https://kubernetes.github.io/ingress-nginx/deploy/#quick-start