var goalOBJ;
function newGoal() {
   
    mainextra.innerHTML = `
                <p class="button">Hva vil du oppnå?</p>
                <textarea id="txt1" class="button" style="background-color:white;color:black"></textarea>
                <p class="button">Forkort det til en setning.</p>
                <textarea id="txt2" class="button" style="background-color:white;color:black"></textarea>
                <p class="button">Hvorfor vil du nå dette målet?</p>
                <textarea id="txt3" class="button" style="background-color:white;color:black"></textarea> <br />
                <br /><button onclick="nyNøkkelvane()" class="button">Neste</button>
                                  `}
