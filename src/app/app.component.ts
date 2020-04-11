import { Component, Inject } from '@angular/core';

import { L10N_LOCALE, L10nLocale } from 'angular-l10n';

/**
 * The app component.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(@Inject(L10N_LOCALE) public locale: L10nLocale) {
  }
}
