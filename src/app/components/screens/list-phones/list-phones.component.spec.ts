import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPhonesComponent } from './list-phones.component';

describe('ListPhonesComponent', () => {
  let component: ListPhonesComponent;
  let fixture: ComponentFixture<ListPhonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPhonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
