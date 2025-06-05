import {Component, computed, signal} from '@angular/core';
import booksData from '@asset/data/books.json';
import {BookComponent} from '@app/features/books/book/components/book/book.component';


@Component({
  selector: 'app-books',
  standalone: true,
  imports: [BookComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent {
  private readonly originalBooks = signal(booksData);
  readonly books = computed(() =>
    this.originalBooks()
  );
}
