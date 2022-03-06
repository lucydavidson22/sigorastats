import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { HeaderComponent } from './header/header.component';
import { ViewDataComponent } from './view-data/view-data.component';
import { DealsInfoComponent } from './deals-info/deals-info.component';
import { GoalsComponent } from './goals/goals.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DailyStatsComponent } from './input/daily-stats/daily-stats.component';
import { YearlyStatsComponent } from './input/yearly-stats/yearly-stats.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FieldsetModule } from 'primeng/fieldset';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CustomerNamesComponent } from './deals-info/customer-names/customer-names.component';
import { CommissionCalculatorComponent } from './commission-calculator/commission-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    HeaderComponent,
    ViewDataComponent,
    DealsInfoComponent,
    GoalsComponent,
    LoginComponent,
    DailyStatsComponent,
    YearlyStatsComponent,
    CustomerNamesComponent,
    CommissionCalculatorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FieldsetModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
