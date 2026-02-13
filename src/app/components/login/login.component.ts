import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, PasswordModule, InputTextModule, FloatLabelModule, ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(
    private router: Router
  ){}

  login()
  {
    //Login impl: /loginra elmegy a kérés, 302 = jó adatok => visszadob a /main-re, 200 = rossz adatok => marad a /login-on
    //Jó: Bejelentkező adatok session storageban tárolása, /main-re navigálás 

    this.router.navigate(['/main'])
  }
}
