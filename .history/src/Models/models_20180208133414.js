export default class Answer{
    constructor(value, isCorrect){
        this.value = value;
        this.isCorrect = isCorrect;
    }
}

export default class Question{
    constructor(inCorrect, correct){
        this.answers = inCorrect.map((item) =>{
            return new Answer(item, false);
        });
        this.answers.push(new Answer(correct , true));
        this.userAnswer  = undefined;
    }
}

