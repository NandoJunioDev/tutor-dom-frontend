import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoteService } from '../../services/loteService';
import { Lote } from '../../models/lote';
import { DatePipe } from '@angular/common';

@Component({
  imports: [DatePipe],
  selector: 'app-ficha-lote',
  styleUrl: './ficha-lote.css',
  templateUrl: './ficha-lote.html',
})
export class FichaLote {

  private rota = inject(ActivatedRoute);
  private loteService = inject(LoteService) ;
  lote = signal<Lote|null>(null)
  router = inject(Router)
  constructor(){
    const id = Number(this.rota.snapshot.paramMap.get('id'));
    this.loteService.buscarLotePorId(id).subscribe(lote=>this.lote.set(lote))
  }

  clickNovaBusca(){
    this.router.navigate([''])
  }

  clickPaginaAnterior(idProduto:number){
    this.router.navigate(['/produtos',idProduto])
  }
}
