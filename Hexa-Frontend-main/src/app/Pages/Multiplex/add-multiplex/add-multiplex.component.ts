import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Multiplex } from '../../../Models/multiplex';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-add-multiplex',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './add-multiplex.component.html',
  styleUrl: './add-multiplex.component.css'
})
export class AddMultiplexComponent {
  multiplex: Multiplex;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
  constructor(private http: HttpClient, private router: Router) {
    this.multiplex = new Multiplex();
  }
  addMultiplex() {
    this.http
      .post('http://localhost:5217/api/Multiplex/AddMultiplex', this.multiplex,
      this.httpOptions
      )
      .subscribe((response) => {
        console.log(response);
      });
    this.router.navigateByUrl('admindashboard/getallmultiplexes').then(()=>{
      window.location.reload();
    }) ; 
  }

}
