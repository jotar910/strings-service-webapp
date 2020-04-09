import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { L10nIntlModule, L10nTranslationModule } from 'angular-l10n';

import { AppComponent } from './app.component';
import { l10nConfig } from './shared/localization/localization.service';
import { HttpTranslationLoader } from './shared/localization/translation-loader';
import { SharedModule } from './shared/shared.module';
import { StringOptionsComponent } from './string-options/string-options.component';

@NgModule({
  declarations: [
    AppComponent,
    StringOptionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    L10nTranslationModule.forRoot(
      l10nConfig,
      {
        translationLoader: HttpTranslationLoader
      }),
    L10nIntlModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent,
        children: [
          { path: '', component: StringOptionsComponent },
          { path: '**', redirectTo: '', pathMatch: 'full' }
        ]
      },
    ]),
    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
