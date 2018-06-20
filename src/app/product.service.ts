import { Injectable } from '@angular/core';
import { IProduct } from './productlist/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {} 
  getProducts():IProduct[]{
    return 
  }
}
