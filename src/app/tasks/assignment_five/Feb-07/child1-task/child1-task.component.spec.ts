import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1TaskComponent } from './child1-task.component';

describe('Child1TaskComponent', () => {
  let component: Child1TaskComponent;
  let fixture: ComponentFixture<Child1TaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Child1TaskComponent]
    });
    fixture = TestBed.createComponent(Child1TaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
