import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:9001';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  private baseUrl = 'http://localhost:9001';

  constructor(private http: HttpClient) { }

  upload(singleMediaRequest,file): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);
    formData.append('singleMediaRequest', new Blob([JSON.stringify({
      "userId": "1",
      "mediaTitle": "mediaTitle"  , 
      "desc": "desc"  ,
      "fileName":"fileName"                  
  })], {
      type: "application/json"
  }));

    const req = new HttpRequest('POST', `${this.baseUrl}/uploadSingleFile`, formData, {
      reportProgress: true,
      responseType: 'json',
      
    });

    return this.http.request(req);
  }

  upload11(singleMediaRequest,file): Observable<any> {
    console.log("file--------------->>>"+singleMediaRequest.file);
    return this.http.post(AUTH_API + '/uploadSingleFile', {
      mediaTitle: singleMediaRequest.mediaTitle,
      file: singleMediaRequest.file,
      fileName: singleMediaRequest.fileName,
      fileType: singleMediaRequest.fileType
      //file:singleMediaRequest.file.getFiles
    }, httpOptions);
  }

  upload1(singleMediaRequest,file): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    //formData.append('singleMediaRequest.file', file);
   formData.append('singleMediaRequest', singleMediaRequest);

    const req = new HttpRequest('POST', `${this.baseUrl}/uploadSingleFile`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }
}
