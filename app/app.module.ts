import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { Routes, RouterModule }   from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// import { AngularFireModule } from 'angularfire2';

import { AppComponent }  from './app.component';
import { routing } from './app.routing';

import {CalendarModule} from 'primeng/primeng';
import {GMapModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';

import {NavbarComponent} from './main_components/navbar.component';
import {FooterComponent} from './main_components/footer.component';
import {CarouselComponent} from './main_components/carousel.component';
import {FeaturetteComponent} from './main_components/featurette.component';
import { ContactComponent } from './contact/contact.component';
import {DashboardComponent} from './main_components/dashboard.component'; 
import {AboutComponent} from './about/about.component';
import {AdminComponent} from './admin/admin.component';
import {PricingComponent} from './pricing/pricing.component';
import { SigninComponent } from "./unprotected/signin.component";
import { CreateUserComponent } from "./unprotected/create-user.component";
import { ProtectedComponent } from "./protected/protected.component";
import {LessonsComponent} from './lessons/lessons.component';

import { AuthGuard } from "./shared/auth.guard";
import { AuthService } from "./shared/auth.service";
import {ToastrService} from './global/toastr.service';

// export const firebaseConfig = {
//     apiKey: "AIzaSyBIlEBUJKz1b1TMIoTONQcTCjbRoy7zIq4",
//     authDomain: "nma-app-b2ca8.firebaseapp.com",
//     databaseURL: "https://nma-app-b2ca8.firebaseio.com",
//     storageBucket: "",
// };

@NgModule({
  imports:      [ 
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    JsonpModule,
    CalendarModule,
    GMapModule,
    ReactiveFormsModule,
    DialogModule
    // AngularFireModule.initializeApp(firebaseConfig)
   ],
  declarations: [ 
    AppComponent,
    NavbarComponent, 
    FooterComponent, 
    CarouselComponent, 
    FeaturetteComponent,
    ContactComponent,
    DashboardComponent,
    AboutComponent,
    AdminComponent,
    PricingComponent,
    SigninComponent,
    CreateUserComponent,
    ProtectedComponent,
    LessonsComponent
  ],
  providers: [
    AuthGuard,
    AuthService,
    ToastrService
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }