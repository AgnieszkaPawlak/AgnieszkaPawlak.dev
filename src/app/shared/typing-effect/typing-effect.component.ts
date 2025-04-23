import {Component, Input, Signal, signal, effect, input, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-typing-effect',
  templateUrl: './typing-effect.component.html',
  standalone: true,
  styleUrl: './typing-effect.component.scss'
})
export class TypingEffectComponent implements OnDestroy {
  readonly texts = input<string[]>([]);
  readonly speed = input(100);
  readonly delay = input(2000);

  readonly displayText = signal('');

  private currentIndex = signal(0);
  private typingFrameId: number | null = null;
  private erasingFrameId: number | null = null;
  private lastFrameTime = 0;

  constructor() {
    effect(() => {
      if (this.texts().length > 0) {
        this.startTyping();
      }
    });
  }

  private startTyping(): void {
    const texts = this.texts();
    const current = texts[this.currentIndex()];
    let charIndex = 0;
    this.displayText.set('');
    this.clearFrames();
    this.lastFrameTime = performance.now();

    const type = (time: number) => {
      if (time - this.lastFrameTime >= this.speed()) {
        if (charIndex < current.length) {
          this.displayText.update(t => t + current[charIndex++]);
          this.lastFrameTime = time;
        } else {
          this.typingFrameId = null;
          setTimeout(() => this.startErasing(), this.delay());
          return;
        }
      }
      this.typingFrameId = requestAnimationFrame(type);
    };

    this.typingFrameId = requestAnimationFrame(type);
  }

  private startErasing(): void {
    const texts = this.texts();
    const current = texts[this.currentIndex()];
    let charIndex = current.length;
    this.lastFrameTime = performance.now();

    const erase = (time: number) => {
      if (time - this.lastFrameTime >= this.speed() / 2) {
        if (charIndex > 0) {
          this.displayText.update(t => t.slice(0, --charIndex));
          this.lastFrameTime = time;
        } else {
          this.erasingFrameId = null;
          this.currentIndex.update(i => (i + 1) % texts.length);
          this.startTyping();
          return;
        }
      }
      this.erasingFrameId = requestAnimationFrame(erase);
    };

    this.erasingFrameId = requestAnimationFrame(erase);
  }

  private clearFrames(): void {
    if (this.typingFrameId != null) {
      cancelAnimationFrame(this.typingFrameId);
      this.typingFrameId = null;
    }
    if (this.erasingFrameId != null) {
      cancelAnimationFrame(this.erasingFrameId);
      this.erasingFrameId = null;
    }
  }

  ngOnDestroy(): void {
    this.clearFrames();
  }
}
