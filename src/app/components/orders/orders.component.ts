import { Component, OnInit } from '@angular/core';
import { OrderComponent } from '../order/order.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { OrderService } from '../../services/order.service';
import { Order } from '../../interface/order.interface';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    OrderComponent,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {

  public orders: Order[] = [];
  public filterForm: FormGroup | undefined;

  constructor(private _orderService: OrderService, private formBuilder: FormBuilder) {
    this.initForm();
  }

  ngOnInit() {
    this.getOrders();
  }

  private initForm() {
    this.filterForm = this.formBuilder.group({
      sameDay: [false],
      nextDay: [false],
      nextWeek: [false]
    });
  }

  public handleSearch(event: KeyboardEvent): void {
    const search = (event.target as HTMLInputElement).value;
    this.getOrders(search);
  }

  public getOrders(search: string = ''): void {
    this._orderService.getOrders(search).subscribe({
      next: (orders: Order[]) => { this.orders = orders; },
      error: (error: Error) => { console.error("Unable to retrieve data.", error); },
      complete: () => { console.debug("Completed."); }
    });
  }
}
