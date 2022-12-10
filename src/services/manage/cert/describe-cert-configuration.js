export function describeCertConfiguration() {
    return [
        {
            name: 'name',
            description: 'The name of certificate wich will be used for k8s secret, also it will be used to tie cert with domain',
            regex: '.*',
            type: 'string'
        },
        {
            name: 'crtFile',
            description: 'Certificate file is the signed certificate - basically the "magic" that allows certain sites to be marked as trustworthy by a third party. It can be .cer, .crt, .der, .pem, etc. Certbot generate it as cert.pem file',
            regex: null,
            type: 'file'
        },
        {
            name: 'keyFile',
            description: 'File is generally the private key, used by the server to encrypt and package data for verification by clients. It can be .key .pem etc. Certbot generate it as privkey.pem file',
            regex: null,
            type: 'file'
        }
    ]
}