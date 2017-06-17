import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
  providers: [ BookService ]
})
export class EditBookComponent implements OnInit {

  @Input() selectedBook;

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  UpdateBook1(bookToUpdate){
    this.bookService.updateBook(bookToUpdate);
  }

  DeleteBook1(bookToDelete){
    {
      this.bookService.deleteBook(bookToDelete);
    }
  }
}
