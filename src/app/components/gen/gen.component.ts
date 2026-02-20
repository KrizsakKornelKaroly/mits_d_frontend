import { Component } from '@angular/core';
import { FloatLabelModule } from "primeng/floatlabel"
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Tooltip } from 'primeng/tooltip';

@Component({
  selector: 'app-gen',
  standalone: true,
  imports: [FloatLabelModule, InputTextModule, FormsModule, ButtonModule, CardModule, CommonModule, RouterModule, Tooltip],
  templateUrl: './gen.component.html',
  styleUrl: './gen.component.scss'
})
export class GenComponent {

}
