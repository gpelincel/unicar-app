import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'motoristas',
        loadComponent: () =>
          import('../pages/motoristas/motoristas.page').then((m) => m.MotoristasPage),
      },
      {
        path: 'passageiros',
        loadComponent: () =>
          import('../pages/passageiros/passageiros.page').then((m) => m.PassageirosPage),
      },
      {
        path: 'configuracoes',
        loadComponent: () =>
          import('../pages/configuracoes/configuracoes.page').then((m) => m.ConfiguracoesPage),
      },
      {
        path: 'user/:id',
        loadComponent: () =>
          import('../pages/user/user.page').then((m) => m.UserPage),
      },
      {
        path: '',
        redirectTo: 'motoristas', // Redireciona para a rota filha relativa
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '', // Redireciona para /tabs quando a rota raiz é acessada
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
  {
    path: '**', // Rota para capturar endereços inválidos
    redirectTo: 'tabs',
  },
];