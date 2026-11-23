import { Component, inject, signal } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-busca',
  styleUrl: './busca.css',
  templateUrl: './busca.html',
})
export class Busca {

  private router = inject(Router);


  pesquisar(nome:string){

    if(nome.trim()=== ''){

      return;
    }
    this.router.navigate(['/produtos'],{queryParams:{nome:nome}})

  }
}
