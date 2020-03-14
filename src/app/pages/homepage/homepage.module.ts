import { ComponentsModule } from './../../components/components.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [HomepageComponent]
})
export class HomepageModule { }
