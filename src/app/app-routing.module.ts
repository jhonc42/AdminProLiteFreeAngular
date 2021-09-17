import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

// export const Approutes: Routes = [
//   {
//     path: '',
//     component: FullComponent,
//     children: [
//       {
//         path: 'auth',
//         loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
//       },   
//       {
//         path: 'protected',
//         loadChildren: () => import('./protected/protected.module').then(m => m.ProtectedModule),
//         canActivate: [false],
//         canLoad: [false]
//       },   
//       // {
//       //   path: 'dashboard',
//       //   loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
//       //   canActivate: [false],
//       //   canLoad: [false]
//       // },
//       // {
//       //   path: 'component',
//       //   loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
//       // },
//       { path: '', redirectTo: '/auth/login', pathMatch: 'full' }
   
//     ]
//   },
//   {
//     path: '**',
//     redirectTo: '/auth/login'
//   }
// ];

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'protected',
    loadChildren: () => import('./protected/protected.module').then(m => m.ProtectedModule),
    // canActivate: [true],
    // canLoad: [true]
  },
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: '/auth/login'
  }
  // {path: '**', component: NopagefoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }