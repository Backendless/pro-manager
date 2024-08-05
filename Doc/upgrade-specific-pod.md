# Upgrading a Specific Deployment on Ubuntu

To upgrade a specific deployment on Ubuntu, follow the steps outlined below. This guide assumes you have `kubectl` installed and properly configured to interact with your Kubernetes cluster.

## Step 1: Log in as `bl-pro-manager`

First, switch to the `bl-pro-manager` user by executing the following command:

```shell
sudo su - bl-pro-manager
```

## Step 2: Set the Deployment Image

Use the `kubectl set image` command to update the image of your desired deployment. Replace `<bl deployment name>`, `<image name>`, and `<version>` with your specific deployment details.

```shell
kubectl set image deployment/<bl deployment name> <bl deployment name>=backendless/<image name>:<version>
```

### Example

To set the new version `7.0.13` for the `bl-coderunner-js` deployment, run:

```shell
kubectl set image deployment/bl-coderunner-js bl-coderunner-js=backendless/bl-coderunner-js:7.0.13
```

## Step 3: Verify the Update

After setting the new image, you can check the status of the deployment to ensure it has been updated correctly. Use the `kubectl describe deployment` command followed by the deployment name:

```shell
kubectl describe deployment bl-coderunner-js
```

This command will provide detailed information about the deployment, including the current status, the number of updated replicas, and any events or errors associated with the update process.

## Summary

By following these steps, you can successfully upgrade a specific deployment on Ubuntu. Ensure you replace the placeholders with your actual deployment details to execute the commands correctly. Checking the status of the deployment helps to confirm that the update has been applied as expected.