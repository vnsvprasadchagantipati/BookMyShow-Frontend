import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Booking } from '../../../Models/booking';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { Coupon } from '../../../Models/coupon';
@Component({
  selector: 'app-add-booking',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './add-booking.component.html',
  styleUrl: './add-booking.component.css'
})
export class AddBookingComponent {
  booking:Booking;
  quantity: number = 1; 
  fixedValue: number = 200; 
  amount: number = this.fixedValue;
  couponCode: string = ''; 
  availableCoupons: Coupon[] = []; 

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
  constructor(private http: HttpClient, private router: Router) {
    this.booking=new Booking();
  }
  ngOnInit() {
    this.fetchAvailableCoupons();
  }
  calculateAmount() {
  this.booking.amount=this.fixedValue * this.quantity;
  this.amount=this.fixedValue;
  }
  
  fetchAvailableCoupons() {
    this.http.get<Coupon[]>('http://localhost:5217/api/Coupon/GetAllCoupons',this.httpOptions).subscribe(
      (coupons) => {
        this.availableCoupons = coupons;
        console.log('Available coupons:', this.availableCoupons);
      },
      (error) => {
        console.error('Error fetching coupons:', error);
      }
    );
  }
  applyCoupon() {
    if (this.couponCode === 'C10') {
      const discount = 100; 
  
      if (this.booking && this.booking.amount !== undefined) {
        const currentAmount = this.booking.amount;
  
        if (!isNaN(discount) && !isNaN(currentAmount)) {
          this.booking.amount = currentAmount - discount;
          console.log(`Applied coupon 'C10' with a discount of ${discount} rupees`);
        } else {
          console.error('Invalid discount or current amount');
        }
      } else {
        console.error('Booking or amount not available');
      }
    } else if (this.couponCode === 'C20') {
      const discount = 70; 
  
      if (this.booking && this.booking.amount !== undefined) {
        const currentAmount = this.booking.amount;
  
        if (!isNaN(discount) && !isNaN(currentAmount)) {
          this.booking.amount = currentAmount - discount;
          console.log(`Applied coupon 'C20' with a discount of ${discount} rupees`);
        } else {
          console.error('Invalid discount or current amount');
        }
      } else {
        console.error('Booking or amount not available');
      }
    } else {
      console.error('Invalid coupon code');
    }
  }
  
  
  
  addBooking() {
    let showID=localStorage.getItem("showID");
    let userID=localStorage.getItem('userID')
    this.http
      .post('http://localhost:5217/api/Booking/AddBooking',{        
        "amount": this.booking.amount,
        "bookingDateTime": this.booking.bookingDateTime,
        "showID": showID,
        "userID": userID
      },this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        alert('Booking added successfully!');
      });
   // this.router.navigateByUrl('getallbookings'); 
  }
  
  

}
