import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
//Plugins
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [

  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
    InAppBrowser
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
