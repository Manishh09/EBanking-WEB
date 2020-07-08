import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EbankApiService } from '../core/services/ebank-api.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  customerUid: string;

  private subject = new BehaviorSubject<string>(null);
  public newcustomeruid : Observable<any>;
  constructor(private ebankApi: EbankApiService) {
     this.newcustomeruid = this.subject.asObservable();
   }

   receiveCustomerUid(customerUid){
    this.subject.next(customerUid)
  }

  getNotification(customerUid: string){
    return this.ebankApi.get(`/Notification/GetNotifications/${customerUid}`);
  }
}
