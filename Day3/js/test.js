class Test {
  id;
  test_name;
  time;
  questions;
  create_day;
  constructor(id, test_name, time, questions, create_day) {
    this.id = id;
    this.test_name = test_name;
    this.time = time;
    this.questions = questions;
    this.create_day = create_day;
  }
}
export default Test;
