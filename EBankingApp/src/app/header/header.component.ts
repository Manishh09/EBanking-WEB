import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Subscription } from 'rxjs';
import { NotificationModel } from './Models/notification.model';
import { MatDialog } from '@angular/material/dialog';
import { NotificationPopupComponent } from './notification-popup/notification-popup.component';
import { NotificationService } from '../services/notification.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private notifyserv: NotificationService, private dialogRef: MatDialog, private route: Router) { }
  isloggedIn: boolean;
  notificationArray: NotificationModel[]=[];
  subsc : Subscription;
  ngOnInit() {

    this.subsc=this.notifyserv.newcustomeruid.subscribe(x=>{      
      if(x) {        
        this.getNotifications(x);
        this.isloggedIn=true;
        }       
      });

  }

  getNotifications(uid: string )   {
    this.notifyserv.getNotification(uid).subscribe(y=>{
      if (y){
        this.notificationArray = y;
      }
    } 
    );
  }

  signOut(){
    this.route.navigate(['']);
  }

openDialog(){
  let dialogRef=this.dialogRef.open(NotificationPopupComponent)     
    dialogRef.componentInstance.msg="Yu have been notified";    
}
ngOnDestroy(){
  if(this.subsc)
  this.subsc.unsubscribe();
}

}


