import Test from "./test.js";
class createTest {
  newTest = [];
  constructor(newTest) {
    this.newTest = newTest;
  }
  create() {
    let id = prompt("id bài kiểm tra = ?");
    let test_name = prompt("Tên bài kiểm tra = ?");
    let time = prompt("Thời gian = ?");
    let questions = prompt("Câu hỏi = ?");
    let createDay = prompt("Ngày tạo = ?");
    let test = new Test(id, test_name, time, questions, createDay);
    this.newTest.push(test);
  }
  showTest() {
    for (let i = 0; i < this.newTest.length; i++) console.log(this.newTest[i]);
  }
}

export default createTest;
