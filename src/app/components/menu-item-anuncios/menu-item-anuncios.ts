import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-menu-item-anuncios',
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
      <span class="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl border border-sky-100 bg-sky-50 text-sky-600">
        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m3 11 18-5v12L3 14v-3Z" />
          <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
        </svg>
      </span>

      <span class="min-w-0 flex-1">
        <span class="text-[17px] font-semibold text-slate-900">Anúncios</span>
        <span class="mt-0.5 block text-[14px] leading-snug text-slate-500">
          Comunicação e ofertas para locutor da loja
        </span>
      </span>
    </button>
  `,
})
export class MenuItemAnunciosComponent {
  ativo = input(false);
  selecionado = output<void>();
}