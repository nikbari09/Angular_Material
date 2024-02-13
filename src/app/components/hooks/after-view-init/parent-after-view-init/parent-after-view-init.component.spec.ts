import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentAfterViewInitComponent } from './parent-after-view-init.component';

describe('ParentAfterViewInitComponent', () => {
  let component: ParentAfterViewInitComponent;
  let fixture: ComponentFixture<ParentAfterViewInitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentAfterViewInitComponent]
    });
    fixture = TestBed.createComponent(ParentAfterViewInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
