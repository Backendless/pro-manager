export function createSecretName( certName, domain ) {
  return `${certName}-${domain.replace( /\./g, '-' )}`
}

export function extractCertNameFromSecretName( secretName ) {
  return secretName.split( '-' )[0]
}