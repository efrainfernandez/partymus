import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDormComponent } from './edit-dorm.component';

describe('EditDormComponent', () => {
  let component: EditDormComponent;
  let fixture: ComponentFixture<EditDormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
