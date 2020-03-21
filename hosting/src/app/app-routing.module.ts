import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StartpageComponent } from "./pages/startpage/startpage.component";
import { ShowspageComponent } from "./pages/showspage/showspage.component";
import { GalaspageComponent } from "./pages/galaspage/galaspage.component";
import { ContactpageComponent } from "./pages/contactpage/contactpage.component";
import { WikingerComponent } from "./pages/showspage/wikinger/wikinger.component";
import { InvisaComponent } from "./pages/showspage/invisa/invisa.component";
import { StageComponent } from "./pages/showspage/stage/stage.component";
import { FortunaComponent } from "./pages/showspage/fortuna/fortuna.component";

const routes: Routes = [
  { path: "", component: StartpageComponent },
  {
    path: "shows",
    component: ShowspageComponent,
    children: [
      { path: "", redirectTo: "wikinger", pathMatch: "full" },
      { path: "wikinger", component: WikingerComponent },
      { path: "invisa", component: InvisaComponent },
      { path: "stage", component: StageComponent },
      { path: "fortuna", component: FortunaComponent }
    ]
  },
  { path: "galas", component: GalaspageComponent },
  { path: "contact", component: ContactpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
