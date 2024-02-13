import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAfterContentCheckedComponent } from './child-after-content-checked.component';

describe('ChildAfterContentCheckedComponent', () => {
  let component: ChildAfterContentCheckedComponent;
  let fixture: ComponentFixture<ChildAfterContentCheckedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildAfterContentCheckedComponent]
    });
    fixture = TestBed.createComponent(ChildAfterContentCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
