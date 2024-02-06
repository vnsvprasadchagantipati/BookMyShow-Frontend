import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Coupon } from '../../../Models/coupon';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-coupon',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './add-coupon.component.html',
  styleUrl: './add-coupon.component.css'
})
export class AddCouponComponent {
  coupon: Coupon;
  constructor(private http: HttpClient, private router: Router) {
    this.coupon = new Coupon();
  }
  addCoupon() {
    this.http
      .post('http://localhost:5217/api/Coupon/AddCoupon', this.coupon)
      .subscribe((response) => {
        console.log(response);
      });
    this.router.navigateByUrl('getallcoupons'); 
  }

}
