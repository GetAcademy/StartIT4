function dagligEvaluering() {
    
    mainextra.innerHTML = `
    <div style="align-self: center">
</div><input id="dagligEvalueringdato" type="date"></input>
        <div class="day">Hvordan har din dag vært?</div>
            <div class="button" id="rating">
                <span>Humør: </span>
                <i onclick="rate(0,1)" class="fas fa-star"></i>
                <i onclick="rate(0,2)" class="fas fa-star"></i>
                <i onclick="rate(0,3)" class="fas fa-star"></i>
                <i onclick="rate(0,4)" class="fas fa-star"></i>
                <i onclick="rate(0,5)" class="fas fa-star"></i>
                <i onclick="rate(0,6)" class="fas fa-star"></i>
                <i onclick="rate(0,7)" class="fas fa-star"></i>
                <i onclick="rate(0,8)" class="fas fa-star"></i>
                <i onclick="rate(0,9)" class="fas fa-star"></i>
                <span class="currentrating">7</span>
            </div>
            <div class="button" id="rating">
                <span>Mentalt tilstede: </span>
                <i onclick="rate(1,1)" class="fas fa-star"></i>
                <i onclick="rate(1,2)" class="fas fa-star"></i>
                <i onclick="rate(1,3)" class="fas fa-star"></i>
                <i onclick="rate(1,4)" class="fas fa-star"></i>
                <i onclick="rate(1,5)" class="fas fa-star"></i>
                <i onclick="rate(1,6)" class="fas fa-star"></i>
                <i onclick="rate(1,7)" class="fas fa-star"></i>
                <i onclick="rate(1,8)" class="fas fa-star"></i>
                <i onclick="rate(1,9)" class="fas fa-star"></i>
                <span class="currentrating">2</span>
            </div>
            <div class="button" id="rating">
                <span>Kvalitet på arbeid: </span>
                <i onclick="rate(2,1)" class="fas fa-star"></i>
                <i onclick="rate(2,2)" class="fas fa-star"></i>
                <i onclick="rate(2,3)" class="fas fa-star"></i>
                <i onclick="rate(2,4)" class="fas fa-star"></i>
                <i onclick="rate(2,5)" class="fas fa-star"></i>
                <i onclick="rate(2,6)" class="fas fa-star"></i>
                <i onclick="rate(2,7)" class="fas fa-star"></i>
                <i onclick="rate(2,8)" class="fas fa-star"></i>
                <i onclick="rate(2,9)" class="fas fa-star"></i>
                <span class="currentrating">5</span>
            </div>
    <div><textarea id="dagligEvalueringtxt" class="button" style="background-color:white;color:black"></textarea></div>
    <div><button onclick="showMyGoalsScreen()" class="button">Tilbake</button></div>
    `;
}
