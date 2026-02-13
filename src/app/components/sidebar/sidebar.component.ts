import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SpeedDial } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SpeedDial, ToastModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  items: MenuItem[] | null = null;
  ngOnInit() {
    this.items = [
        {
            label: 'Edit',
            icon: 'pi pi-pencil',
        },
        {
            label: 'Refresh', 
            icon: 'pi pi-refresh',
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            routerLink: ['/fileupload']
        },
        {
            label: 'External',
            icon: 'pi pi-external-link',
            target: '_blank',
            url: 'http://angular.io'
        }
    ];
}
}
