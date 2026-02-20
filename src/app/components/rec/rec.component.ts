import { Component } from '@angular/core';
import { FloatLabelModule } from "primeng/floatlabel"
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FileUpload } from 'primeng/fileupload';

@Component({
  selector: 'app-rec',
  standalone: true,
  imports: [FloatLabelModule, InputTextModule, FormsModule, ButtonModule, CardModule, CommonModule, RouterModule, FileUpload],
  templateUrl: './rec.component.html',
  styleUrl: './rec.component.scss'
})
export class RecComponent {

}
