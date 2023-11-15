# Ubuntu with one command installation
1. At first you should login as `bl-pro-manager` user, use the following command:
   
```
    sudo su - bl-pro-manager
```
2. Get all ingresses `kubectl get ingress`:
```
bl-pro-manager@ip-10-0-0-34:~$ kubectl get ingress
NAME                 CLASS   HOSTS                   ADDRESS     PORTS     AGE
bl-api-ingress       nginx   api-t.backendless.com   10.0.0.34   80, 443   176m
bl-console-ingress   nginx   dev-t.backendless.com               80, 443   9s
```
3. Describe the ingress  that you are troubleshoot `kubectl describe ingress <ingress-name>`
```
bl-pro-manager@ip-10-0-0-34:~$ kubectl describe ingress bl-api-ingress
Name:             bl-api-ingress
Labels:           bl-ingress=domain
                  bl-ingress-type=api
Namespace:        default
Address:          10.0.0.34
Ingress Class:    nginx
Default backend:  bl-server:9000 (10.42.0.18:9000)
TLS:
  bl-ast terminates api-t.backendless.com
Rules:
  Host                   Path  Backends
  ----                   ----  --------
  api-t.backendless.com
                         /   bl-server:9000 (10.42.0.18:9000)
Annotations:             <none>
Events:                  <none>
```