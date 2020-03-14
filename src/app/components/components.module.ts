import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class ComponentsModule { }
