import { Component } from '@angular/core';
import {FooterComponent} from './shared/footer/footer.component';
import {HeaderComponent} from './core/header/header.component';
import {RouterOutlet} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  imports: [ FooterComponent, HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-blog';
}
