import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllBookingsComponent } from './get-all-bookings.component';

describe('GetAllBookingsComponent', () => {
  let component: GetAllBookingsComponent;
  let fixture: ComponentFixture<GetAllBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllBookingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
