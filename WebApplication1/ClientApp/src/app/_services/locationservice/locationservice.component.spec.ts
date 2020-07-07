import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationserviceComponent } from './locationservice.component';

describe('LocationserviceComponent', () => {
  let component: LocationserviceComponent;
  let fixture: ComponentFixture<LocationserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
