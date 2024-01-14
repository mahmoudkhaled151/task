import { Component } from '@angular/core';
interface WishItem {
  id: number; // Adjust the type of 'id' based on your actual data type
  // Add other properties if necessary
}
@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrl: './favourite.component.css'
})
export class FavouriteComponent {
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
    this.retrievedArray = this.getArrayFromLocalStorage("favou");
    
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
    this.saveArrayToLocalStorage("favou" , this.retrievedArray)
  }
 else{
  this.retrievedArray.splice(item , 1)

  this.priceNumber = parseInt(this.retrievedArray[item].actualPrice.replace("₹", ""), 10);
  this.percentage = Number(this.retrievedArray[item].discountPercentage.slice(0, -1));
  this.totalprice -=this.priceNumber -((this.percentage/100)*this.priceNumber);
  this.saveArrayToLocalStorage('favou' , this.retrievedArray);
 }
  
}


appendArrayToLocalStorage(key: string, newArray: any[]): void {
  const existingArray = this.getArrayFromLocalStorage(key);
  const mergedArray = existingArray.concat(newArray);
  this.saveArrayToLocalStorage(key, mergedArray);
}
buyNum: number[]=[];
  buyCourses: WishItem[] = [];
  public buy(item: any, itemIndex: number) {
    // Check if the item already exists in wishList
    const existsInWishList = this.buyCourses.some((wishItem) => wishItem.id === item.id);
  
    if (existsInWishList) {
      window.alert("You added this course before");
    } else {
      // Add the item to wishList and wishNum
      this.buyCourses.push(item);
      this.buyNum.push(itemIndex);
  
      // Save to local storage
      this.appendArrayToLocalStorage('buyer', item);
    }
    console.log(this.buyCourses)
  }
}
