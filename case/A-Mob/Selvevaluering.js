function visSelvevaluering() {
document.getElementById('innhold').innerHTML =
        `
            <table>
                <tr>
                    <h1>Evaluering</h1>
                </tr>
                <tr>
                    <div>åssen har dagen vært?</div>
                </tr>
                <div>
                    <div id="a" onclick="doClick(this)" style="background-color: pink">A</div>
                    <div id="b" onclick="doClick(this)" style="background-color: lightgreen">B</div>       
                </div>
                <div id="exodia">
                    <div onclick="">&#128516;</div>
                    <div onclick="">&#128528;</div>
                    <div onclick="">&#128543;</div></br>
                    bra. ok. dårlig
                 </div>
                <div id="info" onclick="doClick(this)">Tykk på en firkant!</div>
                <input type="text">
                <div>
                    <button onclick="visSelvevaluering()">Neste</button>
                    <button onlick="visMeny()">Lever</button> 
                </div>
            </table>
        `;
}