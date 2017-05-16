import { Component } from '@angular/core';
import { NodeExpressService } from './node-express.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private file: any;

  constructor(private nodeService: NodeExpressService){

  }

  title = 'Falabella Test';

  onSubmit = function (form) {
    this.nodeService.saveData(form);
    this.nodeService.saveImage(this.file);
  }

  getFiles(event){
    let files: FileList = event.target.files;
    this.file = files.item(0);
  }

}
