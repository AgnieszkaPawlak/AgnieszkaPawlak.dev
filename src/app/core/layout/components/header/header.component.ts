import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {TranslateModule, TranslatePipe, TranslateService} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {LanguageSelectorComponent} from '@app/shared/language-selector/language-selector.component';

@Component({
  selector: 'app-header',
  imports: [TranslateModule, CommonModule, RouterModule, TranslatePipe, FormsModule, LanguageSelectorComponent],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentLanguage = 'en';
  constructor(private translate: TranslateService) {
    this.currentLanguage = this.translate.currentLang || 'en';
     this.translate.addLangs(['pl', 'en']);
     this.translate.setDefaultLang('pl');
  }

  navLinks = [
    {label: "nav.label.home", path: './home'},
    {label: "nav.label.books", path: './books'},
    {label: "nav.label.articles", path: './articles'},
    {label: "nav.label.contact", path: './contact'}
  ]

  switchLanguage(language: string): void {
    this.currentLanguage = language;
    this.translate.use(language);

  }

}
