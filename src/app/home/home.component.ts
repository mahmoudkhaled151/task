import { Component, Input } from '@angular/core';
import * as data from '../../assets/data.json';
import { CoursesService } from '../courses.service';

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


 
  ngOnInit() {
    
    for(let i=0 ; i<4 ; i++) 
    {
      /*this.numOfPages[i]=[i+1];*/
       this.pages[i]=this.courses[i];
    }

   }

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
  buyCourses: any=[];
  public buy( item:any)
  {
   this.buyCourses.push(item)
   if(this.checkLocalStorageEmpty==null)
   {
   this.saveArrayToLocalStorage('buyer', this.buyCourses);
   }
   else 
   {
    this.appendArrayToLocalStorage('buyer', this.buyCourses);
   }
  }
  getArrayFromLocalStorage(key: string): any[] {
    const arrayString = localStorage.getItem(key);
    return arrayString ? JSON.parse(arrayString) : [];
  }
  appendArrayToLocalStorage(key: string, newArray: any[]): void {
    // Get the existing array from local storage
    const existingArray = this.getArrayFromLocalStorage(key);

    // Concatenate or merge the existing array with the new array
    const mergedArray = existingArray.concat(newArray);

    // Save the merged array back to local storage
    this.saveArrayToLocalStorage(key, mergedArray);
  }
  checkLocalStorageEmpty(key: string): boolean {
    // Check if the key exists in local storage and if the value is not null
    const storedValue = localStorage.getItem(key);
    return storedValue === null;
  }
  saveArrayToLocalStorage(key: string, array: any[]): void {
    // Convert the array to a JSON string
    const arrayString = JSON.stringify(array);

    // Save the JSON string in local storage
    localStorage.setItem(key, arrayString);
  }
  wishList: any=[];
  public wish( item:any)
  {
   this.wishList.push(item)
  }

}
