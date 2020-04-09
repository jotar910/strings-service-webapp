import { Injectable } from '@angular/core';

import { L10nConfig, L10nLoader, L10nTranslationService } from 'angular-l10n';

/**
 * Service to handle the localization.
 */
@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  constructor(private readonly translation: L10nTranslationService) {
  }

  /**
   * Translates a key.
   * @param key The key to translate.
   * @param params The parameters to add to the translation string.
   * @return The translation.
   */
  translate(key: string, params: any = null): string {
    return this.translation.translate(key, params);
  }
}

/**
 * Localization configurations
 */
export const l10nConfig: L10nConfig = {
  format: 'language-region',
  providers: [
    { name: 'l10n', asset: './assets/l10n/locale' }
  ],
  cache: true,
  keySeparator: '.',
  defaultLocale: { language: 'en-GB' },
  schema: [
    { locale: { language: 'en-GB' }, dir: 'ltr' },
  ]
};

/**
 * Initiates the localization.
 * @param l10nLoader The localization loader.
 */
export function initL10n(l10nLoader: L10nLoader): () => Promise<void> {
  return (): Promise<void> => l10nLoader.init();
}
