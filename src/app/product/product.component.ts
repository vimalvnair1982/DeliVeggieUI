import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  productList:any;
  name:string='';
  desc:string='';
  brand:string='';
  price:string='';

  productDesc:string='';
  productBrand:string='';
  productPrice:string='';

  result:string='';
  constructor(public _productService: ProductService) {}

  product={'name':'', 'description':'', 'brand':'','price':''};
  ngOnInit() {
    
    this.GetProductList();
  }
 
  GetProductList(){
    this._productService.getProductList().subscribe((response: any) => {
      this.productList = response;
      console.log("list product",response);
    });
  }
  AddProduct(){
    if(this.name=='' || this.desc=='' || this.brand=='' || this.price=='')
    {
      alert("Please fill all the fields");
      this.result="Please fill all the fields";
      return
    }
    this.product.name=this.name;
    this.product.description=this.desc;
    this.product.brand=this.brand;
    this.product.price=this.price;

    console.log(this.product);

    this._productService.addProduct(this.product).subscribe((response: any) => {
      console.log("add product" , response);
      if(response.name==this.name)
      {
        alert("Data added successfully");
        this.result="Data added successfully";
      }
        
      else{
        alert("Error in adding data");
        this.result="Error in adding data";
      }
      
    });
    
  }

  GetDetails(p:any){
      console.log(p);
 
    this._productService.getProduct(p).subscribe((response: any) => {
      console.log("get product" , response);
      this.productDesc=response.description;
      this.productBrand=response.brand;
      this.productPrice=response.price;

    });
  }
}
