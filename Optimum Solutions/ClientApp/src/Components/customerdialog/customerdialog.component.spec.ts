import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerdialogComponent } from './customerdialog.component';

describe('CustomerdialogComponent', () => {
  let component: CustomerdialogComponent;
  let fixture: ComponentFixture<CustomerdialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerdialogComponent]
    });
    fixture = TestBed.createComponent(CustomerdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
