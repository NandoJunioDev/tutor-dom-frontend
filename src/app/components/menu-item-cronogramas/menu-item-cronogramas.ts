import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-menu-item-cronogramas',
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
      <span class="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl border border-purple-100 bg-purple-50 text-purple-600">
        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18M9 15h6" />
        </svg>
      </span>

      <span class="min-w-0 flex-1">
        <span class="text-[17px] font-semibold text-slate-900">Cronogramas / Formulários</span>
        <span class="mt-0.5 block text-[14px] leading-snug text-slate-500">
          Visualização de documentos e rotinas
        </span>
      </span>
    </button>
  `,
})
export class MenuItemCronogramasComponent {
  ativo = input(false);
  selecionado = output<void>();
}