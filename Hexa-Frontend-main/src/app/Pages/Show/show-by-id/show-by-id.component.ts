import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Show } from '../../../Models/show';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-show-by-id',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './show-by-id.component.html',
  styleUrl: './show-by-id.component.css'
})
export class ShowByIdComponent {
  showID?: number = 0;
  show: Show;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
  errMsg: string = '';
  isShowExist: boolean = false;
  constructor(
    private http: HttpClient,
    private roter: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.show = new Show();
    this.activateRoute.params.subscribe((p) => (this.showID = p['mid']));
    console.log(this.showID);
    this.getshowbyid();
  }
  getshowbyid() {
    this.http
      .get<Show>(
        'http://localhost:5217/api/Show/GetShowByID/' + this.showID,
        this.httpOptions
      )
      .subscribe((response) => {
        console.log(response);
        if (response != null) {
          this.show = response;
          this.isShowExist = true;
          this.errMsg = '';
        } else {
          this.errMsg = 'Invalid Show ID';
          this.isShowExist = false;
        }
      });
  }
  edit() {
    this.http
      .put('http://localhost:5217/api/Show/EditShow', this.show,
      this.httpOptions
      )
      .subscribe((response) => {
        console.log(response);
      });
    this.roter.navigateByUrl('admindashboard/getallshows').then(()=>{
      window.location.reload();
    }) ;
  }
  delete() {
    this.showID = this.show.showID;
    this.http
      .delete('http://localhost:5217/api/Show/DeleteShow/' + this.showID,
      this.httpOptions
      )
      .subscribe((response) => {
        console.log(response);
      });
    this.roter.navigateByUrl('admindashboard/getallshows').then(()=>{
      window.location.reload();
    }) ;
  }

}
