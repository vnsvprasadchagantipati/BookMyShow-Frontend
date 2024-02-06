import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Multiplex } from '../../../Models/multiplex';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { City } from '../../../Models/city';
@Component({
  selector: 'app-get-all-multiplexesadmin',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './get-all-multiplexesadmin.component.html',
  styleUrl: './get-all-multiplexesadmin.component.css'
})
export class GetAllMultiplexesadminComponent {
  multiplexes: Multiplex[] = [];
  cityID: number=0;
  cities:City[]=[];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
  constructor(private http: HttpClient, private router: Router) {
    //this.getAllMultiplexes();
    this.getAllCities();
  }
  getAllMultiplexes() {
    this.http
      .get<Multiplex[]>('http://localhost:5217/api/Multiplex/GetAllMultiplexes',
      this.httpOptions
      )
      .subscribe((response) => {
        this.multiplexes = response;
        console.log(this.multiplexes);
      });
  }
  getAllCities() {
    this.http
      .get<City[]>('http://localhost:5217/api/City/GetAllCities',
      this.httpOptions
      )
      .subscribe((response) => {
        this.cities = response;
        console.log(this.cities);
      });
  }
  getMultiplexByCityID() {
    const url = `http://localhost:5217/api/Multiplex/GetMultiplexByCityID/${this.cityID}`;
    this.http.get<Multiplex[]>(url, this.httpOptions).subscribe(
      (response) => {
        if (response && response.length > 0) {
          this.multiplexes = response;
          console.log(this.multiplexes);
        } else {
          console.log(`No multiplexes found for city ID: ${this.cityID}`);
          this.multiplexes = [];
        }
      },
      (error) => {
        console.error('Error fetching multiplexes:', error);
      }
    );
  }
  
  delete(id: any) {
    console.log(id);
    this.http
      .delete('http://localhost:5217/api/Multiplex/DeleteMultiplex/' + id,
      this.httpOptions
      )
      .subscribe((response) => {
        console.log(response);
      });
    this.getAllMultiplexes(); 
    location.reload(); 
  }
  getId(id: any) {
    this.router.navigateByUrl('admindashboard/multiplexbyid/' + id);
  }

}
