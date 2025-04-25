import {Component, effect, signal} from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import {UpperCasePipe} from '@angular/common';

import { TypingEffectComponent } from '@app/shared/typing-effect/typing-effect.component';
import { LanguageService } from '@app/shared/services/language.service';
import {SkillsComponent} from '@app/features/skills/skills.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    TypingEffectComponent,
    TranslatePipe,
    UpperCasePipe,
    SkillsComponent
  ],
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  protected texts = signal<string[]>([]);
  protected typingDelay = signal<number>(2500);

  constructor(private translate: TranslateService,private languageService: LanguageService) {

    effect(() => {
      this.languageService.currentLanguage();
      this.loadTranslations();
    })
  }

  private loadTranslations() {
    const keys = ['home.aboutDescription'];
    this.translate
      .get(keys)
      .subscribe((translation: Record<string, string>) => {
        const translatedTexts = keys.map((key) => translation[key] || ``);
        this.texts.set(translatedTexts);
      });
  }
}
