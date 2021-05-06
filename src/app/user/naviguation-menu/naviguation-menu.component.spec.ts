import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviguationMenuComponent } from './naviguation-menu.component';

describe('NaviguationMenuComponent', () => {
  let component: NaviguationMenuComponent;
  let fixture: ComponentFixture<NaviguationMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaviguationMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaviguationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
