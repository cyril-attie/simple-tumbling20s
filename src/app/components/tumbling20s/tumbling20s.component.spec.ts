import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tumbling20sComponent } from './tumbling20s.component';

describe('Tumbling20sComponent', () => {
  let component: Tumbling20sComponent;
  let fixture: ComponentFixture<Tumbling20sComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tumbling20sComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tumbling20sComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
