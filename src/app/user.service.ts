import { Injectable } from '@angular/core';
import { Observable, of } from  'rxjs';
import { delay } from  'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private role = "USER";

  constructor() { }

  login():  Observable<boolean>  {
    return of(false).pipe( 
      delay(10000)
    );
  }

  getRole(){
    return this.role;
  }

}
