import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from '../app/welcome/welcome.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { DragDropComponent } from '../app/drag-drop/drag-drop.component';

const routes: Routes = [
  { path:'dashboard', component: DashboardComponent },
  { path: 'drag', component: DragDropComponent},
  { path: 'welcome', component: WelcomeComponent},
  { path: '', redirectTo: '/welcome', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
