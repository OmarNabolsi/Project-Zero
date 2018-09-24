import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, PageEvent, MatPaginator, MatSort} from '@angular/material';

export interface PeriodicElement {
  name: string;
  num: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {num: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {num: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {num: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {num: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {num: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {num: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {num: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {num: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {num: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {num: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {num: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {num: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {num: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {num: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {num: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
