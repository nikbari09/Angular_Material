import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2TaskComponent } from './child2-task.component';

describe('Child2TaskComponent', () => {
  let component: Child2TaskComponent;
  let fixture: ComponentFixture<Child2TaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Child2TaskComponent]
    });
    fixture = TestBed.createComponent(Child2TaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
