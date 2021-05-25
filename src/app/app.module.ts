




import { GeneraldentistyComponent } from './components/ourservices/generaldentisty/generaldentisty.component';
import { CosmeticdentistyComponent } from './components/ourservices/cosmeticdentisty/cosmeticdentisty.component';
import { ProsthodonticsdentistyComponent } from './components/ourservices/prosthodonticsdentisty/prosthodonticsdentisty.component';
import { OrthodonticsdentistyComponent } from './components/ourservices/orthodonticsdentisty/orthodonticsdentisty.component';
import { OralsurgeryComponent } from './components/ourservices/oralsurgery/oralsurgery.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MakePaymentComponent } from './components/make-payment/make-payment.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    GeneraldentistyComponent,
    CosmeticdentistyComponent,
    ProsthodonticsdentistyComponent,
    OrthodonticsdentistyComponent,
    OralsurgeryComponent,
    ContactUsComponent,
    AboutUsComponent,
    MakePaymentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
