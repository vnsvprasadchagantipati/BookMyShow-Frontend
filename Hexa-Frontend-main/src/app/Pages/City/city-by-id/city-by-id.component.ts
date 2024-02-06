import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { City } from '../../../Models/city';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router ,ActivatedRoute} from '@angular/router';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-city-by-id',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './city-by-id.component.html',
  styleUrl: './city-by-id.component.css'
})
export class CityByIdComponent {
  cityID?: number = 0;
  city: City;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
  errMsg: string = '';
  isCityExist: boolean = false;
  constructor(
    private http: HttpClient,
    private roter: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.city = new City();
    this.activateRoute.params.subscribe((p) => (this.cityID = p['mid']));
    console.log(this.cityID);
    this.search();
  }
  search() {
    this.http
      .get<City>(
        'http://localhost:5217/api/City/GetCityByID/' + this.cityID,this.httpOptions
      )
      .subscribe((response) => {
        console.log(response);
        if (response != null) {
          this.city = response;
          this.isCityExist = true;
          this.errMsg = '';
        } else {
          this.errMsg = 'Invalid City ID';
          this.isCityExist = false;
        }
      });
  }
  edit() {
    this.http
      .put('http://localhost:5217/api/City/EditCity', this.city,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
      });
    this.roter.navigateByUrl('admindashboard/getallcities');
  }
  delete() {
    this.cityID = this.city.cityID;
    this.http
      .delete('http://localhost:5217/api/City/DeleteCity/' + this.cityID,this.httpOptions)
      .subscribe((response) => {
        console.log(response);
      });
    this.roter.navigateByUrl('admindashboard/getallcities');
  }


}
