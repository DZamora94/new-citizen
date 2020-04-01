import { InfoColumnContainerComponent } from './info-column-container/info-column-container.component';
import { InfoColumnComponent } from './info-column/info-column.component';
import { InfoBitComponent } from './info-bit/info-bit.component';
import { ServiceBtnComponent } from './service-btn/service-btn.component';
import { ServicesContainerComponent } from './services-container/services-container.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDividerModule,
  ],
  declarations: [
    HeaderComponent,
    ServicesContainerComponent,
    ServiceBtnComponent,
    InfoBitComponent,
    InfoColumnComponent,
    InfoColumnContainerComponent,
  ],
  exports: [
    HeaderComponent,
    ServicesContainerComponent,
    InfoColumnContainerComponent,
  ]
})
export class ComponentsModule { }
