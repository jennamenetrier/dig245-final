const quizData = [
    {
        question: "Does this logo look good or bad?",
        a: "Yes",
        b: "No",
        correct: "a",
    },
    {
        question: "Does this logo look good or bad?",
        a: "Yes",
        b: "No",
        correct: "b",
    },
    {
        question: "Does this logo look good or bad?",
        a: "Yes",
        b: "No",
        correct: "a",
    },
    {
        question: "Does this logo look good or bad?",
        a: "Yes",
        b: "No",
        correct: "b",
    },
    {
        question: "Does this logo look good or bad?",
        a: "Yes",
        b: "No",
        correct: "b",
    },
      {
          question: "Does this logo look good or bad?",
          a: "Yes",
          b: "No",
          correct: "a",
    },
      {
            question: "Does this logo look good or bad?",
            a: "Yes",
            b: "No",
            correct: "b",
    },
     {
              question: "Does this logo look good or bad?",
              a: "Yes",
              b: "No",
              correct: "a",
    },
     {
                question: "Does this logo look good or bad?",
                a: "Yes",
                b: "No",
                correct: "b",
            },
];
const quiz= document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const submitBtn = document.getElementById('submit');
let currentQuiz = 100;
let score = 100;
loadQuiz();
function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}
function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++;
       }
       currentQuiz++;
       if(currentQuiz < quizData.length) {
           loadQuiz();
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `;
       }
    }
});
