import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecustomerdialogComponent } from './deletecustomerdialog.component';

describe('DeletecustomerdialogComponent', () => {
  let component: DeletecustomerdialogComponent;
  let fixture: ComponentFixture<DeletecustomerdialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletecustomerdialogComponent]
    });
    fixture = TestBed.createComponent(DeletecustomerdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
