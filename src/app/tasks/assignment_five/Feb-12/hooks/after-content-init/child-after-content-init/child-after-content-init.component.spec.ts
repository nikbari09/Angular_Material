import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAfterContentInitComponent } from './child-after-content-init.component';

describe('ChildAfterContentInitComponent', () => {
  let component: ChildAfterContentInitComponent;
  let fixture: ComponentFixture<ChildAfterContentInitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildAfterContentInitComponent]
    });
    fixture = TestBed.createComponent(ChildAfterContentInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
