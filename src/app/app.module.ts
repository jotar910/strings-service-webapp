import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { L10nIntlModule, L10nLoader, L10nTranslationModule } from 'angular-l10n';

import { AppComponent } from './app.component';
import { initL10n, l10nConfig } from './shared/localization/localization.service';
import { HttpTranslationLoader } from './shared/localization/translation-loader';
import { StringOptionsComponent } from './string-options/string-options.component';

@NgModule({
  declarations: [
    AppComponent,
    StringOptionsComponent
  ],
  imports: [
    DragDropModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    L10nTranslationModule.forRoot(
      l10nConfig,
      {
        translationLoader: HttpTranslationLoader
      }),
    L10nIntlModule,
    RouterModule.forRoot([
      { path: '', component: StringOptionsComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ])
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initL10n,
      deps: [L10nLoader],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
