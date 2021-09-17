import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: '', component: DashboardComponent}
      // {
      //   path: '',
      //   component: NopagefoundComponent
      // },
      // {
      //   path: '**',
      //   redirectTo: '/dashboard',
      //   pathMatch: 'full'
      // }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, CommonModule]
})
export class ProtectedRoutingModule { }