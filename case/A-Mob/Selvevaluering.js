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
                    <div id="c" onclick="doClick(this)" style="background-color: lightblue">C</div>
                    <div id="d" onclick="doClick(this)" style="background-color: rebeccapurple">D</div>
                </div>
                <div>
                    <div onclick="">&#128516;</div>
                    <div onclick="">&#128528;</div>
                    <div onclick="">&#128543;</div></br>
                    bra. ok. dårlig
                </div>
                <div>
                    
                <div>
                    <input type="text">
                </div>
                <div>
                    <button onclick="visSelvevaluering()">Neste</button>
                    <button onlick="visMeny()">Lever</button> 
                </div>
                <div id="info" onclick="doClick(this)">Tykk på en firkant!</div>
            </table>
        `;
}