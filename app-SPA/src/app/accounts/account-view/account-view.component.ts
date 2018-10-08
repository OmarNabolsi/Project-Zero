import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.css']
})
export class AccountViewComponent implements OnInit {
  @Output() returnedResult = new EventEmitter();
  @Input() accViewParams: any;
  accountForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.accountForm = new FormGroup({
      accountNum: new FormControl(''),
      accountName: new FormControl('')
    });
    this.accountForm.setValue({
      accountNum: this.accViewParams.acc.accountNum,
      accountName: this.accViewParams.acc.accountName
    });
  }

  onCancel() {
    const result = {
      mode: 'canceled',
      data: ''
    };
    this.returnedResult.emit(result);
  }

}
