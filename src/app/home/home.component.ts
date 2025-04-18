import { Component, signal } from '@angular/core';
import { TypingEffectComponent } from '../shared/typing-effect/typing-effect.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    TypingEffectComponent
  ],
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  protected texts = signal<string[]>([
    '    My experience includes delivering high-quality frontend libraries and ensuring applications run flawlessly through meticulous testing.\n' +
    '      Currently, I am expanding my expertise to become a full-stack developer by learning Java and backend object-oriented design patterns.'
  ]);
  protected typingDelay = signal<number>(2500);

}
