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

# Issues with custom certificates
1. Login as `bl-pro-manager` user, use the following command:
   ```
    sudo su - bl-pro-manager
   ```
2. Retrieve the pod name:
    ```
    kubectl get pods -n ingress-nginx
    ```
   You should see output like this:
    ```
    NAME                                        READY   STATUS                   RESTARTS   AGE
    ingress-nginx-admission-create-9rdb4        0/1     ContainerStatusUnknown   0          18m
    ingress-nginx-admission-create-m5ctn        0/1     Completed                0          18m
    ingress-nginx-admission-patch-6k2rv         0/1     ContainerStatusUnknown   0          18m
    ingress-nginx-admission-patch-rqpmd         0/1     Completed                0          18m
    ingress-nginx-controller-644cb4c66c-79qqq   1/1     Running                  0          18m
    ```
2. Find the pod with a `Running` status, then execute the following command to view its logs:
    ```
    kubectl logs ingress-nginx-controller-644cb4c66c-79qqq -n ingress-nginx
    ```
   The logs will display details similar to:
    ```
    -------------------------------------------------------------------------------
    NGINX Ingress controller
      Release:       v1.5.1
      Build:         d003aae913cc25f375deb74f898c7f3c65c06f05
      Repository:    https://github.com/kubernetes/ingress-nginx
      nginx version: nginx/1.21.6
    -------------------------------------------------------------------------------
    ...

    I0510 06:12:12.605264       7 status.go:299] "updating Ingress status" namespace="default" ingress="bl-api-ingress" currentValue=[] newValue=[{IP: Hostname:localhost Ports:[]}]
    W0510 06:12:12.613491       7 backend_ssl.go:47] Error obtaining X.509 certificate: unexpected error creating SSL Cert: certificate and private key do not have a matching public key: tls: found a certificate rather than a key in the PEM for the private key
    I0510 06:12:12.613567       7 event.go:285] Event(v1.ObjectReference{Kind:"Ingress", Namespace:"default", Name:"bl-api-ingress", UID:"66ea2f9f-7194-4585-991a-c7935b54ebcf", APIVersion:"networking.k8s.io/v1", ResourceVersion:"422088", FieldPath:""}): type: 'Normal' reason: 'Sync' Scheduled for sync
    W0510 06:12:12.613873       7 controller.go:1333] Error getting SSL certificate "default/bl-ast": local SSL certificate default/bl-ast was not found. Using default certificate
    ```
   
# Cert manager
```shell
kubectl get pods -n cert-manager
```

```shell
kubectl logs -f -n cert-manager <pod name>
```