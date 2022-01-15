import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDormComponent } from './list-dorm.component';

describe('ListDormComponent', () => {
  let component: ListDormComponent;
  let fixture: ComponentFixture<ListDormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
