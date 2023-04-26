import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { myGroceries } from 'src/model/myGroceries';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-quantity',
  templateUrl: './edit-quantity.component.html',
  styleUrls: ['./edit-quantity.component.css']
})
export class EditQuantityComponent implements OnInit {


  itemId:any;
  items:myGroceries={};
  items2:myGroceries={};
  myGroceries: any;


  constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private route:Router){}
  


  

  updateToShop() {
    alert(`Item Updated`);
    this.api.updateGroceries(this.itemId,this.items).subscribe((data:any)=>{


    this.route.navigateByUrl('/groceryapp/cart/');

    })
  }

  editToCart() {
    alert(`Item Updated`);
    this.api.editQuantity(this.itemId,this.items).subscribe((data:any)=>{


    this.route.navigateByUrl('/groceryapp/cart/');

    })
  }

  updatePrice(item: any) {

    var alpha = item.weight.match(/[a-zA-Z]+/g);
    var quantity= item.weight;
    var unit= quantity.match(/[a-zA-Z]+/g)[0];
    var num = quantity.match(/\d+/g)[0];
    var shopPrice= this.items2.price;
    const regex = /[a-zA-Z]/; 
    console.log('updateprice-alpha',alpha); // "kg"/"g"/"L"/"mL"/"num"
    console.log('updateprice-num',num); // "123"

    if(alpha=="p")
    {
      this.items.price = Number(shopPrice) * Number(num);
    }
    else if(alpha=="kg")
    {
      this.items.price = Number(shopPrice) * Number(num);
    }
    else if(alpha=="g")
    {
      this.items.price = Number(shopPrice) * (Number(num)/1000);
    }
    else if(alpha=="L")
    {
      this.items.price = Number(shopPrice) * Number(num);
    }
    else if(alpha=="mL")
    {
      this.items.price = Number(shopPrice) * (Number(num)/1000);
    }

    this.items.oldprice=0;
    this.items.oldprice=Number(this.items.price)+Number(40);

    this.api.updatePrice(this.itemId,this.items).subscribe((data:any)=>{
      this.route.navigateByUrl('/groceryapp/cart/');
      })

  }


  ngOnInit(): void {


    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(`activated`,data);
      this.itemId=data.itemId;

      //call an api for getting particular items details
      this.api.viewCartItem(this.itemId).subscribe((data:any)=>{
        console.log(`view`,data);//particular items details
        this.items=data;
      })

      //call an api for getting particular items details
      this.api.viewGroceries(this.itemId).subscribe((data:any)=>{
        console.log(`viewGroceries`,data);//particular items details
        this.items2=data;
      })
    })
    // this.updatePrice()
  }


}
