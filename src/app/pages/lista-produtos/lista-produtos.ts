import { ActivatedRoute, Route, Router } from '@angular/router';
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

  termoBuscado = signal('')
rota = inject(ActivatedRoute)
  constructor(){
    const nome = this.rota.snapshot.queryParamMap.get('nome') ?? '';this.pesquisar(nome);



    this.termoBuscado.set(nome)
  }

  private produtoService = inject(ProdutoService)

  produtos=signal<Produto[]>([])


 private router = inject(Router)

  pesquisar(nome: string) {

    if(nome.trim()=== ''){
      this.produtos.set([])
      return;
    }
  this.produtoService.buscarPortitulo(nome).subscribe(lista => this.produtos.set(lista));


}

abrirLotes(id:number){
  this.router.navigate(['/produtos', id])
}

clickPaginaAnterior(){
  this.router.navigate([''])
}
}
