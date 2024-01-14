import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  userPhoto: string = '../../assets/IMG_2153.JPG';

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Handle the selected file, e.g., upload to a server or update userPhoto
      this.userPhoto = URL.createObjectURL(file);
    }
  }

}
