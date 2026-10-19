import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuItemAnuncios } from './menu-item-anuncios';

describe('MenuItemAnuncios', () => {
  let component: MenuItemAnuncios;
  let fixture: ComponentFixture<MenuItemAnuncios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuItemAnuncios],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuItemAnuncios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
