import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOninitComponent } from './parent-oninit.component';

describe('ParentOninitComponent', () => {
  let component: ParentOninitComponent;
  let fixture: ComponentFixture<ParentOninitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentOninitComponent]
    });
    fixture = TestBed.createComponent(ParentOninitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
