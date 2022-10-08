import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandperformnceComponent } from './brandperformnce.component';

describe('BrandperformnceComponent', () => {
  let component: BrandperformnceComponent;
  let fixture: ComponentFixture<BrandperformnceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandperformnceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandperformnceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
