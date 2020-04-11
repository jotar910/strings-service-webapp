import { Component } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { L10nLoader } from 'angular-l10n';

import { AppComponent } from './app.component';
import { AppModuleDefinitions } from './shared/tests/app-module-config';

@Component({ selector: 'app-string-options-mock', template: '' })
class StringOptionsMockComponent {
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(new AppModuleDefinitions()
      .addDeclarations(StringOptionsMockComponent)
      .addImports(RouterTestingModule.withRoutes([{ path: '', component: StringOptionsMockComponent }]))
      .appModuleDefinitions);
  }));

  beforeEach(async(() => {
    const loader: L10nLoader = TestBed.inject(L10nLoader);
    loader.init();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
