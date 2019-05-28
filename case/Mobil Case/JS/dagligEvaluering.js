var currentDate = new Date();
var questions = ['Humør', 'Mentalt Tilstede', 'Kvalitet på Arbeid'];
var evaluations = [
    {
        date: '2019-05-08', text: 'køfdsjkjh', stars: [{ humør: 3 }, { mentaltTilstede: 2 }, { kvalitetpåArbeid: 4 }]
    },
    {
        date: '2019-05-09', text: 'kdhdgf', stars: [{ humør: 2 }, { mentaltTilstede: 5 }, { kvalitetpåArbeid: 6 }]
    },
];




function dagligEvaluering() {
    let evaluation = getEvaluationForCurrentDay();
    let answers = evaluation;

    let html = `<div style="user-select: none">
                            <button onclick="changeDate(-1)">◀</button>
                            Dato: ${currentDate.toLocaleDateString()}
                            <button onclick="changeDate(1)">▶</button>
                            </div>
                                `;


    for (let questionIndex = 0; questionIndex < questions.length; questionIndex++) {
        let question = questions[questionIndex];
        let starCount = answers.stars[questionIndex];

        html += `<div>
                                            <h3>${question}</h3>
                                         </div>
                                         <div>`;
        for (let starNo = 1; starNo < 10; starNo++) {
            let isOn = starNo <= starCount;
            let cssClass = isOn ? 'starOn star' : 'star';
            let star = isOn ? '★' : '☆';
            html += `<span onclick="selectStars(${questionIndex},${starNo})" class="${cssClass}">${star
                }</span>`;
        }
    }
    let text = answers.text;
    html += `   <div><input oninput="editText(this.value)" class="button" type="text" style="background-color:white;color:black; width: 94%; height: 32px;" value="${text
        }"/></div>

                                           </div>
<button class="button" onclick="showMainScreen()">Tilbake</button>`;


    mainextra.innerHTML = html;
}

function changeDate(change) {
    currentDate = new Date(currentDate.getTime() + change * 1000 * 60 * 60 * 24);
    dagligEvaluering();
}

function editText(text) {
    let evaluation = getEvaluationForCurrentDay();
    evaluation.text = text;
}

function selectStars(questionIndex, starCount) {
    let evaluation = getEvaluationForCurrentDay();
    if (questionIndex == 0) { evaluation.stars[questionIndex] = starCount; }
    if (questionIndex == 1) { evaluation.stars[questionIndex] = starCount; }
    if (questionIndex == 2) { evaluation.stars[questionIndex] = starCount; }
    dagligEvaluering();
}

function getEvaluationForCurrentDay() {
    let date = currentDate.toISOString().substr(0, 10);
    let evaluation = null;
    for (let e of evaluations) {
        if (e.date == date) evaluation = e;
    }
    if (evaluation == null) {
        evaluation = {
            date: date, text: '', stars: [{ humør: 1 }, { mentaltTilstede: 1 }, { kvalitetpåArbeid: 1 }]
        };
        evaluations.push(evaluation);
    }
    return evaluation;
}


