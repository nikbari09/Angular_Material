import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentAfterContentInitComponent } from './parent-after-content-init.component';

describe('ParentAfterContentInitComponent', () => {
  let component: ParentAfterContentInitComponent;
  let fixture: ComponentFixture<ParentAfterContentInitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentAfterContentInitComponent]
    });
    fixture = TestBed.createComponent(ParentAfterContentInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
