import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
