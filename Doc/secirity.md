## Adding IP Restrictions for Backendless Domain

To secure access to your Backendless domain by allowing only specific IP addresses, follow the steps below. This guide will help you configure IP restrictions using Kubernetes Ingress.

### Step-by-Step Guide

1. **Get the List of Ingress Domains**

   First, retrieve the list of Ingress resources to identify the one you need to modify. Use the following command:
   ```shell
   kubectl get ingress
   ```

   Example output:
   ```shell
   bl-pro-manager@hots:~$ kubectl get ingress
   NAME                            CLASS   HOSTS                                                                   ADDRESS             PORTS     AGE
   bl-api-ingress                  nginx   api.general.domain.co                                                   <some-cluster-ip>   80, 443   20d
   bl-console-ingress              nginx   develop.general.domain.co                                               <some-cluster-ip>   80, 443   20d
   bl-consul-ingress               nginx   consul.general.domain.co                                                <some-cluster-ip>   80, 443   16d
   bl-custom-domain-ingress        nginx                                                                           <some-cluster-ip>   80, 443   26d
   bl-rt-ingress                   nginx   rt.general.domain.co                                                    <some-cluster-ip>   80, 443   20d
   ```

   Here, locate the Ingress resource associated with the domain that you wish to restrict access to. For example, `bl-console-ingress` for `develop.general.domain.co`.

2. **Edit the Ingress Resource to Add Restrictions**

   Use the following command to edit the Ingress resource:
   ```shell
   kubectl edit ingress bl-console-ingress
   ```

   This will open the configuration in a YAML format, as shown below:

   ```yml
   apiVersion: networking.k8s.io/v1
   kind: Ingress
   metadata:
     annotations:
       cert-manager.io/cluster-issuer: letsencrypt-prod
       nginx.ingress.kubernetes.io/proxy-body-size: 10000m
       nginx.ingress.kubernetes.io/proxy-connect-timeout: "600"
       nginx.ingress.kubernetes.io/proxy-read-timeout: "600"
       nginx.ingress.kubernetes.io/proxy-send-timeout: "600"
       nginx.ingress.kubernetes.io/whitelist-source-range: <ip-1>,<ip-2>,<...>
     creationTimestamp: "2024-09-13T06:16:12Z"
     labels:
       bl-ingress: domain
       bl-ingress-type: console
     name: bl-console-ingress
     namespace: default
     resourceVersion: "1318211"
     uid: 1dfe09dc-8a8f-4b2b-9dcb-dc25fc20492c
   spec:
     defaultBackend:
       service:
         name: bl-web-console
         port:
           number: 80
     ingressClassName: nginx
     rules:
       - host: develop.general.domain.co
         http:
           paths:
             - backend:
                 service:
                   name: bl-web-console
                   port:
                     number: 80
               path: /
               pathType: Prefix
     tls:
       - hosts:
           - develop.general.domain.co
         secretName: letsencrypt-prod-develop
   status:
     loadBalancer:
       ingress:
         - ip: <some-cluster-ip>    
   ```

3. **Add the IP Whitelist Annotation**

   Locate the `metadata.annotations` section in the YAML. Here, add or modify the annotation `nginx.ingress.kubernetes.io/whitelist-source-range` to specify the IP addresses you want to grant access to.

    - The value of `whitelist-source-range` should be a comma-separated list of IP addresses or IP ranges. For example:
      ```yml
      nginx.ingress.kubernetes.io/whitelist-source-range: <ips>
      ```

   If the annotation does not exist, add it under `metadata.annotations`:
   ```yml
   metadata:
     annotations:
       cert-manager.io/cluster-issuer: letsencrypt-prod
       nginx.ingress.kubernetes.io/whitelist-source-range: <ips>
   ```

4. **Save the Changes**

   After making the necessary modifications, save the file. By default, Kubernetes uses VIM as the editor. Here are some essential VIM commands:

    - To enter edit mode: Press `i`
    - To save the file: Press `Esc`, then type `:wq` and hit `Enter`
    - To quit without saving: Press `Esc`, then type `:q!` and hit `Enter`

   For more VIM commands, you can refer to this basic guide: [Basic VIM Commands](https://coderwall.com/p/adv71w/basic-vim-commands-for-getting-started).

### Important Notes

1. **YAML Formatting**

   Ensure that the YAML formatting is correct. Improper indentation or misplaced characters can result in errors when saving the file. Pay special attention to the alignment and structure.

2. **Verify the Changes**

   Once the modifications are complete, you can verify the changes using:
   ```shell
   kubectl describe ingress bl-console-ingress
   ```
   This command will display the details of the Ingress resource, allowing you to confirm that the `whitelist-source-range` annotation has been correctly applied.

By following these steps, you will have successfully added IP restrictions to your Backendless domain, allowing access only to the specified IP addresses. This helps secure your resources and prevent unauthorized access.