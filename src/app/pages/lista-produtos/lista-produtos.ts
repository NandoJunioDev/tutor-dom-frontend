import { Produto } from '../../models/produto';
import { ProdutoService } from './../../services/ProdutoService';
import { Component,  inject,  signal } from '@angular/core';


@Component({
  imports: [],
  selector: 'app-lista-produtos',
  styleUrl: './lista-produtos.css',
  templateUrl: './lista-produtos.html',
})
export class ListaProdutos {

  private produtoService = inject(ProdutoService)

  produtos=signal<Produto[]>([])

  constructor(){
    this.produtoService.listarTodos().subscribe(lista=>this.produtos.set(lista))
  }
}
