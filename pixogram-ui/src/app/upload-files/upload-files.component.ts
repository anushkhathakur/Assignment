import { Component, OnInit } from '@angular/core';
import { UploadFileService } from 'src/app/_services/upload-file.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {
  form: any = {};
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';


  fileInfos: Observable<any>;

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
    this.fileInfos = this.uploadService.getFiles();
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.form.file=event.target.files[0];
    this.form.fileName=event.target.files[0].name;

    //console.log("file name is ---->>"+event.target.files[0].name);
    this.form.fileType = event.target.files[0].type;
      //var size = event.target.files[0].size;
      //console.log("size==>"+size);
      //var fileReader = new FileReader();
        //fileReader.readAsDataURL(event.target.files[0]);
        //console.log("fileReader=>"+fileReader.readAsText(event.target.files[0], "UTF-8"));
      //this.form.fileReader=fileReader;
        
    //console.log("bytes is ---->>"+event.target.files[0].bytes);
  }

  upload() {

    this.form.userId="1";
    console.log("mediaTitle===>"+this.form.mediaTitle);
    this.form.desc="hello my pic";
    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    //this.form.file=this.currentFile;
    this.uploadService.upload(this.form,this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.uploadService.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });

    this.selectedFiles = undefined;
  }
}
