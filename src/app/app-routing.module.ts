import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommissionCalculatorComponent } from "./commission-calculator/commission-calculator.component";
import { CustomerNamesComponent } from "./deals-info/customer-names/customer-names.component";
import { DealsInfoComponent } from "./deals-info/deals-info.component";
import { GoalsComponent } from "./goals/goals.component";
import { DailyStatsComponent } from "./input/daily-stats/daily-stats.component";
import { InputComponent } from "./input/input.component";
import { YearlyStatsComponent } from "./input/yearly-stats/yearly-stats.component";
import { LoginComponent } from "./login/login.component";
import { ViewDataComponent } from "./view-data/view-data.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/input', pathMatch: 'full'},
  {path: 'input', component: InputComponent, children: [
    {path: 'dailystats', component: DailyStatsComponent},
    {path: 'yearlystats', component: YearlyStatsComponent},
    {path: 'view-data', component: ViewDataComponent}
  ]},
  {path: 'view-data', component: ViewDataComponent},
  {path: 'login', component: LoginComponent},
  {path: 'goals', component: GoalsComponent},
  {path: 'dealsinfo', component: DealsInfoComponent},
  {path: 'customers', component: CustomerNamesComponent},
  {path: 'commission', component: CommissionCalculatorComponent},
  {path: '**', component: InputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
