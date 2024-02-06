import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Wallet } from '../../../Models/wallet';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-wallet',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './add-wallet.component.html',
  styleUrl: './add-wallet.component.css'
})
export class AddWalletComponent {
  wallet: Wallet;
  constructor(private http: HttpClient, private router: Router) {
    this.wallet = new Wallet();
  }
  addWallet() {
    this.http
      .post('http://localhost:5217/api/Wallet/AddWallet', this.wallet)
      .subscribe((response) => {
        console.log(response);
      });
    this.router.navigateByUrl('getallwallets'); 
  }

}
