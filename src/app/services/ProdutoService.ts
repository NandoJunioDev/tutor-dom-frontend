import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';

@Service()
export class ProdutoService {
  private http = inject(HttpClient)

  private apiUrl= 'http://localhost:8080/produtos';



  listarTodos():Observable<Produto[]>{
    return this.http.get<Produto[]>(this.apiUrl)
  }
}
