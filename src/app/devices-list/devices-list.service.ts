import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '@env/environment';
import {DeviceList} from './device-list';
import {LoginService} from '@app/login';

@Injectable()
export class DevicesListService {

	private headers = new HttpHeaders({'Content-Type': 'application/json'});
	private token: string;
	private deviceUrl = environment.apiUrl + 'devices/';  // URL to web ap

  constructor(private http: HttpClient,private login: LoginService, private router: Router) { 
  	if(localStorage.getItem('AppUserToken')){
      this.token = localStorage.getItem('AppUserToken');      
      this.headers = new HttpHeaders().append('Authorization', this.token);      
    }
  }

  getDevicesList (page: number, limit: number): Observable<DeviceList> {
    let options = { headers : this.headers};    
    const url = `${this.deviceUrl}?fields=name,model,state,hwId,media&page=${page}&limit=${limit}`;
    return this.http.get<DeviceList>(url,options)
      .pipe(
        catchError(this.handleError<DeviceList>('getDevicesList'))
      );
	  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
     this.action(error);
     
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private action(error: any) {
    
      if(error.statusText == "Unauthorized"){
        this.login.logout();
        this.router.navigate(['/login']);
      }    
  }
}
