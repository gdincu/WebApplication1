import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TireserviceComponent } from './tireservice.component';

describe('TireserviceComponent', () => {
  let component: TireserviceComponent;
  let fixture: ComponentFixture<TireserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TireserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TireserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
