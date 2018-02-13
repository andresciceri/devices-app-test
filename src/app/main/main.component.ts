import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {LoginService} from '@app/login';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private login: LoginService) { }

  ngOnInit() {
  }

  logout () {
  	this.login.logout();
    this.router.navigate(['/login']);
  }

}
