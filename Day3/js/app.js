import { AddNewTest } from "./test.js";
import { AddNewQuest } from "./question.js";
let arr1 = [];
let arr2 = [];
let actionTest = new AddNewTest(arr1);
let actionQuest = new AddNewQuest(arr2);

while (true) {
  let request = prompt(`Nhập yêu cầu của bạn:
        (1- Thêm bài kiểm tra
         2- Hiển thị bài kiểm tra
         3- Thêm câu hỏi
         4- Xóa câu hỏi
         5- Sửa câu hỏi
         6- Hiện thị câu hỏi
         E- Thoát)`);
  if (request == "1") {
    actionTest.addTest();
  } else if (request == "2") {
    actionTest.showTest();
  } else if (request == "3") {
    actionQuest.addQuest();
  } else if (request == "4") {
    actionQuest.deleteQ();
  } else if (request == "5") {
    actionQuest.editQ();
  } else if (request == "6") {
    actionQuest.showQuest();
  } else if (request == "E") break;
  else {
    alert("Bạn nhập sai cú pháp");
  }
}
