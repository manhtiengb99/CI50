import { Book } from "./Book.js";
export class Bookcase {
  id;
  max;
  bookcase_name;
  date;
  books = [];
  constructor(id, max, bookcase_name) {
    this.id = id;
    this.max = max;
    this.bookcase_name = bookcase_name;
    this.date = new Date().toISOString();
    this.books = [];
  }
}
export class BookcaseAction {
  bookcase = [];
  constructor(bookcase) {
    this.bookcase = bookcase;
  }
  addBookcase() {
    let id = prompt("Nhập id tủ sách");
    let max = prompt("Nhập số lượng sách có thể chưa");
    let bookcase_name = prompt("Nhập tên tủ sách");
    let newBookcase = new Bookcase(id, max, bookcase_name);
    this.bookcase.push(newBookcase);
  }
  updateBookcase() {
    let id = prompt("Nhập id tủ sách muốn sửa");
    let property = prompt("Nhập thuộc tính muốn sửa");
    let content = prompt("Nhập nội dung mới");
    this.bookcase[id - 1][property] = content;
  }
  deleteBookcase() {
    let id = prompt("Nhập id tủ sách muốn xóa");
    this.bookcase.splice(id - 1, 1);
  }
  showBookcase() {
    for (let i = 0; i < this.bookcase.length; i++) {
      console.log(this.bookcase[i]);
    }
  }
  findBook() {
    let property = prompt("Nhập thuộc tính sách cần tìm");
    for (let i = 0; i < this.bookcase.length; i++) {
      console.log(this.bookcase[i][property]);
    }
  }

  showBook() {
    let id_bc = prompt("Nhập id tủ sách mà bạn cần in toàn bộ sách ra");
    console.log(
      `Trong tủ sách có id là ${id_bc} có ${
        this.bookcase[id_bc - 1].books.length
      } quyển sách`
    );
    for (let i = 0; i < this.bookcase[id_bc - 1].books.length; i++) {
      console.log(this.bookcase[id_bc - 1].books[i]);
    }
  }
  addBook() {
    let id_bc = prompt("Nhập id tủ sách muốn thêm sách");
    let id = prompt("Nhập id sách");
    let book_title = prompt("Nhập tên sách");
    let author = prompt("nhập tên tác giả");
    let category = prompt("Nhập thể loại sách");
    let date = new Date();
    let newbook = new Book(
      id,
      book_title,
      author,
      category,
      date.toISOString()
    );
    this.bookcase[id_bc - 1].books.push(newbook);
  }
}
