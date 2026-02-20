import { Component, AfterViewInit, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterLink, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FloatLabel } from "primeng/floatlabel";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CardModule, ButtonModule, RouterLink, RouterModule, CommonModule, FloatLabel, FormsModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit, OnInit {

  token: string | null = null;

  ngOnInit() {
    const username = sessionStorage.getItem('username');
    this.token = sessionStorage.getItem('token');
  }

  ngAfterViewInit() {
    if (this.token == null) {
      const elements = document.getElementsByClassName('botButton');
      const arr = Array.from(elements) as HTMLElement[];
      arr.forEach(element => {
        element.childNodes.forEach(child => {
          if (child instanceof HTMLElement) {
            child.setAttribute('disabled', 'true');
          }
        });
      });
    }
    this.checkToken();
  }

  saveToken() {
    if (this.token) {
      sessionStorage.setItem('token', this.token);
      document.location.reload();
    }
  }

  checkToken() {
    const tokenInput = document.getElementById('tokenInput') as HTMLInputElement | null;

    // Template already binds the p-button label to the token value, so avoid direct DOM updates.
    if (this.token && tokenInput) {
      tokenInput.setAttribute('disabled', 'true');
    }
  }
}
