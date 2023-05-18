# Install Backendless PRO in Microsoft Azure
### Requirements
Azure Virtual Machine must comply with the following requirements:
- 8 GiB memory
- 4 vCPUs
- 20 GiB disk space

### Installation
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
