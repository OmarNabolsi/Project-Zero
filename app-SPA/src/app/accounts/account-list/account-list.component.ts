import { Account } from './../../models/account';
import { AccountService } from './../../_services/account.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  @Output() selectedAccount = new EventEmitter();
  @Output() editSelectedAccount = new EventEmitter();
  accountList: Account[] = [];
  selectedTableRow = -1;
  mouseenterId = -1;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getAccounts().subscribe((res: Account[]) =>
      this.accountList = res
    , error => console.error(error));
  }

  rowSelected(id) {
    this.selectedTableRow = id;

    this.accountService.getAccount(id).subscribe((res: Account) => {
      const acc = res;
      this.selectedAccount.emit(acc);
    }, error => console.log(error));
  }

  ondblClick(id) {
    const mode = 'view';
    this.rowSelected(id);
    this.editSelectedAccount.emit(mode);
  }

  onEdit(id) {
    const mode = 'edit';
    this.accountService.getAccount(id).subscribe((res: Account) => {
      const acc = res;
      this.selectedAccount.emit(acc);
      this.editSelectedAccount.emit(mode);
    }, error => console.log(error));
  }

  onMouseEnter(id) {
    this.mouseenterId = id;
  }

  onMouseLeave() {
    this.mouseenterId = -1;
  }
}
