import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'nova-tarefa',
    loadComponent: () => import('./nova-tarefa/nova-tarefa.page').then( m => m.TarefaNovaPage)
  },
  {
    path: 'atualiza-tarefa',
    loadComponent: () => import('./atualiza-tarefa/atualiza-tarefa.page').then( m => m.TarefaAtualizaPage)
  },
  {
    path: 'tarefa-nova',
    loadComponent: () => import('./nova-tarefa/nova-tarefa.page').then( m => m.TarefaNovaPage)
  },
];
