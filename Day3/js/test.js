class Test {
  id;
  testName;
  time;
  questions;
  dateCreated;
  constructor(id, testName, time, questions, dateCreated) {
    this.id = id;
    this.testName = testName;
    this.time = time;
    this.questions = questions;
    this.dateCreated = dateCreated;
  }
}
class AddNewTest {
  newTest = [];
  constructor(newTest) {
    this.newTest = newTest;
  }
  addTest() {
    let id = prompt("Nhập ID mới");
    let testname = prompt("Nhập tên bài kiểm tra");
    let time = prompt("Nhập thời gian");
    let questions = prompt("Nhập câu hỏi mới");
    let datecreated = prompt("Nhập ngày tạo");
    let newtest = new Test(id, testname, time, questions, datecreated);
    this.newTest.push(newtest);
  }
  showTest() {
    for (let i = 0; i < this.newTest.length; i++) {
      console.log(this.newTest[i]);
    }
  }
}
export { Test, AddNewTest };
