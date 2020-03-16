import { ServiceBtnComponent } from './service-btn/service-btn.component';
import { ServicesContainerComponent } from './services-container/services-container.component';
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
    ServicesContainerComponent,
    ServiceBtnComponent,
  ],
  exports: [
    HeaderComponent,
    ServicesContainerComponent,
  ]
})
export class ComponentsModule { }
