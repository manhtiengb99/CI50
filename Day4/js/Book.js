export class Book {
  id;
  book_title;
  author;
  category;
  date;
  constructor(id, book_title, author, category) {
    this.id = id;
    this.book_title = book_title;
    this.author = author;
    this.category = category;
    this.date = new Date().toISOString();
  }
}
