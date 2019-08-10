import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';


@Component({
  selector: 'app-create-book-firebase',
  templateUrl: './create-book-firebase.component.html',
  styleUrls: ['./create-book-firebase.component.css']
})
export class CreateBookFirebaseComponent implements OnInit {

   firebaseConfig: object;
   fileUrl;
  constructor() {
     this.firebaseConfig = {
      apiKey: "AIzaSyD_RJeXxSxpw7LXZ5RWK_zUWwGXR7nv3M4",
      authDomain: "projeto-teste-7dcf3.firebaseapp.com",
      databaseURL: "https://projeto-teste-7dcf3.firebaseio.com",
      projectId: "projeto-teste-7dcf3",
      storageBucket: "projeto-teste-7dcf3.appspot.com",
      messagingSenderId: "64536651121",
      appId: "1:64536651121:web:362d662ea98524bf"
    };
    // Initialize Firebase
     firebase.initializeApp(this.firebaseConfig);

  }

  ngOnInit() {

  const auth = firebase.auth();

  document.getElementById('file').addEventListener('change', this.handleFileSelect, false);
  ( document.getElementById('file') as HTMLInputElement ).disabled = true;

  auth.onAuthStateChanged( user => {
        if (user) {
          console.log('Anonymous user signed-in.', user);
          (  document.getElementById('file') as HTMLInputElement).disabled = false;
        } else {
          console.log('There was no anonymous session. Creating a new anonymous user.');
          // Sign the user in anonymously since accessing Storage requires the user to be authorized.
          auth.signInAnonymously().catch( error => {
            if (error.code === 'auth/operation-not-allowed') {
              window.alert('Anonymous Sign-in failed. Please make sure that you have enabled anonymous ' +
                  'sign-in on your Firebase project.');
            }
          });
        }
      });

  }

   async handleFileSelect(evt) {

    // ! variável usada para guardar temporariamente a url do arquivo
    let aux;

    const storageRef = firebase.storage().ref();

      // Your web app's Firebase configuration
    evt.stopPropagation();
    evt.preventDefault();

    const file = evt.target.files[0];

    const metadata = {
      contentType: file.type
    };

    // Push to child path.
    // [START oncomplete]
    await storageRef.child('images/' + file.name).put(file, metadata)
    .then( async snapshot => {
      console.log('Uploaded', snapshot.totalBytes, 'bytes.');
      console.log('File metadata:', snapshot.metadata);
      // Let's get a download URL for the file.
      await snapshot.ref.getDownloadURL()
      .then( url => {
        aux = url;
        console.log('File available at', aux);
        // [START_EXCLUDE]
        document.getElementById('linkbox').innerHTML = '<a href="' +  url + '">Click For File</a>';
        // [END_EXCLUDE]
      });
    })
    .catch( error => {
      // [START onfailure]
      console.error('Upload failed:', error);
      // [END onfailure]
    });
    // [END oncomplete]
    console.log('finalizado??');
    this.fileUrl = aux;

    console.log(this.fileUrl);

  }

}
