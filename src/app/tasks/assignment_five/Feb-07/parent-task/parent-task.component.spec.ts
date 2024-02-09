import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTaskComponent } from './parent-task.component';

describe('ParentTaskComponent', () => {
  let component: ParentTaskComponent;
  let fixture: ComponentFixture<ParentTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentTaskComponent]
    });
    fixture = TestBed.createComponent(ParentTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
