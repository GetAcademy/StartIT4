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
                <div id="exodia">
                    <div id="quiz">
                        <label>
                            <input type="radio" name="question0" value="a">&#128516
                        </label>
                        <label>
                            <input type="radio" name="question0" value="a">&#128528
                        </label>
                        <label>
                            <input type="radio" name="question0" value="a">&#128543
                        </label>
                    </div>
                    <button id="submit">Get Results</button>
                    <div id="results"></div>
                </div>
                <input type="text">
            </table>
        `;
}