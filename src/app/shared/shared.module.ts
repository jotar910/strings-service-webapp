import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgMaterialModule } from './ng-material/ng-material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgMaterialModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
