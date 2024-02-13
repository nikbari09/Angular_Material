import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentAfterViewCheckedComponent } from './parent-after-view-checked.component';

describe('ParentAfterViewCheckedComponent', () => {
  let component: ParentAfterViewCheckedComponent;
  let fixture: ComponentFixture<ParentAfterViewCheckedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentAfterViewCheckedComponent]
    });
    fixture = TestBed.createComponent(ParentAfterViewCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
