export const msalConfig = {
  clientId: 'd613400b-adef-4046-9dac-05cdb7f37ed4',
  redirectUri: 'http://localhost:3000',
  scopes: ['user.read'],

  cache: {
    storageType: 'localStorage',
    useCookie: false,
  },
}
