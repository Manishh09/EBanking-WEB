import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor(private custservice: CustomerService) { }
 
  ngOnInit():void {

    
}}
