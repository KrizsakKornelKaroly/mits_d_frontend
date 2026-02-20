import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { SpeedDial } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SpeedDial, ToastModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  items: MenuItem[] | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
        {
            label: 'GitHub',
            icon: 'pi pi-github',
            command: () => {
                window.open('https://github.com/KrizsakKornelKaroly/mits_d_frontend', '_blank');
            }
        },
        {
            label: 'MindReader',
            icon: 'pi pi-barcode',
            command: () => {
                this.router.navigate(['/rec']);
            }
        },
        {
            label: 'DreamWeaver',
            icon: 'pi pi-image',
            command: () => {
                this.router.navigate(['/gen']);
            }
        },
        {
            label: 'ChatterBlaster', 
            icon: 'pi pi-file-word',
            command: () => {
                this.router.navigate(['/chat']);
            }
        },
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => {
                this.router.navigate(['/main']);
            }
        },
    ];
  }
}
