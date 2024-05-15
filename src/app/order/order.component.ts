import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { Order } from '../interface/order.interface';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,
    MatDividerModule,
    MatChipsModule,
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
})
export class OrderComponent {
  @Input({ required: true }) order!: Order;
}
