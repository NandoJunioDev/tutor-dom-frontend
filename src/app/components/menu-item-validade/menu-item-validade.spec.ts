import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuItemValidade } from './menu-item-validade';

describe('MenuItemValidade', () => {
  let component: MenuItemValidade;
  let fixture: ComponentFixture<MenuItemValidade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuItemValidade],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuItemValidade);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
