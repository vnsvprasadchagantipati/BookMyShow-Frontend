import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Booking } from '../../../Models/booking';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-booking-by-id',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './booking-by-id.component.html',
  styleUrl: './booking-by-id.component.css'
})
export class BookingByIdComponent {
  bookingID?: number = 0;
  booking: Booking;
  errMsg: string = '';
  isBookingExist: boolean = false;
  constructor(
    private http: HttpClient,
    private roter: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.booking = new Booking();
    this.activateRoute.params.subscribe((p) => (this.bookingID = p['mid']));
    console.log(this.bookingID);
    this.getbookingbyid();
  }
  getbookingbyid() {
    this.http
      .get<Booking>(
        'http://localhost:5217/api/Booking/GetBookingByID/' + this.bookingID
      )
      .subscribe((response) => {
        console.log(response);
        if (response != null) {
          this.booking = response;
          this.isBookingExist = true;
          this.errMsg = '';
        } else {
          this.errMsg = 'Invalid Booking ID';
          this.isBookingExist = false;
        }
      });
  }
  edit() {
    this.http
      .put('http://localhost:5217/api/Booking/EditBooking', this.booking)
      .subscribe((response) => {
        console.log(response);
      });
    this.roter.navigateByUrl('getallbookings');
  }
  delete() {
    this.bookingID = this.booking.bookingID;
    this.http
      .delete('http://localhost:5217/api/Booking/DeleteBooking/' + this.bookingID)
      .subscribe((response) => {
        console.log(response);
      });
    this.roter.navigateByUrl('getallbookings');
  }


}
