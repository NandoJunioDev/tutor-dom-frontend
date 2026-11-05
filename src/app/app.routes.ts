import { Routes } from '@angular/router';
import { ListaProdutos } from './pages/lista-produtos/lista-produtos';

export const routes: Routes = [
  {
    path:'produtos',component:ListaProdutos, pathMatch:'full'
  }
];
