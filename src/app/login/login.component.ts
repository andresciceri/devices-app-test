import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	login: any = {name: "", password: ""};
	heightDiv: string;
	returnUrl: string;

  constructor(private route: ActivatedRoute,
        private router: Router,        
        private loginService: LoginService) { 
  	window.addEventListener("resize", this.sizeWindow);
  	this.heightDiv = "0px";
  }

  ngOnInit() {
  	this.heightDiv = window.innerHeight + "px";
  	this.loginService.logout();    
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSignIn () {
  	//let result = this.af.auth.login({ email: this.login.email, password: this.login.password });
  	let email = this.login.email.trim();
  	let pass = this.login.password.trim();

    if (!email && !pass) { return; }
    
    this.loginService.login(email, pass)
  		.then(access => {
  			this.router.navigate([this.returnUrl]);
  		},
      error => {
          console.log(error);
    		});

  }

  sizeWindow () {
    this.heightDiv = window.innerHeight + "px";
  }

}
