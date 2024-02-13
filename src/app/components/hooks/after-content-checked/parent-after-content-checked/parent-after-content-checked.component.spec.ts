import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentAfterContentCheckedComponent } from './parent-after-content-checked.component';

describe('ParentAfterContentCheckedComponent', () => {
  let component: ParentAfterContentCheckedComponent;
  let fixture: ComponentFixture<ParentAfterContentCheckedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentAfterContentCheckedComponent]
    });
    fixture = TestBed.createComponent(ParentAfterContentCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
