import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';  
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { SignupComponent } from './signup/signup.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CustomerService } from './services/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { NotificationComponent } from './notification/notification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NotificationPopupComponent } from './header/notification-popup/notification-popup.component';
import { AuthGuard } from './core/guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    CustomerDetailsComponent,
    SignupComponent,
    NotificationComponent,
    NotificationPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule ,
    MaterialModule
   
  ],
  providers: [CustomerService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
