import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOndestroyComponent } from './child-ondestroy.component';

describe('ChildOndestroyComponent', () => {
  let component: ChildOndestroyComponent;
  let fixture: ComponentFixture<ChildOndestroyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildOndestroyComponent]
    });
    fixture = TestBed.createComponent(ChildOndestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
