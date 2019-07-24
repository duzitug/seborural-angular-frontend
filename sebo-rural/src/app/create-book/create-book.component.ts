import {
  Component,
  OnInit,
  Input,
  NgZone
} from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';


import {
  FileUploader,
  FileUploaderOptions,
  ParsedResponseHeaders,
  FileItem
} from 'ng2-file-upload';
import {
  Cloudinary
} from '@cloudinary/angular-5.x';

import {
  Ng2ImgMaxService
} from 'ng2-img-max';
import {
  log
} from 'util';



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
  urlFoto: string = "nulo";
  preco: number;
  data: Date;
  aux: boolean = true;

  @Input()
  responses: Array < any > ;

  private uploader: FileUploader;
  
constructor(
    private http: HttpClient,
    private zone: NgZone,
  ) {
    this.responses = [];
  }

  ngOnInit() {

    this.data = new Date();

    // Create the file uploader, wire it to upload to your account
    const uploaderOptions: FileUploaderOptions = {
      url: `https://api.cloudinary.com/v1_1/dxxxwkv7t/image/upload/`,
      // Upload files automatically upon addition to upload queue
      autoUpload: true,
      // Use xhrTransport in favor of iframeTransport
      isHTML5: true,
      // Calculate progress independently for each uploaded file
      removeAfterUpload: true,
      // XHR request headers
      headers: [{
        name: 'X-Requested-With',
        value: 'XMLHttpRequest'

      }]
    };

    this.uploader = new FileUploader(uploaderOptions);

    this.uploader.onBuildItemForm = (fileItem: any, form: FormData) => {


      // Use default "withCredentials" value for CORS requests
      fileItem.withCredentials = false;

      // Add Cloudinary's unsigned upload preset to the upload form
      form.append('upload_preset', 'skzrnf97');
      //  Add built-in and custom tags for displaying the uploaded photo in the list
      let tags = 'myphotoalbum';

      // Upload to a custom folder
      // Note that by default, when uploading via the API, folders are not automatically created in your Media Library.
      // In order to automatically create the folders based on the API requests,
      // please go to your account upload settings and set the 'Auto-create folders' option to enabled.
      form.append('folder', 'sebo-rural');
      // Add custom tags
      form.append('tags', tags);

      // Use default "withCredentials" value for CORS requests
      fileItem.withCredentials = false;

      //Add file to upload
      form.append('file', fileItem);


      return {
        fileItem,
        form
      };

    };


    // Insert or update an entry in the responses array
    const upsertResponse = fileItem => {

      // Run the update in a custom zone since for some reason change detection isn't performed
      // as part of the XHR request to upload the files.
      // Running in a custom zone forces change detection
      this.zone.run(() => {
        // Update an existing entry if it's upload hasn't completed yet

        // Find the id of an existing item
        const existingId = this.responses.reduce((prev, current, index) => {
          if (current.file.name === fileItem.file.name && !current.status) {
            return index;
          }
          return prev;
        }, -1);
        if (existingId > -1) {
          // Update existing item with new data
          this.responses[existingId] = Object.assign(this.responses[existingId], fileItem);
        } else {
          // Create new response
          this.responses.push(fileItem);
        }
      });
    };


    //Update model on completion of uploading a file
    this.uploader.onCompleteItem = (item: any, response: string, status: number, headers: ParsedResponseHeaders) =>
      upsertResponse(
        {
          file: item.file,
          status,
          data: JSON.parse(response)
        }
      );

    //Update model on upload progress event
    this.uploader.onProgressItem = (fileItem: any, progress: any) =>
      upsertResponse(
        {
          file: fileItem.file,
          progress,
          data: {}
        }
      );

  
  }


  compress(file) {

    let imageFile: File;
    const width = 800;
    ////const height = 600;
    const fileName = file.name;
    const reader = new FileReader();


    // ! read the input image as FileReader
    reader.readAsDataURL(file.rawFile);

    reader.onload = event => {

      // ! create a new instance of Image
      const img = new Image();

      //? set the result of the FileReader as source for the image
      img.src = reader.result as string;

      img.onload = () => {

        //* valor usado para manter a proporção original na imagem redimensionada
        const scaleFactor = width / img.width;

        //! create an HTML5 canvas element
        const elem = document.createElement('canvas');

        //! set the with and height of the canvas to match the new dimensions of the image
        elem.width = width;
        elem.height = img.height * scaleFactor;;

        //! create an object that is used to to match the new dimensions of the image
        // * The getContext() method returns an object with the properties and methods required for drawing graphics on the canvas.
        // * The ‘2d‘ parameter limits us for drawing only 2D graphics. 
        const ctx = elem.getContext('2d');

        // img.width and img.height will contain the original dimensions
        // * Now draw the image on the canvas by specifying the position, width and height of the image.
        ctx.drawImage(img, 0, 0, width, img.height * scaleFactor);

        ctx.canvas.toBlob((blob) => {

          //! o blob está aqui dentro

          const file = new File([blob], fileName, {
            type: 'image/jpeg',
            lastModified: Date.now()
          });

          imageFile = file;

        }, 'image/jpeg', 0.5);

      };

      reader.onerror = error => console.log(error);
    }; // fim do reader.onload


    setTimeout(doSomething, 1000);

    function doSomething() {
      //do whatever you want here

      this.imageFile = imageFile;

      console.log('retorno do timeout');

    }

    return console.log("retorno final");

  }


  createBook() {
    // //A diretiva (click) executa a função duas vezes
    window.console.log(this.http.post('http://localhost:8080/book', {
      titulo: this.titulo,
      autor: this.autor,
      descricao: this.descricao,
      urlFoto: this.urlFoto,
      curso: this.curso,
      periodo: this.periodo,
      disciplina: this.disciplina,
      preco: this.preco,
      dataCriacaoAnuncio: this.data

    }).subscribe(
      response => window.console.log(response)
    ));
  }

  // fileChange(event) {
  //   let fileList: FileList = event.target.files;

  //   if (fileList.length > 0) {

  //     let file: File = fileList[0];
  //     let formData: FormData = new FormData();
  //     formData.append('file', file);
  //     formData.append('upload_preset', 'skzrnf97')
  //     //let headers = new Headers();

  //     let headers = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }) };

  //     // /** In Angular 5, including the header Content-Type can invalidate your request */
  //     // headers.append('Content-Type', 'multipart/form-data');
  //     // headers.append('Accept', 'application/json');

  //     this.http.post(`https://api.cloudinary.com/v1_1/${this.cloudName}/upload`, formData, headers)
  //       .subscribe(
  //         response => window.console.log(response)
  //       )
  //   }
  // }


  /*****************************************/
  getFileProperties(fileProperties: any) {

    // Transforms Javascript Object to an iterable to be used by *ngFor
    if (!fileProperties) {
      return null;
    }

    if (fileProperties.secure_url != undefined && this.aux) {
      //recuperação da url da foto para salvar no servidor 
      this.urlFoto = fileProperties.secure_url;
      this.aux = false;
    }

    return Object.keys(fileProperties)
      .map((key) => ({
        'key': key,
        'value': fileProperties[key]
      }));
  }


  /********************************************************/

  // Código JavaScript puro
  uploadFile(files: FileList) {

    let file = files[0];
    ////let temp: string = "";
    ////let i = 0;

    // if ((file.size / 1024 / 1024) > 5) {
    //   window.alert("Arquivo maior do que 5 MB.");
    // } else {

    var url = `https://api.cloudinary.com/v1_1/${this.cloudName}/upload/`;
    var xhr = new XMLHttpRequest();
    var fd = new FormData();

    xhr.open('POST', url, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');


    // Update progress (can be used to show progress indicator)
    xhr.upload.addEventListener("progress", function (e) {

      console.log(`fileuploadprogress data.loaded: ${e.loaded},
  data.total: ${e.total}`);
    });

    xhr.onreadystatechange = function (e) {
      if (xhr.readyState == 4 && xhr.status == 200) {

        window.console.info("Arquivo enviado com sucesso!");

        //temp = JSON.parse(xhr.responseText).secure_url;

        //window.console.log(temp);

        //var response = JSON.parse(xhr.responseText);
        // https://res.cloudinary.com/cloudName/image/upload/v1483481128/public_id.jpg
        //var url = response.secure_url; 

      }
    };

    fd.append('upload_preset', 'skzrnf97');
    fd.append('teste', 'browser_upload'); // Optional - add tag for image admin in Cloudinary
    fd.append('file', file);
    xhr.send(fd);


    //}
  }


}


/*****************************************/

// Delete an uploaded image
// Requires setting "Return delete token" to "Yes" in your upload preset configuration
// See also https://support.cloudinary.com/hc/en-us/articles/202521132-How-to-delete-an-image-from-the-client-side-
// deleteImage = function (data: any, index: number) {
//   const url = `https://api.cloudinary.com/v1_1/${this.cloudinary.config().cloud_name}/delete_by_token`;
//   const headers = new Headers({ 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' });
//   const options = { headers: headers };
//   const body = {
//     token: data.delete_token
//   };
//   this.http.post(url, body, options).subscribe(response => {
//     console.log(`Deleted image - ${data.public_id} ${response.result}`);
//     // Remove deleted item for responses
//     this.responses.splice(index, 1);
//   });
// };

// fileOverBase(e: any): void {
//   this.hasBaseDropZoneOver = e;
// }