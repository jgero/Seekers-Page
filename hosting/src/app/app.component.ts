import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { AngularFireStorage } from "@angular/fire/storage";
import "firebase/storage";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  imageURL: Observable<string | null>;
  constructor(private storage: AngularFireStorage) {
    const ref = this.storage.ref("gs-background.jpeg");
    this.imageURL = ref.getDownloadURL();
  }
}
