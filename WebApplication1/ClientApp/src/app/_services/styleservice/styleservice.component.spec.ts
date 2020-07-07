import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleserviceComponent } from './styleservice.component';

describe('StyleserviceComponent', () => {
  let component: StyleserviceComponent;
  let fixture: ComponentFixture<StyleserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
