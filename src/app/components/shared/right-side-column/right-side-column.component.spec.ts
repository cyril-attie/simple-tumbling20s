import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideColumnComponent } from './right-side-column.component';

describe('RightSideColumnComponent', () => {
  let component: RightSideColumnComponent;
  let fixture: ComponentFixture<RightSideColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightSideColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSideColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
