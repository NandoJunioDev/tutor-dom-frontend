import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuItemLocalizarProduto } from './menu-item-localizar-produto';

describe('MenuItemLocalizarProduto', () => {
  let component: MenuItemLocalizarProduto;
  let fixture: ComponentFixture<MenuItemLocalizarProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuItemLocalizarProduto],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuItemLocalizarProduto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
