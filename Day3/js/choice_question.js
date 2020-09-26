import question from './question.js';

class choice_question extends question {
    constructor(id, content, correctAnswer) {
        super(id, content, correctAnswer);
    }
}
export default choice_question;