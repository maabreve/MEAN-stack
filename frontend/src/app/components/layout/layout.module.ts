import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './';

const COMPONENTS = [
  HeaderComponent];

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})

export class LayoutModule { }
