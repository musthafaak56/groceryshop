import { Component, OnInit } from '@angular/core';
import { myCart } from 'src/model/myCart';
import { myGroceries } from 'src/model/myGroceries';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{



  // myCart:any
  myCart:any[]=[]; 

  items:myCart={};
  items2:myGroceries={};

  constructor(private api:ApiService){}


  getAllCart(){
    this.api.getAllCart().subscribe((data:any)=>{
      // console.log(`price=`,data[1].price);    //array[4] all contact details
      this.myCart=data;    //passing data to allContacts variable
      console.log('getallcart',this.myCart[1].price);
      
     

    })
  }

  ngOnInit(): void {
    this.getAllCart();

  }

  deleteItem(itemId:any) {
    this.api.deleteItem(itemId).subscribe((data:any)=>{
      
      this.getAllCart();

      alert(`Item removed from Cart`);
    })
  }

  
  getTotalPrice() {
    let total = 0;
    for (let i = 0; i < this.myCart.length; i++) {
      total += Number(this.myCart[i].price);
    }
  return total;
  }

  

}
