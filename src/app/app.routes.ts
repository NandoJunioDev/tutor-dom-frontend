
import { Routes } from '@angular/router';
import { ListaProdutos } from './pages/lista-produtos/lista-produtos';
import { LotesProduto } from './pages/lotes-produto/lotes-produto';
import { FichaLote } from './pages/ficha-lote/ficha-lote';
import { Busca } from './pages/busca/busca';

export const routes: Routes = [
  {
    path:'',component:Busca,

  },
  {
    path: 'produtos', component: ListaProdutos
  },
  {path:'produtos/:id', component:LotesProduto, pathMatch:'full'},

  {path:'lotes/:id', component:FichaLote, pathMatch:'full'}
];


