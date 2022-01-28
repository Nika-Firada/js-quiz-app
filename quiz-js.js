const quizData = [
    {
        question: 'which country is largest?',
        a: 'Russia',
        b: 'Brazil',
        c: 'USA',
        d: 'China',
        correct: 'a'
    },{
        question:'Which country have biggest population?',
        a: 'Japan',
        b: 'India',
        c: 'USA',
        d: 'China',
        correct: 'd'
    },{
        question:'Which is the largest river?',
        a: 'amazon',
        b: 'dunai',
        c: 'nilos',
        d: 'volga',
        correct: 'c'
    },{
        question:'Who was first emperor of Rome?',
        a: 'Caesar',
        b: 'Pompeus',
        c: 'Octavian Augustus',
        d: 'Neron',
        correct: 'c'
    },{
        question:'which year started WW2?',
        a: '1940',
        b: '1939',
        c: '1941',
        d: '1914',
        correct: 'b'
    },{
        question:'What is a biggest animal on earth',
        a: 'elephant',
        b: 'giraffe',
        c: 'crocodile',
        d: 'whale',
        correct: 'd'
    }
];
const quizz = document.getElementById('quizz');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const questionEl = document.getElementById('question');
const submitBtn = document.getElementById('submit');
const answerEls = document.querySelectorAll('.answer');

let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz(){
    deselecteAnswers(); 
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
//////
function getSelected(){
    let answer = undefined;
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}
///////
submitBtn.addEventListener('click', () =>{
    const answer = getSelected();
    if(answer === quizData[currentQuiz].correct){
        score++
    }
    if(answer){
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quizz.innerHTML = `<h2>You get ${score}/${quizData.length} score <button onclick="location.reload()">Reload</button></h2>`
        }
    }
});
///
function deselecteAnswers(){
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}