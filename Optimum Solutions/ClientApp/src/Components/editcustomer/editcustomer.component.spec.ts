import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcustomerComponent } from './editcustomer.component';

describe('EditcustomerComponent', () => {
  let component: EditcustomerComponent;
  let fixture: ComponentFixture<EditcustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditcustomerComponent]
    });
    fixture = TestBed.createComponent(EditcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
