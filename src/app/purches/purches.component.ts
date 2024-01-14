import { Component } from '@angular/core';

@Component({
  selector: 'app-purches',
  templateUrl: './purches.component.html',
  styleUrl: './purches.component.css'
})
export class PurchesComponent {



  retrievedArray : any[] = [];
  getArrayFromLocalStorage(key: string): any[] {
    const arrayString = localStorage.getItem(key);
    return arrayString ? JSON.parse(arrayString) : [];
  }
  saveArrayToLocalStorage(key: string, array: any[]): void {
    const arrayString = JSON.stringify(array);

    localStorage.setItem(key, arrayString);
  }
  priceNumber:number =0;
  percentage :number=0
  totalprice:number=0
  ngOnInit()
  {
    this.retrievedArray = this.getArrayFromLocalStorage("buyer");
    console.log(this.retrievedArray);
    for(let i=0 ; i<this.retrievedArray.length ; i++) {
      this.priceNumber = parseInt(this.retrievedArray[i].actualPrice.replace("₹", ""), 10);
      this.percentage = Number(this.retrievedArray[i].discountPercentage.slice(0, -1));
      this.totalprice +=this.priceNumber -((this.percentage/100)*this.priceNumber);
      console.log(this.percentage);
    }
   
  }
  remove(item: number)
{
  if (this.retrievedArray.length==1)
  {
    this.retrievedArray.splice(item , 1)
    this.totalprice=0
    this.saveArrayToLocalStorage("buyer" , this.retrievedArray)
  }
 else{
  this.retrievedArray.splice(item , 1)

  this.priceNumber = parseInt(this.retrievedArray[item].actualPrice.replace("₹", ""), 10);
  this.percentage = Number(this.retrievedArray[item].discountPercentage.slice(0, -1));
  this.totalprice -=this.priceNumber -((this.percentage/100)*this.priceNumber);
  this.saveArrayToLocalStorage('buyer' , this.retrievedArray);
 }
  
}

}
