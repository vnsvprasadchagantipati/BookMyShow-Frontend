import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Wallet } from '../../../Models/wallet';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-get-all-wallets',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './get-all-wallets.component.html',
  styleUrl: './get-all-wallets.component.css'
})
export class GetAllWalletsComponent {
  wallets: Wallet[] = [];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };
  constructor(private http: HttpClient, private router: Router) {
    this.getAllWallets();
  }
  getAllWallets() {
    let userID=localStorage.getItem('userID');
    this.http
      .get<Wallet[]>('http://localhost:5217/api/Wallet/GetWalletsByUserID/'+userID,
      this.httpOptions
      )
      .subscribe((response) => {
        this.wallets = response;
        console.log(this.wallets);
      });
  }
  delete(id: any) {
    console.log(id);
    this.http
      .delete('http://localhost:5217/api/Wallet/DeleteWallet/' + id)
      .subscribe((response) => {
        console.log(response);
      });
    this.getAllWallets(); 
    location.reload(); 
  }

}
