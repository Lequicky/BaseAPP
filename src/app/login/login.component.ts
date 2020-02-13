import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: any = null;
  password: any = null;
  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.username, this.password).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/']);
    });
    // this.router.navigate(['/']);
  }

}
