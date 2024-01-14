import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { PurchesComponent } from './purches/purches.component';
import { ProfileComponent } from './profile/profile.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path: '', redirectTo:'home' , pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'wishList', component: FavouriteComponent},
  {path: 'purches', component: PurchesComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
