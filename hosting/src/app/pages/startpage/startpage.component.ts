import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { AngularFireStorage } from "@angular/fire/storage";

@Component({
  selector: "app-startpage",
  templateUrl: "./startpage.component.html",
  styleUrls: ["./startpage.component.scss"]
})
export class StartpageComponent {
  imageURL: Observable<string | null>;
  constructor(private storage: AngularFireStorage) {
    const ref = this.storage.ref("gs-background.jpeg");
    this.imageURL = ref.getDownloadURL();
  }
}
