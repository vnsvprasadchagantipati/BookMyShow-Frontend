import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Show } from '../../../Models/show';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-get-all-shows',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './get-all-shows.component.html',
  styleUrl: './get-all-shows.component.css'
})
export class GetAllShowsComponent {
  shows: Show[] = [];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
  constructor(private http: HttpClient, private router: Router) {
    this.getAllShows();
  }
  getAllShows() {
    this.http
      .get<Show[]>('http://localhost:5217/api/Show/GetAllShows',
      this.httpOptions
      )
      .subscribe((response) => {
        this.shows = response;
        console.log(this.shows);
      });
  }
  delete(id: any) {
    console.log(id);
    this.http
      .delete('http://localhost:5217/api/Show/DeleteShow/' + id,
      this.httpOptions
      )
      .subscribe((response) => {
        console.log(response);
      });
      location.reload(); 
    this.getAllShows(); 
  }
  getId(id: any) {
    this.router.navigateByUrl('admindashboard/getshowbyid/' + id);
  }

}
