# Install Backendless PRO in Microsoft Azure
Watch the video below with instructions for how to install, configure and run Backendless Pro in the Azure environment.
<div align="left">
      <a href="https://youtu.be/gYUhnXJyFYs">
         <img src="https://img.youtube.com/vi/gYUhnXJyFYs/0.jpg" style="width:70%;">
      </a>
</div>

### Requirements
Azure Virtual Machine must comply with the following requirements:
- 8 GiB memory
- 4 vCPUs
- 20 GiB disk space

### Basic Installation
1. Start a virtual instance with **Ubuntu** OS instance with the following `User data`
  ```
  #!/bin/bash
  curl -o- https://raw.githubusercontent.com/Backendless/pro-manager/main/install-ubuntu.sh  | bash
  ```
  Make sure the following ports are available to access from the Internet:
  ```
  - 5050  - Pro manager web
  - 5051  - Pro manager web socket
  - 32300 - API
  - 32400 - Web console
  - 32600 - Consul( configuration values )
  ```
2. Make sure the 5050 port is accessible from the Internet.
3. Navigate to the IP address of the virtual machine, port 5050, this will open up Backendless Pro Manager.
4. Continue the installation with the Pro Manager.
5. Once the installation is complete, click the `Manage Backendless` button and wait till all services show the status of `Running`.
6. Make sure the ports `32400` and `32300` are accessible from the Internet.
7. Navigate to the IP address of the virtual instance, port 32400 to access Backendless Console.
8. Create an account and login to Backendless Console. Create an app. At this point, the Backendless installation is complete.

### Adding Domains
The instructions below have been validated on Mac OSX.
1. Install the certbot utility
  ```
  brew install certbot
  ```
2. Generate a certificate. Make sure to adjust the email address and the domain name for the `-d` parameter:
  ```
  sudo certbot certonly \
  --manual \
  --preferred-challenges=dns \
  --email support@yourdomain.com \
  --server https://acme-v02.api.letsencrypt.org/directory \
  --agree-tos \
  -d *.yourdomain.com
  ```
3. Export the certificate to the PFX format:
  ```
  sudo openssl pkcs12 -export -out ~/cert.pfx -inkey privkey.pem -in fullchain.pem
  ```
4. Follow the instructions from the video linked above starting at 18:03.
