import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { PlaceAppointmentComponent } from './place-appointment/place-appointment.component';
import { ConntactUsComponent } from './conntact-us/conntact-us.component';
import { RouterModule , Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes =[		
  {path:'',redirectTo: '/home', pathMatch: 'full'},
  {path:'home' , component:HomeComponent},
  {path:'place_appointment' , component:PlaceAppointmentComponent},
  {path:'view_appointment' , component:ViewAppointmentComponent},
  {path:'contactUs' , component:ConntactUsComponent},
 


  
  ];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ViewAppointmentComponent,
    PlaceAppointmentComponent,
    ConntactUsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    
    RouterModule.forRoot(appRoutes),
    
    
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
