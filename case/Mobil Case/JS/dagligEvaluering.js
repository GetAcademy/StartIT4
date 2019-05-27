var questions = ['Humør', 'Mentalt Tilstede', 'Kvalitet på Arbeid']
var starCounts = [1, 2, 3];
var mainextra = document.getElementById('mainExtra');
var ratingEvaluering = [];
dagligEvaluering();
function dagligEvaluering() {
    html = '';
    html += ` <div style="align-self: center"></div>
        <input id="dagligEvalueringdato" type="date"></input>`
    for (starCount = 0; starCount < starCounts.length; starCount++) {
        var question = questions[starCount]
        var shinyStar = starCounts[starCount]
        html += `<div>${question}</div><div>`
        for (starNum = 1; starNum < 10; starNum++) {
            var isOn = starNum <= shinyStar
            var starColor = isOn ? '★' : '☆';
            html += `<span onclick="selectStar(${starCount}, ${starNum})">${starColor}</span>`
        }
        html += `</div >`;
    }

    html += `
        <div class="day">Hvordan har din dag vært?</div>

        <div><textarea id="dagligEvalueringtxt" class="regular" style="background-color:white;color:black"></textarea></div>
        <div><button onclick="showMyGoalsScreen()" class="button">Tilbake</button></div>
        `;
    mainextra.innerHTML = html;
}
function selectStar(starCount, starNum) {
    starCounts[starCount] = starNum;
    dagligEvaluering();
}


