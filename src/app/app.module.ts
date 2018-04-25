import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SocialInfoComponent } from './social-info/social-info.component';
import { WeatherComponent } from './weather/weather.component';
import { RecreationComponent } from './list/recreation/recreation.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SocialInfoComponent,
    WeatherComponent,
    RecreationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
