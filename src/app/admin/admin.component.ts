import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { myCart } from 'src/model/myCart';
import { myGroceries } from 'src/model/myGroceries';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

   // myGroceries:any
   myGroceries:myGroceries[]=[]; 
   items:myGroceries={};
   // myCart:any
   myCart:myCart[]=[]; 

   searchKey:string='';
 
   constructor(private api:ApiService,private route:Router){}
 
   getAllGroceries(){
     this.api.getAllGroceries().subscribe((data:any)=>{
       console.log(data);    //array[4] all contact details
       this.myGroceries=data;    //passing data to allContacts variable
     })
   }

   addToShop(){
    this.api.addToShop(this.items).subscribe((data:any)=>{
      console.log(`ngModel=${data}`);
      
      alert(`${data.name} added to Shop`);

      this.route.navigateByUrl('/');
    })
  }

  deleteItemFromShop(itemId:any){
    this.api.deleteItemFromShop(itemId).subscribe((data:any)=>{
      console.log(`deleteFromShop=${data}`);
      alert(`Item Deleted from Shop`);

      this.getAllGroceries();
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
