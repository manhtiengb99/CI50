class Questions {
  id;
  content;
  correctAnswer;
  constructor(id, content, correctAnswer) {
    this.id = id;
    this.content = content;
    this.correctAnswer = correctAnswer;
  }
}
class MultipleChoice extends Questions {
  constructor(id, content, correctAnswer) {
    super(id, content, correctAnswer);
  }
}
class Essay extends Questions {
  constructor(id, content, correctAnswer) {
    super(id, content, correctAnswer);
  }
}
class AddNewQuest {
  newquest = [];
  constructor(newquest) {
    this.newquest = newquest;
  }
  addQuest() {
    let id = prompt("Nhập id mới");
    let content = prompt("Nhập nội dung câu hỏi mới");
    let correctAnswer = prompt("Nhập đáp án đúng");
    let newQuest = new Questions(id, content, correctAnswer);
    this.newquest.push(newQuest);
  }
  editQ() {
    let index = prompt("Nhập ID bạn muốn sửa");
    let edit = prompt("Nhập nội dung bạn muốn sửa");
    this.questions[index - 1] = edit;
  }
  deleteQ() {
    let index = prompt("Nhập ID bạn muốn xóa");
    this.questions.splice(index - 1, 1);
  }
  showQuest() {
    for (let i = 0; i < this.newquest.length; i++) {
      console.log(this.newquest[i]);
    }
  }
}
export { Questions, MultipleChoice, Essay, AddNewQuest };
