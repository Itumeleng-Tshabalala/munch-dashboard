import { Component } from '@angular/core';
import { OrderComponent } from '../order/order.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { OrderService } from '../services/order.service';
import { Order } from '../interface/order.interface';

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
  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent {

  filter = {
    sameDay: false,
    nextDay: false,
    nextWeek: false,
  };

  public orders: Order[] = [];

  constructor(private _orderService: OrderService) { }

  ngOnInit() {
    this.getOrders();
  }

  // Get orders from a service
  private getOrders() {
    this._orderService.getOrders().subscribe({
      next: (orders: Order[]) => {
        // Assign orders
        this.orders = orders;
      }
    })
  }
}
