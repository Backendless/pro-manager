# Setup Azure Load Balancer

1. Create Load Balancer with public access type 
   ![](img/azure-lb.png)
2. Go to the next step and create public ip for Load Balancer, make sure you have choosen correct zone
   ![](img/azure-create-public-ip-lb.png)
3. Add backend pool
   ![](img/azure-backend-pool-lb.png)
   
4. Add load balancing rule for port 80
   ![](img/azure-lb-balancing-rule.png)

5. Add load balancing rule for port 443 in the same way as for port 80
6. All other steps should be default
7. Press `Create` button 

# Setup domain
1. Copy public ip from `Frontend IP configuration` page
   ![](img/azure-lb-frontend-ip.png)
2. Use it as A record in domain configuration
   ![](img/domain-a-record-config.png)
You should use this IP to configure your custom domain in Backendless applications 

# Configure domain in Pro Manager
1. Go to `Configuration > Domains > Ingress > Certificates` http://<public-ip>:5050/?page=ingress&data=%7B"pageConfiguration"%3A"ingress"%7D
   ![](img/pro-manager-cert-page.png)
2. Press `Add` button for production
3. Go to `Configuration > Domains > Ingress > Ingress`
   ![](img/add-api-domain-on-ingress-page.png)
4. Do the same for other domains
5. Press `Apply` button
6. Go to `Server status > All` page, wait while status became `Running` for all processes