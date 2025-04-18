import {Component, Input, Signal, signal, effect, input} from '@angular/core';

@Component({
  selector: 'app-typing-effect',
  templateUrl: './typing-effect.component.html',
  standalone: true,
  styleUrl: './typing-effect.component.scss'
})
export class TypingEffectComponent {

  texts = input<string[]>([]);
  speed=  input(100);
  delay = input<number>(2000);

  currentTextIndex = signal<number>(0);
  displayText = signal<string>('');
  showCursor = signal<boolean>(true);

  constructor() {
    effect(() => {
      this.startTypingLoop();
    });
  }

  private startTypingLoop() {
    this.displayText.set('');
    const textList = this.texts();
    if (!textList.length) return;

    const textToType = textList[this.currentTextIndex()];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex < textToType.length) {
        this.displayText.set(this.displayText() + textToType[charIndex]);
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => this.eraseText(), this.delay());
      }
    }, this.speed());
  }

  private eraseText() {
    const textList = this.texts();
    const textToErase = textList[this.currentTextIndex()];
    let charIndex = textToErase.length;

    const eraseInterval = setInterval(() => {
      if (charIndex > 0) {
        this.displayText.set(this.displayText().slice(0, charIndex - 1));
        charIndex--;
      } else {
        clearInterval(eraseInterval);
        this.currentTextIndex.update((idx) => (idx + 1) % textList.length);
        this.startTypingLoop();
      }
    }, this.speed() / 2);
  }
}
