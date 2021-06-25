import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BagComponent } from './bag/bag.component';
import { HomeComponent } from './home/home.component';
import { KidsComponent } from './kids/kids.component';
import { LoginComponent } from './login/login.component';
import { MensComponent } from './mens/mens.component';
import { ContactusComponent } from './others/contactus/contactus.component';
import { CouponsComponent } from './others/coupons/coupons.component';
import { FaqsComponent } from './others/faqs/faqs.component';
import { OthersComponent } from './others/others.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './signup/signup.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'mens',component:MensComponent},
  {path:'women',component:WomenComponent},
  {path:'kids',component:KidsComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'bag',component:BagComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'others',component:OthersComponent,children:[
    {path:'coupons',component:CouponsComponent},
    {path:'faqs',component:FaqsComponent},
    {path:'contactus',component:ContactusComponent}
  ]},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
