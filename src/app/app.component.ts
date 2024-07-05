import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';

//inserido manual

import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    RouterModule,
    MenuComponent,
    FooterComponent,
    MainComponent,
    LoginComponent,
    RouterLink,
    RouterLinkActive,
  ],
})
export class AppComponent {
  title = 'gamemania';
}
