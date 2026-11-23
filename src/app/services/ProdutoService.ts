import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';
import { environment } from '../../environments/environment';

@Service()
export class ProdutoService {
  private http = inject(HttpClient)

  private apiUrl= `${environment.apiUrl}/produtos`;



  listarTodos():Observable<Produto[]>{
    return this.http.get<Produto[]>(this.apiUrl)
  }

  buscarPorId(id:number):Observable<Produto>{
    return this.http.get<Produto>(`${this.apiUrl}/${id}`)
  }

  buscarPortitulo(nome:string):Observable<Produto[]>{
    return this.http.get<Produto[]>(`${this.apiUrl}/busca`,{params:{nome}});
  }
}
