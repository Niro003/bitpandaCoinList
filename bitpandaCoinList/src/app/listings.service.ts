import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(private httpClient:HttpClient) {

  }

   getListings(){
     return this.httpClient.get('/listings/');
   }
}
