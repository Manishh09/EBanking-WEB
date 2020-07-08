import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';


@Injectable({
  providedIn: 'root'
})
export class AnonymousUserGuard implements CanActivate {
  constructor(private loginserv: NotificationService,
              private route: Router){}
  subsc: Subscription;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    this.subsc=this.loginserv.newcustomeruid.subscribe(x=> 
      {
        if (x)
        {
          return true;
        }
        else return false;
        
    });

    if (this.subsc)
      return true;
    else 
      return this.route.navigate(['login']);
      
  }

  ngOnDestroy(){
    if(this.subsc)
      this.subsc.unsubscribe();
  }
  
}
