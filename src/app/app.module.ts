import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MensComponent } from './mens/mens.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { BagComponent } from './bag/bag.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OthersComponent } from './others/others.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CouponsComponent } from './others/coupons/coupons.component';
import { FaqsComponent } from './others/faqs/faqs.component';
import { ContactusComponent } from './others/contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MensComponent,
    WomenComponent,
    KidsComponent,
    WishlistComponent,
    BagComponent,
    LoginComponent,
    SignupComponent,
    OthersComponent,
    PagenotfoundComponent,
    CouponsComponent,
    FaqsComponent,
    ContactusComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
