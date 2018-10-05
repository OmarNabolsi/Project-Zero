import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements OnInit {
  account: any = {};
  accountForm: FormGroup;
  accountNumInValid = false;

  constructor() { }

  ngOnInit() {
    this.accountForm = new FormGroup({
      accountNum: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      accountName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)])
    });
  }

  onSave() {
    console.log(this.accountForm.value);
  }
}
