import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Coupon } from '../../../Models/coupon';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-get-all-coupons',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './get-all-coupons.component.html',
  styleUrl: './get-all-coupons.component.css'
})
export class GetAllCouponsComponent {
  coupons: Coupon[] = [];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
  constructor(private http: HttpClient, private router: Router) {
    this.getAllCoupons();
  }
  getAllCoupons() {
    this.http
      .get<Coupon[]>('http://localhost:5217/api/Coupon/GetAllCoupons',this.httpOptions)
      .subscribe((response) => {
        this.coupons = response;
        console.log(this.coupons);
      });
  }
  delete(id: any) {
    console.log(id);
    this.http
      .delete('http://localhost:5217/api/Coupon/DeleteCoupon/' + id)
      .subscribe((response) => {
        console.log(response);
      });
    this.getAllCoupons(); 
    location.reload(); 
  }

}
