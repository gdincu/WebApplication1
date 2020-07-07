import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerserviceComponent } from './manufacturerservice.component';

describe('ManufacturerserviceComponent', () => {
  let component: ManufacturerserviceComponent;
  let fixture: ComponentFixture<ManufacturerserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturerserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
