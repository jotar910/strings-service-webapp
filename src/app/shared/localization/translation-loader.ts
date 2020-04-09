import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';

import { L10nProvider, L10nTranslationLoader } from 'angular-l10n';

import { Observable } from 'rxjs';

/**
 * Translator Loader.
 */
@Injectable()
export class HttpTranslationLoader implements L10nTranslationLoader {

  private readonly headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(@Optional() private readonly http: HttpClient) {
  }

  public get(language: string, provider: L10nProvider): Observable<{ [key: string]: any }> {
    const url = `${provider.asset}-${language}.json`;
    return this.http.get(url, { headers: this.headers });
  }
}
