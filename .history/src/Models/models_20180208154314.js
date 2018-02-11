class Answer {
    constructor(value, isCorrect){
        this.value = value;
        this.isCorrect = isCorrect;
    }
}

class Question {
    constructor(question, inCorrect, correct, display){
        this.question = question;
        this.answers = inCorrect.map((item) =>{
            return new Answer(item, false);
        });
        this.answers.push(new Answer(correct , true));
        this.userAnswer  = undefined;
        this.display = undefined;
    }
}

export default Question