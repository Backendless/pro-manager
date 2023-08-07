export function createSecretName( certName, domain ) {
  return `${certName}-${(replaceDots( domain ))}`
}

export function extractCertNameFromSecretName( secretName, domain ) {
  return secretName.split( replaceDots( domain ) )[0]
}

function replaceDots( domain ) {
  return domain.replace( /\./g, '-' )
}