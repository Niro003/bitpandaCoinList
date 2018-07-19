import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TickerService {

  constructor(private httpClient:HttpClient) {

  }

  getTicker(id: Number){
    return this.httpClient.get('/ticker/' + id);
  }
}
