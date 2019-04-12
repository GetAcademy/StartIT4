var detSummer = document.getElementById('godJul');
var infoDiv = document.getElementById('info');
var questions = [];
var answers = [];


function visSelvevaluering() {
    document.getElementById('innhold').innerHTML =
        `
                <table>
                    <tr>
                        <h1 class="Evaluering">Evaluering</h1>
                    </tr>
                    <tr>
                        <div id="question";"></div>
                    </tr>
                    <div class="botCorner"><button class="returnButton" onclick="visMeny()">&#8617;</button></div>
                </table>
            `;
    showNextQuestion();
}
// View

function showNextQuestion() {
    var questionDiv = document.getElementById('question');
    let question = getNextQuestion();
    if (questions.length > 0 && question == null) {
        let html = '';
        for (let answer of answers) {
            html += `${answer.questionText} <b>${answer.howAreYouText} <b><br/>${answer.answerText}<br/>`;
        }
        questionDiv.innerHTML = html;
    } else {
        console.log(questionDiv);
        questionDiv.innerHTML = `
            <h3>${question || ''}</h3>
            <div id="mainForm" name="mainForm">
                <div id="happy" class="faces" onclick="enableButton('&#128516', this);" type="radio">&#128516</div>
                <div id="netrual" class="faces" onclick="enableButton('&#128528', this);" type="radio">&#128528</div>
                <div id="sad" class="faces" onclick="enableButton('&#128543', this);" type="radio">&#128543</div></br>
            </div>
            <textarea class="chattingBox" id="answer" type="text"></textarea></br>
            <button class="evalueringSendInn" id="sendIn" disabled="true" onclick="answer('${question}')">Send inn</button>
     `;
    }

}
var happyOrSad;
var buttonClicked;

function enableButton(happyOrSadValue, smiley) {
    happyOrSad = happyOrSadValue;
    for (let i = 0; i < 3; i++) {
        document.getElementsByClassName("faces")[i].style.backgroundColor = "#5F6389";
        
    }
    smiley.style.backgroundColor = "#EC8B5E";
    var enable = document.getElementById("sendIn");
    enable.disabled = false;
    
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

//Controller
function answer(question) {
    let answerInput = document.getElementById('answer');
    let answer = answerInput.value;
    //let button = Array.from(document.getElementById('mainForm').children);
    // let howAreYou = button.find(function (element) {
    //     return element.checked;
    // }).value;
    console.log(happyOrSad);
    let questionAndAnswer = {
        questionText: question,
        howAreYouText: happyOrSad,
        answerText: answer
    };
    answers.push(questionAndAnswer);
    showNextQuestion();

}
