import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ETimeComponent } from './e-time.component';

describe('ETimeComponent', () => {
  let component: ETimeComponent;
  let fixture: ComponentFixture<ETimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ETimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ETimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
