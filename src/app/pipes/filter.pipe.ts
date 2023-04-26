import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(myGroceries: any=[], searchKey: string, propName: string): any[] {

    const result:any=[]    //transform output
    if(!myGroceries||searchKey==''||propName==''){
      return myGroceries;
    }
    myGroceries.forEach((item:any)=>{
      if(item[propName].trim().toLowerCase().startsWith(searchKey.toLowerCase())){
        result.push(item);
      }
    })
    return result;
  }

}
