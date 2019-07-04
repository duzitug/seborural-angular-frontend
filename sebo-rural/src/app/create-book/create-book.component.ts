import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  titulo: string;
  autor: string;
  curso: string;
  periodo: number;
  disciplina: string;
  descricao: string;
  urlFoto: string;
  cloudName = 'dxxxwkv7t';
  unsignedUploadPreset = 'skzrnf97';

  constructor(
    private http:HttpClient
    // titulo: string,
    // autor: string,
    // curso: string,
    // periodo: number,
    // disciplina: string,
    // descricao: string,
    // urlFoto: string
    
    ) { }

  ngOnInit() {
  }

  createBook () {
    //A diretiva (click) executa a função duas vezes
    window.console.log(this.http.post('http://localhost:8080/book', {
      titulo: this.titulo,
      autor: this.autor
    }).subscribe(
      response => window.console.log(response)
    ));

    window.console.info("BOTÃO CLICADO!");
  }

  uploadFile(files: FileList) {

    var file = files[0];

    //window.console.log(files[0]);

    var url = `https://api.cloudinary.com/v1_1/${this.cloudName}/upload`;
    var xhr = new XMLHttpRequest();
    var fd = new FormData();
    
    xhr.open('POST', url, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  
    
    // Update progress (can be used to show progress indicator)
    xhr.upload.addEventListener("progress", function(e) {
     
      console.log(`fileuploadprogress data.loaded: ${e.loaded},
    data.total: ${e.total}`);
    });
  
    xhr.onreadystatechange = function(e) {
      if (xhr.readyState == 4 && xhr.status == 200) {

        window.console.info("Arquivo enviado com sucesso!");

        var response = JSON.parse(xhr.responseText);
        // https://res.cloudinary.com/cloudName/image/upload/v1483481128/public_id.jpg
        var url = response.secure_url;
  
        window.console.log(url);
       
      }
    };
  
    fd.append('upload_preset', 'skzrnf97');
    fd.append('teste', 'browser_upload'); // Optional - add tag for image admin in Cloudinary
    fd.append('file', file);
    xhr.send(fd);


  }

}
