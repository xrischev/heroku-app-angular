import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HomeComponent} from './components/home.component'
import {NavbarComponent} from './components/navbar/navbar.component'
import {AboutComponent} from './components/about-component/about.component'

import {HttpClientModule} from '@angular/common/http';

import {HomeService} from '../app/components/home.service'

import {HttpModule} from '@angular/http';

import {UploadComponent} from '../app/components/upload-image/upload-image.component'

import {TakeInformationComponent} from '../app/components/takeInformation-component/takeInformation.component'
import {InformationService} from '../app/components/information.service'

import {FormsModule} from '@angular/forms'

import {RoutesModule} from './routes.module'

//noinspection JSDeprecatedSymbols
//noinspection JSDeprecatedSymbols
//noinspection JSDeprecatedSymbols
//noinspection JSDeprecatedSymbols
//noinspection JSDeprecatedSymbols
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    UploadComponent,
    TakeInformationComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  providers: [HomeService,InformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
