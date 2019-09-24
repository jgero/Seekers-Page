import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { MoreComponent } from './more/more.component';
import { ShowsComponent } from './shows/shows.component';
import { WikingerComponent } from './shows/wikinger/wikinger.component';
import { FortunaComponent } from './shows/fortuna/fortuna.component';
import { InvisaComponent } from './shows/invisa/invisa.component';
import { FooterComponent } from './footer/footer.component';
import { BuehnenauftritteComponent } from './shows/buehnenauftritte/buehnenauftritte.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    MoreComponent,
    ShowsComponent,
    WikingerComponent,
    FortunaComponent,
    InvisaComponent,
    FooterComponent,
    BuehnenauftritteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
