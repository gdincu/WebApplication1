import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeserviceComponent } from './typeservice.component';

describe('TypeserviceComponent', () => {
  let component: TypeserviceComponent;
  let fixture: ComponentFixture<TypeserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
