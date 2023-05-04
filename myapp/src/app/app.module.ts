import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ItemComponent } from './userhome/item/item.component';
import { PaymentComponent } from './payment/payment.component';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactComponent } from './contact/contact.component';
import { UnavigationComponent } from './unavigation/unavigation.component';
import { AnavigationComponent } from './anavigation/anavigation.component';
const appRoute:Routes=[
  {path:'',component:AppComponent},
  {path:'app',redirectTo:'',pathMatch:'full'},
  {path:'alogin/home/contact',component:ContactComponent},
  {path:'home/contact',component:ContactComponent},
  {path:'ulogin',component:UserComponent},
  {path:'alogin',component:AdminComponent},
  {path:'home',component:HomeComponent},
  {path:'ulogin/userhome',redirectTo:'userhome',pathMatch:'full'},
  {path:'alogin/home',component:HomeComponent},
  {path:'alogin/app',redirectTo:'',pathMatch:'full'},
  {path:'ulogin/app',redirectTo:'',pathMatch:'full'},
  {path:'alogin/home/app',redirectTo:'',pathMatch:'full'},
  {path:'ulogin/userhome/app',redirectTo:'',pathMatch:'full'},
  {path:'home/app',redirectTo:'',pathMatch:'full'},
  {path:'userhome/app',redirectTo:'',pathMatch:'full'},
  {path:'ulogin/userhome/contact',component:ContactComponent},
  {path:'alogin/app',component:AdminComponent},
  {path:'ulogin/userhome/payment',component:PaymentComponent},
  {path:'userhome/payment',component:PaymentComponent},
  {path:'userhome',component:UserhomeComponent},
  {path:'ulogin/userhome/payment/userhome',redirectTo:'userhome',pathMatch:'full'},
  {path:'userhome/payment/userhome',redirectTo:'userhome',pathMatch:'full'}

]
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    HomeComponent,
    UserhomeComponent,
    ItemComponent,
    PaymentComponent,
    NavigationComponent,
    ContactComponent,
    UnavigationComponent,
    AnavigationComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,RouterModule.forRoot(appRoute)
  ],
  providers: [FormsModule],
  bootstrap: [AppComponent],
  exports:[FormsModule]
})
export class AppModule { }
