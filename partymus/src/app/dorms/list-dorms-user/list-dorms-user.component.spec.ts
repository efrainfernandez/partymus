import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDormsUserComponent } from './list-dorms-user.component';

describe('ListDormsUserComponent', () => {
  let component: ListDormsUserComponent;
  let fixture: ComponentFixture<ListDormsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDormsUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDormsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
