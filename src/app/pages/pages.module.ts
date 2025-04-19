import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ListTrainingComponent } from './components/list-training/list-training.component';
import { CentralTrainingComponent } from './components/central-training/central-training.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    HomeComponent,
    ListTrainingComponent,
    CentralTrainingComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    HomeComponent,
    ListTrainingComponent
  ]
})
export class PagesModule { }
