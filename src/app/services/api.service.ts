import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { myCart } from 'src/model/myCart';
import { myGroceries } from 'src/model/myGroceries';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  shopUrl:string ='http://localhost:3000/shop/';
  cartUrl:string ='http://localhost:3000/cart/';
  //function to get all groceries from shop list
  getAllGroceries():Observable<myGroceries>{
    return this.http.get(this.shopUrl);
  }

  //api call for fetch particular grocery 
  viewGroceries(itemId:any){
    return this.http.get(`${this.shopUrl}${itemId}`);
  }

  //api call for fetch particular grocery 
  viewCartItem(itemId:any){
    return this.http.get(`${this.cartUrl}${itemId}`);
  }

  //function for adding item to cart server
  addToCart (item: myCart){
  // return this.http.get(this.shopUrl+itemId)
  return this.http.post(this.cartUrl,item)
  }

  //function to get all groceries from shop list
  getAllCart():Observable<myCart>{
  return this.http.get(this.cartUrl);
  }

  //function for delete an item from cart server 
  deleteItem (itemId: any) {
  return this.http.delete(`${this.cartUrl}${itemId}`)
  }

  //function for adding new grocery to server
  addToShop (itemBody: any) {
  return this.http.post(this.shopUrl,itemBody)
  }

  //function for delete an item from cart server 
  deleteItemFromShop (itemId: any) {
  return this.http.delete(`${this.shopUrl}${itemId}`)
  }

  //function for updating an existing grocery
  updateGroceries(itemId:any, itemBody: any){
  return this.http.put(`${this.shopUrl}${itemId}`,itemBody);
  }

  //function for updating an existing grocery
  updatePrice(itemId:any, itemBody: any){
  return this.http.put(`${this.cartUrl}${itemId}`,itemBody);
  }

  //function for updating an existing grocery
  editQuantity(itemId:any, itemBody: any){
  return this.http.put(`${this.cartUrl}${itemId}`,itemBody);
  }

}
