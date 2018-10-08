import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  constructor() { }

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
    const result = {
      mode: this.mode === 'New' ? 'added' : 'edited',
      data: this.accountForm.value
    };
    this.returnedResult.emit(result);
  }

  onCancel() {
    const result = {
      mode: 'canceled',
      data: ''
    };
    this.returnedResult.emit(result);
  }
}
