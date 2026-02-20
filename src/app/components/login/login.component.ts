import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, PasswordModule, InputTextModule, FloatLabelModule, ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(
    private router: Router,
    private api: ApiService
  ){}

  username: string = '';
  password: string = '';

  login()
  {
    //Login impl: /loginra elmegy a kérés, 302 = jó adatok => visszadob a /main-re, 200 = rossz adatok => marad a /login-on
    //Jó: Bejelentkező adatok session storageban tárolása, /main-re navigálás 

    this.router.navigate(['/main']);
    /*
    this.api.login(this.username, this.password).subscribe({
      
      next: (res: HttpResponse<any>) => {
        const status = res.status;
        if (status === 302) {
          sessionStorage.setItem('username', this.username);
          this.router.navigate(['/main']);
        } else {
          console.warn('Login failed, status:', status);
        }
      },
      error: (error) => {
        const status = error?.status;
        if (status === 302) {
          sessionStorage.setItem('username', this.username);
          this.router.navigate(['/main']);
        } else {
          console.error('Login error, status:', status);
        }
      }
    });*/
  }
}
