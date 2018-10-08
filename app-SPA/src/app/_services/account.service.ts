import { Account } from './../models/account';
import { accountsApi } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  createAccount(account: Account) {
    return this.http.post(accountsApi, account);
  }

  updateAccount(account: Account) {
    return this.http.put(accountsApi + account.id, account);
  }

  deleteAccount(id) {
    return this.http.delete(accountsApi + id);
  }

  getAccounts() {
    return this.http.get(accountsApi);
  }

  getAccount(id) {
    return this.http.get(accountsApi + id);
  }
}
