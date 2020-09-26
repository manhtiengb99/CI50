import createTest from "./create_test.js";
import questionInTest from "./questionIntest.js";
let arrTest = [];
let arrQuestion = [];
let test = new createTest(arrTest);
let question = new questionInTest(arrQuestion);
while (true) {
  let input = prompt(`
        Nhập yêu cầu của bạn:
        (Thêm câu hỏi - 1/ Sửa câu hỏi - 2/ In ra các câu hỏi - 3/ Xóa câu hỏi - 4)
        (Thêm Test - 5 / In ra các test - 6)
        (Thoát - E)
    `);
  if (input == "1") question.addQuestions();
  else if (input == "2") question.editQuestions();
  else if (input == "3") question.showQuestion();
  else if (input == "4") question.deleteQuestions();
  else if (input == "5") test.create();
  else if (input == "6") test.showTest();
  else if (input == "Exit") break;
  else {
    alert("Bạn đã nhập sai");
  }
}
