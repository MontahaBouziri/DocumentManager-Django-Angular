import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BureauOdreComponent } from './bureau-odre.component';

describe('BureauOdreComponent', () => {
  let component: BureauOdreComponent;
  let fixture: ComponentFixture<BureauOdreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BureauOdreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BureauOdreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
