import question from "./question.js";
class questionIntest {
  questions = [];
  constructor(questions) {
    this.questions = questions;
  }
  showQuestion() {
    for (let i = 0; i < this.questions.length; i++) {
      console.log(this.questions[i]);
    }
  }
  addQuestions() {
    let id = prompt("id = ?");
    let content = prompt("Nội dung câu hỏi: ");
    let correctAnswer = prompt("Câu trả lời đúng: ");
    let newQuest = new question(id, content, correctAnswer);
    this.questions.push(newQuest);
  }
  editQuestion() {
    let inputId = prompt("Nhập id câu hỏi muốn sửa:");
    let inputContent = prompt(
      "Nhập thuộc tính cần sửa(content, correctAnswer)"
    );
    let inputEdit = prompt("Nhập nội dung cần sửa:");
    this.questions[inputId - 1][inputContent] = inputEdit;
  }
  deleteQuestion() {
    let inputId = prompt("Nhập id câu hỏi muốn xóa:");
    this.questions.splice(inputId - 1, 1);
  }
}

export default questionIntest;
