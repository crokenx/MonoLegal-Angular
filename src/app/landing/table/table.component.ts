import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BillsService } from 'src/app/core/bills.service';
import { Bill } from './table.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  bills$: Observable<Bill[]>;

  constructor(
    private billsService: BillsService,
  ) { }

  ngOnInit(): void {
    this.bills$ = this.billsService.getBills();
  }

}
