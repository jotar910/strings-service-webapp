// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { L10nConfig } from 'angular-l10n/lib/models/l10n-config';

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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
