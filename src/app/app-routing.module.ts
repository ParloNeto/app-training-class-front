import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/components/home/home.component';
import { ListTrainingComponent } from './pages/components/list-training/list-training.component';
import { CentralTrainingComponent } from './pages/components/central-training/central-training.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    title: 'Home - Training Class'
  },
  {
    path: 'list-training', component: ListTrainingComponent,
    title: 'List Training - Training Class'
  },
  {
    path: 'central-training', component: CentralTrainingComponent,
    title: 'Central Training - Training Class'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
