import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDocheckComponent } from './parent-docheck.component';

describe('ParentDocheckComponent', () => {
  let component: ParentDocheckComponent;
  let fixture: ComponentFixture<ParentDocheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentDocheckComponent]
    });
    fixture = TestBed.createComponent(ParentDocheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
