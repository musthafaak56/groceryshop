import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { myGroceries } from 'src/model/myGroceries';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  itemId:any;
  items:myGroceries={};
myGroceries: any;


  constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private route:Router){}
  

  


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(`activated`,data);
      this.itemId=data.itemId;

      //call an api for getting particular items details
      this.api.viewGroceries(this.itemId).subscribe((data:any)=>{
        console.log(`view`,data);//particular items details
        this.items=data;
      })
    })
  }

  updateToShop() {
    alert(`Item Updated`);
    this.api.updateGroceries(this.itemId,this.items).subscribe((data:any)=>{

    this.route.navigateByUrl('/groceryapp/admin/');

    })
  }


}
