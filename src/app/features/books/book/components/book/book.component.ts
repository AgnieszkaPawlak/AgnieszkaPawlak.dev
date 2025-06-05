import { Component, input } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
  standalone: true
})
export class BookComponent {
  title = input.required<string>();
  author = input.required<string>();
  year = input<number>();
  cover = input<string>();
}
