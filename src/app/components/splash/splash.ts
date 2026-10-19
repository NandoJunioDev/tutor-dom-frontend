import { Component, OnDestroy, OnInit, output, signal } from '@angular/core';

@Component({
  selector: 'app-splash',
  standalone: true,
  template: `
    <div
      class="fixed inset-0 flex flex-col items-center justify-center
             bg-[linear-gradient(160deg,#00724c_0%,#006a47_55%,#006a47_75%,#157d5a_100%)]"
    >
      <h1 class="flex gap-2 text-[44px] font-extrabold leading-none tracking-tight drop-shadow-md">
        <span class="text-white">atacado</span>
        <span class="text-[#8ff5c4]">dom</span>
      </h1>

      <p class="mt-3 text-[15px] font-semibold uppercase tracking-[0.28em] text-white/90">
        Atacado &amp; Varejo
      </p>

      <div class="mt-9 h-[6px] w-[260px] overflow-hidden rounded-full bg-white/20">
        <div
          class="h-full rounded-full bg-[#8ff5c4] transition-[width] duration-100 ease-linear"
          [style.width.%]="progresso()"
        ></div>
      </div>
    </div>
  `,
})
export class SplashComponent implements OnInit, OnDestroy {
  /** Emite quando a barra chega em 100% */
  concluido = output<void>();

  progresso = signal(2);
  private timer?: ReturnType<typeof setInterval>;

  ngOnInit() {
    this.timer = setInterval(() => {
      const proximo = Math.min(100, this.progresso() + Math.random() * 8 + 2);
      this.progresso.set(proximo);

      if (proximo >= 100) {
        clearInterval(this.timer);
        setTimeout(() => this.concluido.emit(), 250);
      }
    }, 100);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}