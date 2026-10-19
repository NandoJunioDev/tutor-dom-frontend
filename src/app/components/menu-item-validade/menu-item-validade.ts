import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-menu-item-validade',
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
      <span class="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl border border-amber-200 bg-amber-50 text-amber-600">
        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
          <path d="M12 9v4M12 17h.01" />
        </svg>
      </span>

      <span class="min-w-0 flex-1">
        <span class="flex items-center justify-between gap-2">
          <span class="text-[17px] font-semibold text-slate-900">Validade</span>
          <span class="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-700">Alerta</span>
        </span>
        <span class="mt-0.5 block text-[14px] leading-snug text-slate-500">
          Gestão de lotes críticos e prazos de 10, 15 e 20 dias
        </span>
      </span>
    </button>
  `,
})
export class MenuItemValidadeComponent {
  ativo = input(false);
  selecionado = output<void>();
}