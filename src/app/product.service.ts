import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductRequest, ProductResponse } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    api: string="";
    
  constructor(private http: HttpClient) { }

  
  getProductList() {
    this.api="https://localhost:7237/api/Products";
    return this.http.get<any>(this.api);
  }

  addProduct(product: ProductRequest) {
    this.api="https://localhost:7237/api/Products";
    let headers = new HttpHeaders({});
    let options = { headers: headers };
    const params ={
      name: product.name,
      description: product.description,
      brand: product.brand,
      price: product.price
      
    };
    return this.http.post<any>(this.api,params,options);
  }

  getProduct(p:any){
    this.api="https://localhost:7237/api/Products/"+p;

    return this.http.get<any>(this.api);
  }
}
