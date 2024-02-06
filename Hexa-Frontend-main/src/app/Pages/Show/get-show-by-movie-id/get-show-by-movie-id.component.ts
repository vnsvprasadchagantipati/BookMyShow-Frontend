import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Show } from '../../../Models/show';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-show-by-movie-id',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './get-show-by-movie-id.component.html',
  styleUrl: './get-show-by-movie-id.component.css'
})
export class GetShowByMovieIdComponent {
  shows:Show[]=[];
  showID:number=0;
  show:Show;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
  constructor(private http: HttpClient, private router: Router) {
    //this.getAllMultiplexes();
    this.show= new Show();
  //this.getShowByMovieID();
  }
 
  /*getShowByMovieID() {
    const url = `http://localhost:5217/api/Show/GetShowsByMovieID/${this.showID}`;
    this.http.get<Show[]>(url, this.httpOptions).subscribe(
      (response) => {
        if (response && response.length > 0) {
          this.shows = response;
          console.log(this.shows);
        } else {
          console.log(`No Shows found for Movie ID: ${this.showID}`);
          this.shows= [];
        }
      },
      (error) => {
        console.error('Error fetching Shows:', error);
      }
    );
  }*/

}
