import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Movie } from '../../../Models/movie';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-get-all-movies',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './get-all-movies.component.html',
  styleUrl: './get-all-movies.component.css'
})
export class GetAllMoviesComponent {
  movies: Movie[] = [];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
  constructor(private http: HttpClient, private router: Router) {
    this.getAllMovies();
  }
  getAllMovies() {
    this.http
      .get<Movie[]>('http://localhost:5217/api/Movie/GetAllMovies',
      this.httpOptions
      )
      .subscribe((response) => {
        this.movies = response;
        console.log(this.movies);
      });
  }
  delete(id: any) {
    console.log(id);
    this.http
      .delete('http://localhost:5217/api/Movie/DeleteMovie/' + id,
      this.httpOptions
      )
      .subscribe((response) => {
        console.log(response);
      });
    this.getAllMovies(); 
    location.reload(); 
  }
  getId(id: any) {
    this.router.navigateByUrl('admindashboard/getmoviebyid/' + id);
  }

}
