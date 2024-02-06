import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Show } from '../../../Models/show';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-add-show',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './add-show.component.html',
  styleUrl: './add-show.component.css'
})
export class AddShowComponent {
  show: Show;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
  constructor(private http: HttpClient, private router: Router) {
    this.show = new Show();
  }
  addShow() {
    this.http
      .post('http://localhost:5217/api/Show/AddShow', this.show,
      this.httpOptions
      )
      .subscribe((response) => {
        console.log(response);
      });
    this.router.navigateByUrl('admindashboard/getallshows').then(()=>{
      window.location.reload();
    }); 
  
  }

}
