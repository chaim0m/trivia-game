export default class Answer{
    constructor(value, isCorrect){
        this.value = value;
        this.isCorrect = isCorrect;
    }
}

export default class Question{
    constructor(question, inCorrect, correct){
        this.question = question;
        this.answers = inCorrect.map((item) =>{
            return new Answer(item, false);
        });
        this.answers.push(new Answer(correct , true));
        this.userAnswer  = undefined;
    }
}

