import { Account } from './../../models/account';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() mode = 'list';
  accountToEdit: Account;

  constructor() {
  }

  ngOnInit() {
  }

  onNew() {
    this.mode = 'new';
  }

  onEdit(mode) {
    this.mode = mode;
  }

  setAccountToEdit(acc: Account) {
    this.accountToEdit = acc;
  }

  getAccEditParams() {
    if (this.mode === 'new') {
      return { mode: this.mode, acc: null };
    } else {
      return { mode: this.mode, acc: {
        id: this.accountToEdit.id,
        accountNum: this.accountToEdit.accountNum,
        accountName: this.accountToEdit.accountName
      }};
    }
  }

  returnedResult(result) {
    this.mode = 'list';
  }

}
