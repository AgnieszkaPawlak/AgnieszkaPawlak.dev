import { Component, ElementRef, OnInit, signal, ViewChild, WritableSignal} from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NgClass } from '@angular/common';

import { LanguageService } from '@app/core/services/language/language.service';
import {Language} from '@app/core/services/language/language.config';

@Component({
  selector: 'language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
  standalone: true,
  imports: [
    TranslatePipe,
    NgClass
  ],
})
export class LanguageSelectorComponent implements OnInit {
  currentLanguage: WritableSignal<string> = signal('');
  supportedLanguages: Language[] = [];

  isDropdownOpen: WritableSignal<boolean> = signal(false);
  dropdownPosition: WritableSignal<'top' | 'bottom'> = signal('bottom');

  @ViewChild('languageIcon', { static: false }) languageIcon!: ElementRef<HTMLElement>;
  @ViewChild('dropdown', { static: false }) dropdown!: ElementRef<HTMLElement>;

  constructor(private languageService: LanguageService) {

  }

  ngOnInit(): void {
    this.currentLanguage.set(this.languageService.currentLanguage());
    this.supportedLanguages = this.languageService.getLanguages();
  }

  toggleDropdown(): void {
    this.isDropdownOpen.update((state) => !state);

    if (this.isDropdownOpen()) {
      const buttonRect = this.languageIcon.nativeElement.getBoundingClientRect();
      const dropdownElement = this.dropdown.nativeElement;
      const viewportHeight = window.innerHeight;
      const spaceBelow = viewportHeight - buttonRect.bottom;
      this.dropdownPosition.set(spaceBelow < dropdownElement.offsetHeight ? 'top' : 'bottom');
    }
  }

  switchLanguage(language: string): void {
    this.languageService.changeLanguage(language);
    this.isDropdownOpen.set(false);
    this.currentLanguage.set(this.languageService.currentLanguage());
  }

  getDropdownClass(): string {
    return `language-selector__dropdown--${this.dropdownPosition()}`;
  }

}
