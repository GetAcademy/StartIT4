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
                <tr>
                    <div> 
                        <div><button>:)</button><button>:/</button><button>:(</button></br >
                        bra ok dårlig</div>
                    </div></br>
                </tr>
                <tr>
                    <div>har du lært noe av denne uken?</div>
                </tr>
                <tr>
                    <div>
                        <button>:)</button><button>:/</button><button>:(</button></br >
                        bra ok dårlig
                    </div></br>
                </tr>
                <tr>
                    <div>føler du deg trygg på skolen?</div>
                </tr>
                <tr>
                    <div>
                        <button>:)</button><button>:/</button><button>:(</button></br >
                        bra ok dårlig
                    </div></br>
                </tr>
                <tr>
                    <p> skriv gjerne ned en kommentar om uken.</p>
                    <input type="text">
                </tr>
            </table>
        `;
}