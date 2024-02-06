import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

   
  public product_api = "https://dummyjson.com/products";

  constructor(private readonly httpClient:HttpClient) { }
 
   getProducts(){
    return this.httpClient.get(this.product_api);
   }

}
