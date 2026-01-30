import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MenuComponent } from '../menu/menu.component';
import { ClockComponent } from '../dashboard/clock/clock.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [DashboardComponent, MenuComponent, ClockComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
