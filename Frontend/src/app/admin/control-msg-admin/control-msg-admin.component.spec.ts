import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlMsgAdminComponent } from './control-msg-admin.component';

describe('ControlMsgAdminComponent', () => {
  let component: ControlMsgAdminComponent;
  let fixture: ComponentFixture<ControlMsgAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlMsgAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlMsgAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
