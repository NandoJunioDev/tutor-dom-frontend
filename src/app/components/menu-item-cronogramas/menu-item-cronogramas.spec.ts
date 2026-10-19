import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuItemCronogramas } from './menu-item-cronogramas';

describe('MenuItemCronogramas', () => {
  let component: MenuItemCronogramas;
  let fixture: ComponentFixture<MenuItemCronogramas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuItemCronogramas],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuItemCronogramas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
