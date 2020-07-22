import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  APP = require('./assets/pf8-2.png');
  email: string;
  password: string;
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.errorMessage = '';
    if (this.authService.isLogged()) {
      this.navigateTo();
    }
  }

  public async back() {
    try {
        
        this.navigateTo("login");

    } catch (e) {
    }
}

  public navigateTo(url?: string) {
    url = url || 'nav';
    this.router.navigate([url], { replaceUrl: true });
  }

}
