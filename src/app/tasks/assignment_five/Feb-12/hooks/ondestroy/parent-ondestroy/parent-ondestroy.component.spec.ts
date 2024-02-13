import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOndestroyComponent } from './parent-ondestroy.component';

describe('ParentOndestroyComponent', () => {
  let component: ParentOndestroyComponent;
  let fixture: ComponentFixture<ParentOndestroyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentOndestroyComponent]
    });
    fixture = TestBed.createComponent(ParentOndestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
