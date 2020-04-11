import { CdkDropList, DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { L10nLoader } from 'angular-l10n';
import { AppModuleDefinitions } from '../shared/tests/app-module-config';

import { StringOptionsComponent } from './string-options.component';

describe('StringOptionsComponent', () => {
  let component: StringOptionsComponent;
  let fixture: ComponentFixture<StringOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(new AppModuleDefinitions()
      .addDeclarations(StringOptionsComponent)
      .addImports(HttpClientTestingModule, DragDropModule)
      .appModuleDefinitions);
  }));

  beforeEach(async(() => {
    const loader: L10nLoader = TestBed.inject(L10nLoader);
    loader.init();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
