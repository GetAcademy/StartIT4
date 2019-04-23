function visHvaErMobbing() {
    document.getElementById('innhold').innerHTML =
        `
    
    <table>
        <tbody>
            <tr>
                <h1 class="hvaermobbing" onclick="visHvaErMobbing()">Hva er Mobbing?</h1>
            </tr>
            <tr>
                <u class="underline"><h5 class="hvaermobbing"> Kjennetegn p&#229; mobbing. </h5></u>
            </tr>
            <tr>
                <o class="funkpls">
                    <li class="waddup">Det å bli dyttet rundt av andre.</li>
                    <li class="waddup">Bli slått av andre.</li>
                    <li class="waddup">Det å bli baksnakket av andre/grupper.</li>
                    <li class="waddup">Bli spredt rykter om.</li>
                    <li class="waddup">Bli presset til å gjøre ting for andre som du ikke vil.</li>
                    <li class="waddup">Negativ eller ondsinnet atferd mot andre.</li>
                    <li class="waddup">Når noe negativt foregår over lengre tid.</li>
                    <li class="waddup">Noen ødelegger tingene dine eller stjeler dem.</li>
                </ol>
            </tr>
            
                <u class="underline"><h5 class="hvaermobbing">Hvorfor mobber noen?</h5></u>
          
            <tr>
                 <div class="funkpls2">
                    <li class="waddup">De kan tro de blir kule/tøffe av det.</li>
                    <li class="waddup">Det kan hende vedkommende er usikker på seg selv,<br> og derfor forsøker å få andre til å føle seg dårlig.</li>
                    <li class="waddup">Det kan være fordi de blir mobbet selv.</li>
                    <li class="waddup">Det kan hende de mobber andre fordi at de ikke har det så bra hjemme.</li>
                 </div>
                <div class="botCorner"><button class="returnButton" onclick="visMeny()">&#8617;</button></div>
        </tbody>
    </table>
    `;
}
