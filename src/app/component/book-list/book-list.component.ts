import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';
import { BookService } from 'src/app/share/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  listBook: any

  books:Book[]

  constructor(private crud: BookService) { }

  ngOnInit(): void {
    this.getAll();
  }
getAll(){
  this.crud.getBooks().subscribe((res:any)=>{
    console.log(res)
    this.books = res._embedded.books;
  })
}


}
