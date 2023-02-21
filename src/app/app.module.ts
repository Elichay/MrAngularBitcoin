import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleChartsModule } from 'angular-google-charts';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { ContactDetailsPageComponent } from './pages/contact-details/contact-details.component';
import { ContactEditPageComponent } from './pages/contact-edit/contact-edit.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { InputComponent } from './cmps/input/input.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ChartPageComponent } from './pages/chart-page/chart-page.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { MonthChartComponent } from './cmps/month-chart/month-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailsPageComponent,
    ContactEditPageComponent,
    ContactPageComponent,
    HomePageComponent,
    ContactFilterComponent,
    ContactListComponent,
    ContactPreviewComponent,
    InputComponent,
    AboutPageComponent,
    ChartPageComponent,
    AppHeaderComponent,
    MonthChartComponent,
  ],
  imports: [
    BrowserModule,
    GoogleChartsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
