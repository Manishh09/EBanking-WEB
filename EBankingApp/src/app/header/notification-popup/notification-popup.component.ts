import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-notification-popup',
  templateUrl: './notification-popup.component.html',
  styleUrls: ['./notification-popup.component.scss']
})
export class NotificationPopupComponent implements OnInit {

  @Output() clear= new EventEmitter<boolean>();
  @Input() msg:any='';
  constructor(public dialogRef: MatDialogRef<NotificationPopupComponent>) { }

  ngOnInit() {
  }

  clearClicked(){
    this.dialogRef.close();
  }

}
