import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class NodeExpressService {

  constructor(private  http: Http) {
  }

  saveData(form) {
    var params = 'rut=' + `${form.rut}` + '&nombres=' + `${form.nombres}` + '&apellidos=' + `${form.apellidos}`
      + '&telefono=' + `${form.telefono}` + '&email=' + `${form.email}`;
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    this.http.post("http://localhost:3000/api/post", params, { headers: headers }).subscribe(
      datos => {},
      error => {alert("Error.")},
      () => {alert("Datos guardados.")}
    );
  }

  saveImage(image){

    var formData = new FormData();
    formData.append('file', image);
    var request = new XMLHttpRequest();
    request.open("POST", "http://localhost:3000/api/post/image", true); // "false" makes the request synchronous
    request.send(formData);
    request.onload = function(oEvent) {
      if (request.status == 200) {
        alert("Imagen guardada.")
      } else {
        alert("Error.");
      }
    };

  }
}
