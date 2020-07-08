import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, retry } from 'rxjs/operators';
import { HandledError } from 'src/app/shared/errors/handled-error';
import { UnHandledError } from 'src/app/shared/errors/unhandled-error';


export class ApiService {

  constructor(private http: HttpClient, private apiUrl: string ) {}

  get(url: string) {
    
    return this.http.get(this.apiUrl + url).pipe(
      map(x => this.responseHandler(x)),
      retry(1),
      catchError(x => this.responseHandler(x))
    );
  }

  post(url: string, data: any) {
    return this.http.post(this.apiUrl + url, data).pipe(
      map(x => this.responseHandler(x)),
      catchError(x => this.responseHandler(x))
    );

  }

  private responseHandler(x: any) {
    if (x.hasOwnProperty('didError') && !x['didError']) {
      return x['model'];
    } else {
      this.errorHandler(x);
    }
  }

  private errorHandler(x: any) {
    if (x.hasOwnProperty('errorMessage') && !x['errorMessage']) {
      throw new HandledError(x['errorMessage']);
    } else {
      throw new UnHandledError('unhandled error');
    }
  }

}
