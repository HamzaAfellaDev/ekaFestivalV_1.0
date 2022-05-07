import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { BankingPageComponent } from './components/banking-page/banking-page.component';
import { PopupAddFoundsComponent } from './components/popup-add-founds/popup-add-founds.component'
import { CurrencyPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { PopupFailedPaymentComponent } from './components/popup-failed-payment/popup-failed-payment.component';
import { PopupSuccessfulPaymentComponent } from './components/popup-successful-payment/popup-successful-payment.component';





@NgModule({
  declarations: [
    AppComponent,
    BankingPageComponent,
    PopupAddFoundsComponent,
    PopupFailedPaymentComponent,
    PopupSuccessfulPaymentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
