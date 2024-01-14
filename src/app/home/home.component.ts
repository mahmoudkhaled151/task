import { Component, Input } from '@angular/core';
import * as data from '../../assets/data.json';
import { CoursesService } from '../courses.service';
interface WishItem {
  id: number; // Adjust the type of 'id' based on your actual data type
  // Add other properties if necessary
}
/*interface data {  
    img:string;
    courseName: string;
    author: string; 
    actualPrice: string;
    discountPercentage : string;
    tags: any;
} */ 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


 
  

  courses: any = data.default;
  current: number=0;
  pages:any=[];
  num:number=Math.ceil(this.courses.length/4) ;
  numOfPages :any= [];
  
 
  public next() 
  {
    this.current++;
    let x=0;
    let y=(this.current+1)*4 
    if (y > this.courses.length)
    {
      y--;
    }
    this.pages=[];
      for(let i =(this.current*4) ; i< y ; i++)
      {
        this.pages[x]=this.courses[i];
        x++;
      }
   
  }
  public previous(){
    this.current--;

      let x=0;
      for(let i =(this.current*4) ; i< (this.current+1)*4 ; i++)
      {
       
        this.pages[x]=this.courses[i];
        x++;
      }
      
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
  
  getArrayFromLocalStorage(key: string): any[] {
    const arrayString = localStorage.getItem(key);
    return arrayString ? JSON.parse(arrayString) : [];
  }
  appendArrayToLocalStorage(key: string, newArray: any[]): void {
    const existingArray = this.getArrayFromLocalStorage(key);
    const mergedArray = existingArray.concat(newArray);
    this.saveArrayToLocalStorage(key, mergedArray);
  }
  
  checkLocalStorageEmpty(key: string): boolean {
    const storedValue = localStorage.getItem(key);
    return storedValue === null;
  }
  saveArrayToLocalStorage(key: string, array: any[]): void {
    const arrayString = JSON.stringify(array);
    localStorage.setItem(key, arrayString);
  }
  wishList: WishItem[] = [];
  wishNum : number[]=[];
  public wish(item: any, itemIndex: number) {
    // Check if the item already exists in wishList
    const existsInWishList = this.wishList.some((wishItem) => wishItem.id === item.id);
  
    if (existsInWishList) {
      window.alert("You added this course before");
    } else {
      // Add the item to wishList and wishNum
      this.wishList.push(item);
      this.wishNum.push(itemIndex);
  
      // Save to local storage
      this.appendArrayToLocalStorage('favou', item);
    }
    console.log(this.wishList)
  }
    ngOnInit() {
    
      for(let i=0 ; i<4 ; i++) 
      {
        /*this.numOfPages[i]=[i+1];*/
         this.pages[i]=this.courses[i];
      //    for (const key in localStorage) {
      //     if (localStorage.hasOwnProperty(key)) {
      //       localStorage.removeItem(key);
      //     }
      // }
      // this.appendArrayToLocalStorage('favou', this.wishList);       
      //   this.appendArrayToLocalStorage('wishNumber', this.wishNum);
      }
     }
  }





