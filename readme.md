# About (ALPHA phase)
**Pro Manager** is a backendless product created to simplify installation and managing on-premise Backendless version.

The Pro Manager is currently in **ALPHA** stage. There can be some breaking changes and you can use it on your own risk. 
 

# Pre requirements
### Mac OS
- Install Docker desktop https://www.docker.com/products/docker-desktop/
- Go to preference and enable kubernetes ![img_1.png](Doc/img/mac-os-enable-k8s.png)

### Ubuntu
- Install node
  - ```curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash```
  - ```source ~/.bashrc```
  - ```nvm install v14.18.2```


# Start Pro Manager
npm run start 



# Ingress load balancer
https://kubernetes.github.io/ingress-nginx/deploy/#quick-start