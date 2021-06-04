export const msalConfig = {
  authority:'https://login.microsoftonline.com/77804ee0-fef6-4659-aba3-a46b61ce8aa3',
  clientId: 'c3bc02e3-5c66-4d90-9a06-02356c2dd196',
  redirectUri: 'https://chirpdev.z13.web.core.windows.net/.auth/login/aad/callback',
  scopes: ['user.read'],

  cache: {
    storageType: 'localStorage',
    useCookie: false,
  },
}
