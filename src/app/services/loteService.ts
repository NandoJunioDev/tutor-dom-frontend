import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Lote } from '../models/lote';
import { environment } from '../../environments/environment';

@Service()
export class LoteService {

  private http = inject(HttpClient)

  private apiUrl= `${environment.apiUrl}`;


  listarLotesDoProduto(idProduto: number): Observable<Lote[]> {
  return this.http.get<Lote[]>(`${this.apiUrl}/produtos/${idProduto}/lotes`);
}

buscarLotePorId(id: number): Observable<Lote> {
  return this.http.get<Lote>(`${this.apiUrl}/lotes/${id}`);
}

}
