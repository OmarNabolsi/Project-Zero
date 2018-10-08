import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() mode = 'list';
  accountToEdit: any;

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

  setAccountToEdit(acc) {
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
    if (result.mode === 'added') {
      this.mode = 'list';
      console.log(result.mode);
      console.log(result.data);
    } else {
      this.mode = 'list';
      console.log(result.mode);
    }
  }

}
