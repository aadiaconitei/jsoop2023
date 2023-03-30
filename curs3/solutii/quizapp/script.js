// Question Sınıfı
class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer.toLowerCase();
    }
    
    checkAnswer(answer) {
        if(this.answer === answer){
            return true;
        } 
        else{
            return false;
        }
        
    }
}

//Quiz 
class Quiz {
    constructor(questions) {
        this.questions = questions;
        this.score = 0; //
        this.questionIndex = 0; // 
    }
    
    getQuestion() {
        return this.questions[this.questionIndex]; 
    }
   
    isFinish() {
        return this.questions.length === this.questionIndex; 
    }
    guess(answer) {
        let question = this.getQuestion(); //
        answer = answer.toLowerCase();
        console.log(answer);
        if (question.checkAnswer(answer)) { // 
            this.score = this.score + 10; //  
        }

        this.questionIndex++; //
    }
}

// 
let q1 = new Question("What is the best programing?", ["C#","JavaScript","Python","C#"],"JavaScript");
let q2 = new Question("What is the most popular language?", ["C#","Visual Basic","NodeJs","JavaScript"], "JavaScript");
let q3 = new Question("What is the most popular language?", ["C#","Visual Basic","NodeJs","JavaScript"], "JavaScript");

let questions = [q1,q2,q3] // 
let footer =  document.getElementById('progress')



// Start Quiz
let quiz = new Quiz(questions);

loadQuestion();

function loadQuestion(){
    if(quiz.isFinish()){
        showScore(); 

    }else{

        let question = quiz.getQuestion() 
        let choices = question.choices; 
      
        document.getElementById('question').textContent = question.text; 

        for(let i=0;i<choices.length;i++){ 
             document.querySelector('#choice'+i).innerHTML = choices[i]

            guess('btn'+i,choices[i]);

        }
        showProgress(); 
    }
}

function guess(id,guess){ 

    let btn = document.getElementById(id);
    btn.onclick = function(){
        quiz.guess(guess);
        loadQuestion(); 
    }

}

function showScore(){
    let html = `<h2>Score:</h2><h4>${quiz.score} points.</h4>`
    document.querySelector('.card-body').innerHTML = html;
    footer.innerHTML="All questions answered."
}

function showProgress(){
    let totalQuestion = quiz.questions.length;
    let currentQuestion = quiz.questionIndex+1;
    footer.innerHTML = `Question ${currentQuestion} of ${totalQuestion} questions.`;      
}
