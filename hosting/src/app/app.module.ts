import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFireStorageModule } from "@angular/fire/storage";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { environment } from "src/environments/environment";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { StartpageComponent } from "./pages/startpage/startpage.component";
import { ShowspageComponent } from "./pages/showspage/showspage.component";
import { GalaspageComponent } from "./pages/galaspage/galaspage.component";
import { ContactpageComponent } from "./pages/contactpage/contactpage.component";
import { FooterComponent } from './components/footer/footer.component';
import { InvisaComponent } from './pages/showspage/invisa/invisa.component';
import { FortunaComponent } from './pages/showspage/fortuna/fortuna.component';
import { WikingerComponent } from './pages/showspage/wikinger/wikinger.component';
import { StageComponent } from './pages/showspage/stage/stage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    StartpageComponent,
    ShowspageComponent,
    GalaspageComponent,
    ContactpageComponent,
    FooterComponent,
    InvisaComponent,
    FortunaComponent,
    WikingerComponent,
    StageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
