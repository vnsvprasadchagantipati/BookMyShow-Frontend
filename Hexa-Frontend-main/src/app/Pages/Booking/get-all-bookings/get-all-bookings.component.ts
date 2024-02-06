import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Booking } from '../../../Models/booking';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-get-all-bookings',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './get-all-bookings.component.html',
  styleUrl: './get-all-bookings.component.css'
})
export class GetAllBookingsComponent {
  bookings: Booking[] = [];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
  constructor(private http: HttpClient, private router: Router) {
    this.getAllBookings();
  }
  getAllBookings() {
    let userID=localStorage.getItem('userID');
    this.http
      .get<Booking[]>('http://localhost:5217/api/Booking/GetAllBookings?userID='+userID,
      this.httpOptions
      )
      .subscribe((response) => {
        this.bookings = response;
        console.log(this.bookings);
      });
  }
  delete(id: any) {
    console.log(id);
    this.http
      .delete('http://localhost:5217/api/Booking/DeleteBooking/' + id,
      this.httpOptions
      )
      .subscribe((response) => {
        console.log(response);
      });
    this.getAllBookings(); 
    location.reload(); 
  }
  getId(id: any) {
    this.router.navigateByUrl('admindashboard/getbookingbyid/:mid' + id);
  }

}
