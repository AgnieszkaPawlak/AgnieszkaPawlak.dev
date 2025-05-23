import { Component } from '@angular/core';
import {FooterComponent} from './shared/footer/footer.component';
import {HeaderComponent} from './shared/header/header.component';
import {RouterOutlet} from '@angular/router';
import {LayoutService} from '@app/shared/services/layout.service';

@Component({
  selector: 'app-root',
  imports: [ FooterComponent, HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(public layoutService: LayoutService) {
  }

  title = 'portfolio';
}
