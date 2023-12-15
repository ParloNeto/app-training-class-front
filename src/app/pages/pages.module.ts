import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ListTrainingComponent } from './components/list-training/list-training.component';
import { CentralTrainingComponent } from './components/central-training/central-training.component';



@NgModule({
  declarations: [
    HomeComponent,
    ListTrainingComponent,
    CentralTrainingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    ListTrainingComponent
  ]
})
export class PagesModule { }
