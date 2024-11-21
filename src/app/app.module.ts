import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './comm/body/body.component';
import { SidenavComponent } from './comm/sidenav/sidenav.component';
import { DashboardComponent } from './comm/dashboard/dashboard.component';
import { ProductsComponent } from './comm/products/products.component';
import { StatisticsComponent } from './comm/statistics/statistics.component';
import { PagesComponent } from './comm/pages/pages.component';
import { MediaComponent } from './comm/media/media.component';
import { SettingsComponent } from './comm/settings/settings.component';
import { SublevelMenuComponent } from './comm/sidenav/sublevel-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    StatisticsComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    SublevelMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
