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
                    <button onclick="">(^_^)</button>
                    <button onclick="">(@_@)</button>
                    <button onclick="">&#9785;</button></br>
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
            </table>
        `;
}