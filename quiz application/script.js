const questions = [
    {
        question: "Who is the regional manager at Dunder Mifflin Scranton?",
        options: ["Michael Scott", "Pam Beasly", "Dwight Schrute"],
        answer: "Michael Scott"
    },
    {
        question: "In which department does Oscar work in?",
        options: ["Sales", "Accounting", "HR"],
        answer: "Accounting"
    },
    {
        question: "How many cats does Angela own?",
        options: ["Five", "Three", "Noone knows for sure"],
        answer: "Noone knows for sure"
    },
    {
        question: "What is the name of the current Dunder Mifflin CFO?",
        options: ["Pam Beasly", "David Wallace", "Kelly Kapoure"],
        answer: "David Wallace"
    },
    {
        question: "What is Michael Scott's favourite line?",
        options: ["Screw you!", "Did I Stutter?", "That's what she said!"],
        answer: "That's what she said!"
    }

]

document.addEventListener('DOMContentLoaded', () => {
    load_question();
});

let question_number = 0;
let correct = 0
function load_question () {
    if (question_number < questions.length){
        document.querySelector('#question').innerHTML = questions[question_number].question;

        const options =  document.querySelector('#options')
        options.innerHTML = ""
        for (const option of questions[question_number].options){
        options.innerHTML += `<button class="option">${option}</button>`;
        };
        
        document.querySelectorAll('.option').forEach(option => {
            option.onclick = () => {
                span = document.querySelector('#correct');
                if (option.textContent == questions[question_number].answer){
                    correct++;
                    question_number++;
                    span.innerHTML = `${correct} of ${question_number}` 
                } else {
                    question_number++;
                    span.innerHTML = `${correct} of ${question_number}` 
                }
                
                load_question();     
            }

        
        });
    } else {
        document.querySelector('#question').innerHTML = "Quiz Complete!!!";
        document.querySelector('#options').innerHTML = ""
        span.innerHTML = `${correct} of ${question_number}`
        document.querySelector('a').innerHTML = "Retake Quiz"
    }
}