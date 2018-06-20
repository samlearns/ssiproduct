import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import{ProductService} from '../product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
 

  

  
  pageTitle:string= "Product List!";
  showImage:boolean = false;
  listFilter:string;
   products: IProduct[];

toggleImage():void{
this.showImage =!this.showImage;
} 

constructor(private _productService : ProductService){

 }

  ngOnInit():void {
    this.products = this._productService.getProducts();
    
  }

}
