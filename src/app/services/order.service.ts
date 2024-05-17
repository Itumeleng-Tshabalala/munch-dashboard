import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../interface/order.interface';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private httpClient: HttpClient
  ) { }

  // Retrieve Orders
  getOrders(search?: string): Observable<Order[]> {
    if (search)
      search = `?name=${search}`;
    return this.httpClient.get<Order[]>(`${environment.host}/orders${search}`);
  }
}
