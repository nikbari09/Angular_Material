import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAfterViewCheckedComponent } from './child-after-view-checked.component';

describe('ChildAfterViewCheckedComponent', () => {
  let component: ChildAfterViewCheckedComponent;
  let fixture: ComponentFixture<ChildAfterViewCheckedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildAfterViewCheckedComponent]
    });
    fixture = TestBed.createComponent(ChildAfterViewCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
