import { Component, OnInit } from '@angular/core';
import { myCart } from 'src/model/myCart';
import { myGroceries } from 'src/model/myGroceries';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{

  

  // myGroceries:any
  myGroceries:myGroceries[]=[]; 
  // myCart:any
  myCart:myCart={}; 
  route: any;

  searchKey:string='';

  constructor(private api:ApiService){}

  getAllGroceries(){
    this.api.getAllGroceries().subscribe((data:any)=>{
      console.log(data);    //array[4] all contact details
      this.myGroceries=data;    //passing data to allContacts variable
    })
  }

  addToCart(item:myCart) {
    console.log(item);
    
    this.api.addToCart(item).subscribe((data:any)=>{
      console.log(data);

      alert(`${data.name} Added to Cart`);
      this.route.navigateByUrl('');
    })
  }
  
  search(event:any){
    console.log(event.target.value);
    this.searchKey=event.target.value;
    console.log(this.searchKey); 
  }

  ngOnInit(): void {
    this.getAllGroceries();
  }

}
