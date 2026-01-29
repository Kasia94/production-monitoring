import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [DashboardComponent, MenuComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
