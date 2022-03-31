import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'danfe',
    loadChildren: () => import('./pages/danfe/danfe.module').then( m => m.DanfePageModule)
  },
  {
    path: 'fisica',
    loadChildren: () => import('./pages/fisica/fisica.module').then( m => m.FisicaPageModule)
  },
  {
    path: 'localizacao',
    loadChildren: () => import('./pages/localizacao/localizacao.module').then( m => m.LocalizacaoPageModule)
  },
  {
    path: 'material-info',
    loadChildren: () => import('./pages/material-info/material-info.module').then( m => m.MaterialInfoPageModule)
  },
  {
    path: 'transferencia',
    loadChildren: () => import('./pages/transferencia/transferencia.module').then( m => m.TransferenciaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
