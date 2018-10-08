import { Component, OnInit, ViewChild, Output, EventEmitter, AfterViewInit } from '@angular/core';
import {MatTableDataSource, PageEvent, MatPaginator, MatSort} from '@angular/material';

export interface PeriodicElement {
  name: string;
  num: number;
  weight: number;
  symbol: string;
}

const accounts: any[] = [
  {id: 1, accountNum: '10000', accountName: 'Assets'},
  {id: 2, accountNum: '20000', accountName: 'Liabilities'},
  {id: 3, accountNum: '30000', accountName: 'Equities'}
];

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  @Output() selectedAccount = new EventEmitter();
  @Output() editSelectedAccount = new EventEmitter();
  accountList: any[] = [];
  selectedTableRow = -1;
  mouseenterId = -1;

  constructor() { }

  ngOnInit() {
    this.accountList = accounts;
  }

  rowSelected(id) {
    this.selectedTableRow = id;

    const acc = accounts.find(a => a.id === id);
    this.selectedAccount.emit(acc);
  }

  ondblClick(id) {
    const mode = 'view';
    this.rowSelected(id);
    this.editSelectedAccount.emit(mode);
  }

  onEdit(id) {
    const mode = 'edit';
    this.rowSelected(id);
    this.editSelectedAccount.emit(mode);
  }

  onMouseEnter(id) {
    this.mouseenterId = id;
  }

  onMouseLeave() {
    this.mouseenterId = -1;
  }
}
