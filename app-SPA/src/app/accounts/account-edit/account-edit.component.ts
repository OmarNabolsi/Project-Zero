import { Account } from './../../models/account';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountService } from '../../_services/account.service';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements OnInit {
  @Output() returnedResult = new EventEmitter();
  @Input() accEditParams: any;
  accountForm: FormGroup;
  accountNumInValid = false;
  mode = 'New';

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountForm = new FormGroup({
      accountNum: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      accountName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)])
    });

    if (this.accEditParams.acc === null) {
      this.mode = 'New';
      this.accountForm.reset();
    } else {
      this.mode = 'Edit';
      this.accountForm.setValue({
        accountNum: this.accEditParams.acc.accountNum,
        accountName: this.accEditParams.acc.accountName
      });
    }
  }

  onSave() {
    const account: Account = {
      id: 0,
      accountNum: this.accountForm.get('accountNum').value,
      accountName: this.accountForm.get('accountName').value
    };

    if (this.mode === 'New') {
      this.accountService.createAccount(account).subscribe((res: Account) => {
        const result = {
          mode: 'added',
          data: res
        };
        this.returnedResult.emit(result);
      }, error => console.error(error));
    } else {
      account.id = this.accEditParams.acc.id;
      this.accountService.updateAccount(account).subscribe((res: Account) => {
        const result = {
          mode: 'edited',
          data: res
        };
        this.returnedResult.emit(result);
      }, error => console.error(error));
    }
  }

  onCancel() {
    const result = {
      mode: 'canceled',
      data: ''
    };
    this.returnedResult.emit(result);
  }
}
