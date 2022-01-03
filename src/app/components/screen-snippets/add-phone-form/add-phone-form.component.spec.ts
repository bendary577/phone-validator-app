import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhoneFormComponent } from './add-phone-form.component';

describe('AddPhoneFormComponent', () => {
  let component: AddPhoneFormComponent;
  let fixture: ComponentFixture<AddPhoneFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPhoneFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPhoneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
