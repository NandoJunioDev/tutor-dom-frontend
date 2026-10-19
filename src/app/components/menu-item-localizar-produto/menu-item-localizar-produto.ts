import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-menu-item-localizar-produto',
  standalone: true,
  template: `
    <button
      type="button"
      (click)="selecionado.emit()"
      class="flex w-full items-start gap-4 rounded-2xl border p-3.5 text-left transition"
      [class]="ativo()
        ? 'border-emerald-200 bg-emerald-50 shadow-sm'
        : 'border-transparent hover:bg-slate-50'"
    >
      <span
        class="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl"
        [class]="ativo() ? 'bg-[#00835a] text-white shadow-md' : 'bg-emerald-50 text-[#00835a]'"
      >
        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
        </svg>
      </span>

      <span class="min-w-0 flex-1">
        <span class="flex items-center justify-between gap-2">
          <span class="text-[17px] font-semibold text-slate-900">Localizar Produto</span>
          @if (ativo()) {
            <span class="rounded-full bg-[#00835a] px-2.5 py-0.5 text-xs font-bold text-white">Ativo</span>
          }
        </span>
        <span class="mt-0.5 block text-[14px] leading-snug text-slate-500">
          Busca por texto, marca ou código de barras
        </span>
      </span>
    </button>
  `,
})
export class MenuItemLocalizarProdutoComponent {
  ativo = input(false);
  selecionado = output<void>();
}