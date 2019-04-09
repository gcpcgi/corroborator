import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  readonly endpoint = 'http://localhost:8080/';
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })
  };

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getProducts(): Observable<any> {
    return this.http.get(this.endpoint + 'data/2.5/weather?zip=L5B0C1,can&appid=b6907d289e10d714a6e88b30761fae22').pipe(
      map(this.extractData));
  }

  getProduct(id): Observable<any> {
    return this.http.get(this.endpoint + 'products/' + id).pipe(
      map(this.extractData));
  }

  uploadFile(fileToUpload): Observable<any> {
    console.log(fileToUpload);
    const formData = new FormData();
    formData.append('file', fileToUpload);
    return this.http.post<any>(this.endpoint + 'uploadFile', formData, this.httpOptions).pipe(
    tap((fileUploadedResponse) => console.log(`added file w/ id=${fileUploadedResponse}`)),
    catchError(this.handleError<any>('fileUpload'))
    );
  }

  updateProduct (id, product): Observable<any> {
    return this.http.put(this.endpoint + 'products/' + id, JSON.stringify(product), this.httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  deleteProduct (id): Observable<any> {
    return this.http.delete<any>(this.endpoint + 'products/' + id, this.httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<any>('deleteProduct'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
