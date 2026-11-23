import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LotesProduto } from './lotes-produto';

describe('LotesProduto', () => {
  let component: LotesProduto;
  let fixture: ComponentFixture<LotesProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LotesProduto],
    }).compileComponents();

    fixture = TestBed.createComponent(LotesProduto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
