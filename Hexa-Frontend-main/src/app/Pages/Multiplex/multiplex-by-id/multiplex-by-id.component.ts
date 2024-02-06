import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Multiplex } from '../../../Models/multiplex';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-multiplex-by-id',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './multiplex-by-id.component.html',
  styleUrl: './multiplex-by-id.component.css'
})
export class MultiplexByIdComponent {
  mulID?: number = 0;
  multiplex: Multiplex;
  errMsg: string = '';
  isMultiplexExist: boolean = false;
  constructor(
    private http: HttpClient,
    private roter: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.multiplex = new Multiplex();
    this.activateRoute.params.subscribe((p) => (this.mulID = p['mid']));
    console.log(this.mulID);
    this.multiplexbyid();
  }
  multiplexbyid() {
    this.http
      .get<Multiplex>(
        'http://localhost:5217/api/Multiplex/GetMultiplexByID/' + this.mulID
      )
      .subscribe((response) => {
        console.log(response);
        if (response != null) {
          this.multiplex = response;
          this.isMultiplexExist = true;
          this.errMsg = '';
        } else {
          this.errMsg = 'Invalid Multiplex ID';
          this.isMultiplexExist = false;
        }
      });
  }
  edit() {
    this.http
      .put('http://localhost:5217/api/Multiplex/EditMultiplex', this.multiplex)
      .subscribe((response) => {
        console.log(response);
      });
    this.roter.navigateByUrl('admindashboard/getallmultiplexes');
  }
  delete() {
    this.mulID = this.multiplex.mulID;
    this.http
      .delete('http://localhost:5217/api/Multiplex/DeleteMultiplex/' + this.mulID)
      .subscribe((response) => {
        console.log(response);
      });
    this.roter.navigateByUrl('admindashboard/getallmultiplexes');
  }


}
