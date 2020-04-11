export const environment = {
  production: false,
  apiPath: 'http://34.71.185.166:5000',
  l10nConfig: {
    format: 'language-region',
    providers: [
      { name: 'app', asset: './assets/i18n/app' }
    ],
    cache: true,
    keySeparator: '.',
    defaultLocale: { language: 'en-US', currency: 'USD' },
    schema: [
      { locale: { language: 'en-US', currency: 'USD' }, dir: 'ltr', text: 'United States' },
      { locale: { language: 'it-IT', currency: 'EUR' }, dir: 'ltr', text: 'Italia' }
    ]
  }
};
