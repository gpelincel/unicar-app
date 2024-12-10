import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then( m => m.routes)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'motoristas',
    loadComponent: () => import('./pages/motoristas/motoristas.page').then( m => m.MotoristasPage)
  },
  {
    path: 'passageiros',
    loadComponent: () => import('./pages/passageiros/passageiros.page').then( m => m.PassageirosPage)
  },
  {
    path: 'configuracoes',
    loadComponent: () => import('./pages/configuracoes/configuracoes.page').then( m => m.ConfiguracoesPage)
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./pages/cadastro/cadastro.page').then( m => m.CadastroPage)
  },
  {
    path: 'user/:id',
    loadComponent: () => import('./pages/user/user.page').then( m => m.UserPage)
  },
];
