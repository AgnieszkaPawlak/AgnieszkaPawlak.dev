import { Component, effect, ElementRef, signal, ViewChild, WritableSignal } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { NgClass } from '@angular/common';

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
export class LanguageSelectorComponent {
  currentLanguage: WritableSignal<string> = signal(this.getInitialLanguage());

  isDropdownOpen: WritableSignal<boolean> = signal(false);
  dropdownPosition: WritableSignal<'top' | 'bottom'> = signal('bottom');

  @ViewChild('languageIcon', { static: false }) languageIcon!: ElementRef<HTMLElement>;
  @ViewChild('dropdown', { static: false }) dropdown!: ElementRef<HTMLElement>;

  constructor(private translate: TranslateService) {
    effect(() => {
      this.translate.use(this.currentLanguage());
    });
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
    this.currentLanguage.set(language);
    localStorage.setItem('language', language);
    this.isDropdownOpen.set(false);
  }

  private getInitialLanguage(): string {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'en';
  }
}
