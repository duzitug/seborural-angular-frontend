import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs'
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-create-book-angular-fire',
  templateUrl: './create-book-angular-fire.component.html',
  styleUrls: ['./create-book-angular-fire.component.css']
})
export class CreateBookAngularFireComponent implements OnInit {

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  constructor(private storage: AngularFireStorage) { }

  ngOnInit() {
  }

  uploadFile(event) {
    
    const file = event.target.files[0];
    const filePath = 'imagens/' + file.name;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => this.downloadURL = fileRef.getDownloadURL() )
     )
    .subscribe( () => {
      console.log(this.downloadURL);
      
    }
      
    )
  }


}
