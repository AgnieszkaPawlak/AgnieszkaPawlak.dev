import { signal } from '@angular/core';

import type { LanguageService } from '@app/shared/services/language.service';
import type { Language } from '@app/shared/config/language.config';

export const mockSupportedLanguages: Language[] = [
  { code: 'pl', label: 'Polski' },
  { code: 'en', label: 'English' }
];

export const LanguageServiceMock = (): jasmine.SpyObj<LanguageService> => {
  const mock = jasmine.createSpyObj('LanguageService', [
    'getLanguages',
    'changeLanguage'
  ], {
    currentLanguage: signal('pl')
  });

  mock.getLanguages.and.returnValue(mockSupportedLanguages);
  mock.changeLanguage.and.callFake((language: string) => {
    mock.currentLanguage.set(language);
  });

  return mock;
}
