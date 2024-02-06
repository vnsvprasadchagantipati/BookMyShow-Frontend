import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movie } from '../../../Models/movie';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-movie-by-id',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './movie-by-id.component.html',
  styleUrl: './movie-by-id.component.css'
})
export class MovieByIdComponent {
  movieID?: number = 0;
  movie: Movie;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
  errMsg: string = '';
  isMovieExist: boolean = false;
  constructor(
    private http: HttpClient,
    private roter: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.movie = new Movie();
    this.activateRoute.params.subscribe((p) => (this.movieID = p['mid']));
    console.log(this.movieID);
    this.getmoviebyid();
  }
  getmoviebyid() {
    this.http
      .get<Movie>(
        'http://localhost:5217/api/Movie/GetMovieByID/' + this.movieID,
        this.httpOptions
      )
      .subscribe((response) => {
        console.log(response);
        if (response != null) {
          this.movie = response;
          this.isMovieExist = true;
          this.errMsg = '';
        } else {
          this.errMsg = 'Invalid Movie ID';
          this.isMovieExist = false;
        }
      });
  }
  edit() {
    this.http
      .put('http://localhost:5217/api/Movie/EditMovie', this.movie,
      this.httpOptions
      )
      .subscribe((response) => {
        console.log(response);
      });
    this.roter.navigateByUrl('admindashboard/getallmovies').then(()=>{
      window.location.reload();
    }) ;
  }
  delete() {
    this.movieID = this.movie.movieID;
    this.http
      .delete('http://localhost:5217/api/Movie/DeleteMovie/' + this.movieID,
      this.httpOptions)
      .subscribe((response) => {
        console.log(response);
      });
    this.roter.navigateByUrl('admindashboard/getallmovies').then(()=>{
      window.location.reload();
    }) ;
  }



}
