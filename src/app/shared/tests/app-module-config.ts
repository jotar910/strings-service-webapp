import { BrowserTestingModule } from '@angular/platform-browser/testing';

import { L10nIntlModule, L10nTranslationModule } from 'angular-l10n';

import { AppComponent } from '../../app.component';
import { l10nConfig } from '../localization/localization.service';

/**
 * The app module definitions for tests.
 */
export class AppModuleDefinitions {
  readonly appModuleDefinitions: any = {
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserTestingModule,
      L10nTranslationModule.forRoot(l10nConfig),
      L10nIntlModule
    ]
  };

  /**
   * Adds/replaces declarations.
   * @param declarations The declarations
   */
  addDeclarations(...declarations: any[]): AppModuleDefinitions {
    this.appModuleDefinitions.declarations = [
      ...this.appModuleDefinitions.declarations,
      ...declarations
    ];
    return this;
  }

  /**
   * Adds/replaces imports.
   * @param imports The imports.
   */
  addImports(...imports: any[]): AppModuleDefinitions {
    this.appModuleDefinitions.imports = [
      ...this.appModuleDefinitions.imports,
      ...imports
    ];
    return this;
  }
}
