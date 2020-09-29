import { BookcaseAction } from "./Bookcase.js";

let arr = [];
let action = new BookcaseAction(arr);

while (true) {
  let type = prompt(`Enter your type :
        (1- Thêm tủ sách
         2- Hiển thị tủ sách
         3- Xóa tủ sách
         4- Sửa tủ sách
         5- Tìm sách
         6- Hiển thị sách
         7- Thêm sách
         E- Thoát`);
  if (type == "1") {
    action.addBookcase();
  } else if (type == "2") {
    action.showBookcase();
  } else if (type == "3") {
    action.deleteBookcase();
  } else if (type == "4") {
    action.updateBookcase();
  } else if (type == "5") {
    action.findBook();
  } else if (type == "6") {
    action.showBook();
  } else if (type == "7") {
    action.addBook();
  } else if (type == "8") {
    break;
  }
}
