import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FichaLote } from './ficha-lote';

describe('FichaLote', () => {
  let component: FichaLote;
  let fixture: ComponentFixture<FichaLote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichaLote],
    }).compileComponents();

    fixture = TestBed.createComponent(FichaLote);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
