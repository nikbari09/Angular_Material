import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAfterViewInitComponent } from './child-after-view-init.component';

describe('ChildAfterViewInitComponent', () => {
  let component: ChildAfterViewInitComponent;
  let fixture: ComponentFixture<ChildAfterViewInitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildAfterViewInitComponent]
    });
    fixture = TestBed.createComponent(ChildAfterViewInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
