import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartpageComponent } from './startpage/startpage.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { MoreComponent } from './more/more.component';
import { ShowsComponent } from './shows/shows.component';
import { WikingerComponent } from './shows/wikinger/wikinger.component';

@NgModule({
  declarations: [
    AppComponent,
    StartpageComponent,
    HeaderComponent,
    LogoComponent,
    MoreComponent,
    ShowsComponent,
    WikingerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
