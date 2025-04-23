import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Language, SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from '@app/shared/config/language.config';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly supportedLanguages: Language[] = SUPPORTED_LANGUAGES;
  currentLanguage = signal<string>(DEFAULT_LANGUAGE);

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang(DEFAULT_LANGUAGE);
    this.translateService.use(DEFAULT_LANGUAGE)
  }

  changeLanguage(language: string): void {
    if (!this.isSupportedLanguage(language)) {
      return;
    }
    this.currentLanguage.set(language);
    this.translateService.use(language);
  }

  private isSupportedLanguage(language: string): boolean {
    return this.supportedLanguages.some(lang => lang.code === language);
  }
}
