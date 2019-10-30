import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { breadcrumb: 'Home'} },
  { path: 'payment', component: PaymentFormComponent, data: { breadcrumb: 'Payment'} },
  { path: 'help', component: HelpComponent, data: { breadcrumb: 'Help'} }
  /*
  {path: '', redirectTo: 'home', pathMatch: 'full'},  
    {path: 'home', ..., data: { breadcrumb: 'Home'}},  
    {path: 'about', ..., data: { breadcrumb: 'About'}},  
    {path: 'github', ..., data: { breadcrumb: 'GitHub'},  
        children: [  
            {path: '', ...},  
            {path: ':org', ..., data: { breadcrumb: 'Repo List'},  
                children: [  
                    {path: '', ...},  
                    {path: ':repo', ..., data: { breadcrumb: 'Repo'}}  
                ]  
        }]  
    } 
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }