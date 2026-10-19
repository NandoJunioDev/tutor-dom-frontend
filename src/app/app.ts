import { Component, signal } from '@angular/core';
import { SplashComponent } from './components/splash/splash';
import { MenuComponent } from './components/menu.component/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SplashComponent, MenuComponent],
  template: `
    @if (carregando()) {
      <app-splash (concluido)="carregando.set(false)" />
    } @else {
      <main class="min-h-screen bg-slate-100 p-5">
        <button
          type="button"
          class="rounded-xl bg-[#00835a] px-4 py-2 font-semibold text-white"
          (click)="menuAberto.set(true)"
        >
          Abrir menu
        </button>
      </main>

      <app-menu
        [aberto]="menuAberto()"
        (fechar)="menuAberto.set(false)"
        (sair)="menuAberto.set(false)"
      />
    }
  `,
})
export class App {
  carregando = signal(true);
  menuAberto = signal(true);
}