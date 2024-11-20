import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './comm/dashboard/dashboard.component';
import { ProductsComponent } from './comm/products/products.component';
import { StatisticsComponent } from './comm/statistics/statistics.component';
import { CoupensComponent } from './comm/coupens/coupens.component';
import { PagesComponent } from './comm/pages/pages.component';
import { MediaComponent } from './comm/media/media.component';
import { SettingsComponent } from './comm/settings/settings.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch:'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'coupons', component: CoupensComponent},
  {path: 'pages', component: PagesComponent},
  {path: 'media', component: MediaComponent},
  {path: 'settings', component: SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
