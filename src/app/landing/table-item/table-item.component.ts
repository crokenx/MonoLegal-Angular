import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

import { BillsService } from 'src/app/core/bills.service';
import { Bill } from '../table/table.interface';

@Component({
  selector: 'app-table-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.scss']
})
export class TableItemComponent implements OnInit, OnDestroy {

  @Input() bill: Bill;

  waitingResponse$ = new BehaviorSubject<boolean>(false);

  imWaiting: boolean = false;

  constructor(
    private billsService: BillsService,
  ) {}

  ngOnInit(): void {
  }

  reminderNumber(reminder: string) {
    const message: any = { primerrecordatorio: "1er Aviso", segundorecordatorio: "2do Aviso", desactivado: "Desactivado" };
    return message[reminder];
  }

  buttonText(status: string) {
    const message: any = { primerrecordatorio: "Realizar 1er Aviso", segundorecordatorio: "Realizar 2do Aviso", desactivado: "Desactivado" };
    return message[status];
  }

  sendNotification(bill: Bill){
    if(this.imWaiting) return;
    if(bill.Estado === "desactivado") return;

    this.imWaiting = true;

    this.waitingResponse$.next(true);

    const billStatus = this.bill.Estado;

    this.billsService.changeBillState(bill).subscribe((bill) => {
      this.waitingResponse$.next(false);
      this.imWaiting = false;
      if(bill === null) return;
      if(billStatus !== bill.Estado) this.bill = bill;
    });
  }

  ngOnDestroy() {
  }

}
