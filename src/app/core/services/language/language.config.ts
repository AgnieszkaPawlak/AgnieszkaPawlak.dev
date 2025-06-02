export interface Language {
  code: string;
  label: string;
}

export const DEFAULT_LANGUAGE = 'en';
export const SUPPORTED_LANGUAGES: Language[] = [
  { code: 'en', label: 'English' },
  { code: 'pl', label: 'Polski'},
];
