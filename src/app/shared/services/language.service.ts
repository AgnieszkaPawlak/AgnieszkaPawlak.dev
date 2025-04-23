import {Injectable, Signal, signal} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Language, SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from '@app/shared/config/language.config';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly supportedLanguages: Language[] = SUPPORTED_LANGUAGES;
  currentLanguage = signal<string>(DEFAULT_LANGUAGE);

  constructor(private translateService: TranslateService) {
    this.initializeDefaultLanguage();
  }

  getLanguages(): Language[] {
    return this.supportedLanguages;
  }

  private initializeDefaultLanguage(): void {
    const savedLanguage = this.getSavedLanguage();
    const initialLanguage = savedLanguage || DEFAULT_LANGUAGE;
    this.setCurrentLanguage(initialLanguage);
  }

  private setCurrentLanguage(language: string): void {
    this.currentLanguage.set(language);
    this.translateService.use(language);
    this.savedLanguage(language);
  }

  private savedLanguage(language: string): void {
    localStorage.setItem('language', language);
  }

  private getSavedLanguage(): string | null {
    return localStorage.getItem('language');
  }

  changeLanguage(language: string): void {
    if (this.isSupportedLanguage(language)) {
      this.setCurrentLanguage(language);
    }
  }

  private isSupportedLanguage(language: string): boolean {
    return this.supportedLanguages.some(lang => lang.code === language);
  }
}
