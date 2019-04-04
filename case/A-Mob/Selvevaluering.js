var detSummer = document.getElementById('godJul');
var infoDiv = document.getElementById('info');
var questions = [''];
var answers = [];
function visSelvevaluering() {
document.getElementById('innhold').innerHTML =
        `
            <table>
                <tr>
                    <h1>Evaluering</h1>
                </tr>
                <tr>
                    <input id="godJul" type="text" />
                    <button onclick="heisan()">Send</button>
                    <div id="question"></div>
                </tr>
            </table>
        `;
}
// View
var questionDiv = document.getElementById('question');
showNextQuestion();
function showNextQuestion() {
    let question = getNextQuestion();
    if (question == null) {
        let html = '';
        for (let answer of answers) {
            html += `${answer.questionText} <b>${answer.howAreYouText} <b>${answer.answerText}</b><br/>`;
        }
        questionDiv.innerHTML = html;

    } else {
        questionDiv.innerHTML = `
    <h3>${question}</h3>
    <form id="mainForm" name="mainForm">
        <input id="happyFace" type="radio" name="howAreYou" value="&#128516"/>&#128516
        <input id="netrualFace" type="radio" name="howAreYou" value="&#128528"/>&#128528
        <input id="sadFace" type="radio" name="howAreYou" value="&#128543"/>&#128543</br>
    </form>
    <input id="answer" type="text"/>
    <button id="sendIn"  onclick="answer('${question}')">Svar</button>
    `;
    }

}

function getNextQuestion() {
    for (let question of questions) {
        let hasQuestionBeenAnswered = false;
        for (let answer of answers) {
            if (answer.questionText == question) {
                hasQuestionBeenAnswered = true;
            }
        }
        if (!hasQuestionBeenAnswered) {
            return question;
        }
    }
    return null;
}
function heisan() {
    let questionInput = document.getElementById("godJul");
    let questionA = questionInput.value;
    if (questions == '') {
        questions.splice(0, 1, questionA);
    } else {
    questions.push(questionA);
    }
    showNextQuestion();
}
document.mainForm.onclick = function(){
    var radVal = document.mainForm.value;
}

 //Controller
function answer(question) {
    let answerInput = document.getElementById('answer');
    let answer = answerInput.value;
    let button = Array.from(document.getElementById('mainForm').children);
    let howAreYou = button.find(function(element){
        return element.checked;
    }).value;
    console.log(howAreYou)
    let questionAndAnswer = {
        questionText: question,
        howAreYouText: howAreYou,
        answerText: answer
    };
    answers.push(questionAndAnswer);
    showNextQuestion();
}