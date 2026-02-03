import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { ClockComponent } from '../dashboard/clock/clock.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MenuComponent, ClockComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
