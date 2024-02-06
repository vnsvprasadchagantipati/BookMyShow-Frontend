import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { City } from '../../../Models/city';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-city',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './add-city.component.html',
  styleUrl: './add-city.component.css'
})
export class AddCityComponent {
  city: City;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
  constructor(private http: HttpClient, private router: Router) {
    this.city = new City();
  }
  addCity() {
    this.http
      .post('http://localhost:5217/api/City/AddCity', this.city,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
      });
    this.router.navigateByUrl('admindashboard/getallcities').then(()=>{
      window.location.reload();
    }) ; 
  }
}
