import {
  Component,
  OnInit,
} from '@angular/core';
import {
  HttpClient, HttpHeaders
} from '@angular/common/http';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import { Router } from "@angular/router";


@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  titulo: string;
  autor: string;
  course: string;
  periodo: number;
  disciplina: string;
  descricao: string;
  urlFoto;
  preco: number;
  data: Date;
  firebaseConfig: object;
  student;
  courses;
  courseName;


  constructor(private http: HttpClient, private router: Router) {

    this.data = new Date();

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

    let headers = new HttpHeaders();

    headers = headers.set('Authorization', localStorage.getItem('access_token'));


    this.http.get<any>('https://sebo-rural.herokuapp.com/api/course', { headers: headers}).subscribe(
      response => this.courses = response.sort(function(a, b){
                                                                    if(a.nome < b.nome) { return -1; }
                                                                    if(a.nome > b.nome) { return 1; }
                                                                    return 0;
                                                                    })
    );

    let usernameLocal = localStorage.getItem('username');

    this.http.post<any>('https://sebo-rural.herokuapp.com/api/student/getStudentByUsername', {
      username: usernameLocal
    }, { headers: headers}).subscribe(
      response => {
        this.student = response.id
        console.log(this.student)
      }
    );


    const auth = firebase.auth();
    // chamando a função handleFileSelect desta forma as variáveis do objeto não são alteradas.
    // document.getElementById('file').addEventListener('change', this.handleFileSelect, false);
    (document.getElementById('file') as HTMLInputElement).disabled = true;

    auth.onAuthStateChanged(user => {
      if (user) {
        console.log('Anonymous user signed-in.', user);
        (document.getElementById('file') as HTMLInputElement).disabled = false;
      } else {
        console.log('There was no anonymous session. Creating a new anonymous user.');
        // Sign the user in anonymously since accessing Storage requires the user to be authorized.
        auth.signInAnonymously().catch(error => {
          if (error.code === 'auth/operation-not-allowed') {
            window.alert('Anonymous Sign-in failed. Please make sure that you have enabled anonymous ' +
              'sign-in on your Firebase project.');
          }
        });
      }
    });

  }

  // Chamar através de um botão
  async handleFileSelect(evt) {

    // variável usada para guardar temporariamente a url do arquivo
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
      .then(async snapshot => {
        console.log('Uploaded', snapshot.totalBytes, 'bytes.');
        console.log('File metadata:', snapshot.metadata);
        // Let's get a download URL for the file.
        await snapshot.ref.getDownloadURL()
          .then(url => {
            this.urlFoto = url;
            console.log('this.urlFoto: ' + url);
            console.log('File available at', this.urlFoto);
            // [START_EXCLUDE]
            document.getElementById('envioImagem').innerHTML = '<p>Imagem enviada com sucesso.</p>';
            // [END_EXCLUDE]
          });
      })
      .catch(error => {
        // [START onfailure]
        console.error('Upload failed:', error);
        // [END onfailure]
      });
    // [END oncomplete]
    await storageRef.child('images/' + file.name).put(file, metadata).on('state_changed', snapshot => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      const uploader = (document.getElementById('uploader') as HTMLInputElement);
      uploader.value = progress.toString();
    }, error => {
      console.error('Upload failed:', error);
    });

  }


  // colocarno cabeçalho  Content-Type
  createBook() {

    let headers = new HttpHeaders();

    if (localStorage.getItem('access_token')) {
      headers = headers.set('Authorization', localStorage.getItem('access_token'));
    } else {
      alert("Você precisa estar logado para anunciar um livro.")
      this.router.navigate(['/userLogin'])
    }

    console.log("executando createBook");

    //pega o id do curso
    this.http.post<any>('https://sebo-rural.herokuapp.com/api/course/getCourseByNome', {
      nome: this.courseName
    },{ headers: headers }).subscribe(
      response => {
        this.course = response.id
        console.log("Este é o curso: " + this.course)
        this.http.post('https://sebo-rural.herokuapp.com/api/book', {
          titulo: this.titulo,
          autor: this.autor,
          curso: this.course,
          periodo: this.periodo,
          disciplina: this.disciplina,
          descricao: this.descricao,
          urlFoto: this.urlFoto,
          preco: this.preco,
          data: this.data,
          student: this.student
        }, { headers: headers }).subscribe(
          response =>  { 
            window.console.log(response)
            this.router.navigate(['listBook'])
          }
        );
          }
      );

    

  }

}
