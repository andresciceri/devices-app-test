import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'

import { environment } from '@env/environment';

import {AccessData} from './access-data';

@Injectable()
export class LoginService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private loggedIn = false;
	private token: string;
	private apiUrl = environment.apiUrl + 'oauth2/token';  // URL to web ap

  constructor(private http: Http) { 
  	this.loggedIn = !!localStorage.getItem('AppUserToken');
  	if(localStorage.getItem('AppUserToken') && !this.headers.has('Authorization')){
      this.token = localStorage.getItem('AppUserToken');
      this.headers.append('Authorization', this.token);
    }
  }

  login(username : string, pass : string) : Promise<AccessData>{
    let options = new RequestOptions({ headers : this.headers});
    let body = JSON.stringify({'username': username, 'password': pass, 'grant_type': 'password', 'client_secret': environment.client_secret, 'client_id': environment.client_id});
    return this.http.post(this.apiUrl,body, options)
              .toPromise()
              .then(res => 
              	{
              		let obj: AccessData = res.json();
              		this.token = obj.token_type + " " + obj.access_token;
	                if (this.token) {
	                	this.loggedIn = true;
	                    // store user details and jwt token in local storage to keep user logged in between page refreshes
	                    localStorage.setItem('AppUserToken', this.token);
	                    localStorage.setItem('AppUser', JSON.stringify(obj));

                      if(!this.headers.has('Authorization')){
                        this.headers.append('Authorization', this.token);
                      }                      
	                    return obj;
	                }	                
              		
              	})
              .catch(this.handleError);
  }

  logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('AppUserToken');
        localStorage.removeItem('AppUser');
        this.loggedIn = false;
    }

    isLogedIn (): boolean {

      return !!sessionStorage.getItem('lemurUserToken');
  	}

   private handleError(error: any): Promise<any> {
    //console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
