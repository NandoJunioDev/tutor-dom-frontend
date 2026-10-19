import { Component, input, output, signal } from '@angular/core';
import { MenuItemLocalizarProdutoComponent } from '../menu-item-localizar-produto/menu-item-localizar-produto';
import { MenuItemValidadeComponent } from '../menu-item-validade/menu-item-validade';
import { MenuItemAnunciosComponent } from '../menu-item-anuncios/menu-item-anuncios';
import { MenuItemCronogramasComponent } from '../menu-item-cronogramas/menu-item-cronogramas';

type Modulo = 'localizar' | 'validade' | 'anuncios' | 'cronogramas';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MenuItemLocalizarProdutoComponent,
    MenuItemValidadeComponent,
    MenuItemAnunciosComponent,
    MenuItemCronogramasComponent,
  ],
  template: `
    <!-- Fundo escurecido -->
    <div
      class="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-[2px] transition-opacity duration-300"
      [class]="aberto() ? 'opacity-100' : 'pointer-events-none opacity-0'"
      (click)="fechar.emit()"
    ></div>

    <!-- Gaveta -->
    <aside
      class="fixed inset-y-0 left-0 z-50 flex w-[84%] max-w-[380px] flex-col bg-[#fbfcfb]
             transition-transform duration-300 ease-out"
      [class]="aberto() ? 'translate-x-0' : '-translate-x-full'"
    >
      <!-- Cabeçalho -->
      <header class="px-5 pt-6">
        <div class="flex items-start justify-between">
          <div class="flex items-center gap-3">
            <span class="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50 text-[#00835a]">
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="9" cy="7" r="4" />
                <path d="M2 21v-1a6 6 0 0 1 6-6h2" />
                <path d="m16 19 2 2 4-4" />
              </svg>
            </span>
            <div>
              <h2 class="text-[28px] font-extrabold leading-none text-[#006b48]">Tutor</h2>
              <p class="mt-1 text-sm text-slate-400">Dom Atacado &amp; Varejo</p>
            </div>
          </div>

          <button
            type="button"
            aria-label="Fechar menu"
            (click)="fechar.emit()"
            class="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200"
          >
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 stroke-width="2.4" stroke-linecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Chips -->
        <div class="mt-5 flex flex-wrap gap-2.5">
          <span class="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-sm font-medium text-[#006b48]">
            <span class="h-2.5 w-2.5 rounded-full bg-[#00835a]"></span>
            Loja 04 • Terminal 09
          </span>
          <span class="rounded-full bg-slate-100 px-3.5 py-1.5 text-sm font-medium text-slate-600">
            Operação de Loja
          </span>
        </div>

        <div class="mt-5 border-t border-slate-200/70"></div>
      </header>

      <!-- Módulos -->
      <nav class="flex-1 overflow-y-auto px-5 pt-5">
        <p class="mb-3 px-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Módulos do sistema
        </p>

        <div class="flex flex-col gap-2">
          <app-menu-item-localizar-produto [ativo]="modulo() === 'localizar'" (selecionado)="selecionar('localizar')" />
          <app-menu-item-validade [ativo]="modulo() === 'validade'" (selecionado)="selecionar('validade')" />
          <app-menu-item-anuncios [ativo]="modulo() === 'anuncios'" (selecionado)="selecionar('anuncios')" />
          <app-menu-item-cronogramas [ativo]="modulo() === 'cronogramas'" (selecionado)="selecionar('cronogramas')" />
        </div>
      </nav>

      <!-- Central do Operador -->
      <div class="px-5 pb-4">
        <button
          type="button"
          class="flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3.5 text-left hover:bg-slate-100"
        >
          <span class="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-base font-bold text-[#006b48]">?</span>
          <span>
            <span class="block text-[16px] font-semibold text-slate-800">Central do Operador</span>
            <span class="block text-sm text-slate-500">Dúvidas com bipagem ou rede?</span>
          </span>
        </button>
      </div>

      <!-- Rodapé -->
      <footer class="border-t border-slate-200/70 px-5 pb-5 pt-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="flex h-14 w-14 items-center justify-center rounded-full bg-[#00835a] text-lg font-bold text-white">EO</span>
            <div>
              <p class="text-[16px] font-semibold text-slate-900">Encarregado / Operação</p>
              <p class="text-sm text-slate-400">Turno Matutino</p>
            </div>
          </div>

          <button
            type="button"
            (click)="sair.emit()"
            class="flex items-center gap-1.5 text-[16px] font-semibold text-rose-500 hover:text-rose-600"
          >
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <path d="m16 17 5-5-5-5M21 12H9" />
            </svg>
            Sair
          </button>
        </div>

        <div class="mt-4 flex items-center justify-between border-t border-slate-200/70 pt-3 text-sm">
          <span class="text-slate-400">Versão {{ versao() }}</span>
          <span class="flex items-center gap-1.5 font-medium text-slate-600">
            <span class="h-2 w-2 rounded-full bg-[#00835a]"></span> Online
          </span>
        </div>
      </footer>
    </aside>
  `,
})
export class MenuComponent {
  aberto = input(true);
  versao = input('3.4.12');

  fechar = output<void>();
  sair = output<void>();
  moduloSelecionado = output<Modulo>();

  modulo = signal<Modulo>('localizar');

  selecionar(m: Modulo) {
    this.modulo.set(m);
    this.moduloSelecionado.emit(m);
  }
}