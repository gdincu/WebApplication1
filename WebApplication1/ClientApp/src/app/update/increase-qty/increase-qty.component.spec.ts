import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseQtyComponent } from './increase-qty.component';

describe('IncreaseQtyComponent', () => {
  let component: IncreaseQtyComponent;
  let fixture: ComponentFixture<IncreaseQtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncreaseQtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncreaseQtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
