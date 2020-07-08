import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EbankApiService extends ApiService{

  constructor(http: HttpClient) {
    super(http, environment.apiUrl);
  }
}
