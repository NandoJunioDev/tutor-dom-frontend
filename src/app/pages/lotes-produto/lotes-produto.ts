import { ProdutoService } from './../../services/ProdutoService';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';            // ← NOVO: faltava
import { LoteService } from '../../services/loteService';    // ← confira o nome real do arquivo
import { Lote } from '../../models/lote';
import { DatePipe,CurrencyPipe } from '@angular/common';               // ← só UMA vez
import { routes } from '../../app.routes';
import { Produto } from '../../models/produto';

@Component({
  imports: [DatePipe,CurrencyPipe ],
  selector: 'app-lotes-produto',
  styleUrl: './lotes-produto.css',
  templateUrl: './lotes-produto.html',
})
export class LotesProduto {

  private rota = inject(ActivatedRoute);
  private loteService = inject(LoteService);
  private produtoService = inject(ProdutoService);                  // ← minúsculo
  lotes = signal<Lote[]>([]);
  produto = signal<Produto|null>(null);

  router = inject(Router)

  constructor() {
    const id = Number(this.rota.snapshot.paramMap.get('id'));
    this.loteService.listarLotesDoProduto(id)
        .subscribe(lista => this.lotes.set(lista));

    this.produtoService.buscarPorId(id)
    .subscribe(produto=>this.produto.set(produto));
                  // ← guarda na caixa
  }
  clickLotes(idLote:number){
    this.router.navigate(['/lotes',idLote])
  }


}
