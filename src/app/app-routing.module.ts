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
  {
    path: 'products',
    loadChildren : () => import('./comm/products/products.module').then(m => m.ProductsModule)
   },
  {path: 'statistics', component: StatisticsComponent},
  {
    path: 'coupons',
    loadChildren: () => import('./comm/coupens/coupens.module').then(m => m.CoupensModule)
  },
  {path: 'pages', component: PagesComponent},
  {path: 'media', component: MediaComponent},
  {path: 'settings', component: SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
