function visHvordanTaVarePåAndre() {
    document.getElementById('innhold').innerHTML =
        `
    <table>
        <tbody>
            <tr>
                <u class="underline"><h1 class="hvaermobbing" onclick="()">Hvordan ta vare på andre?</h1></u>
            </tr>
            <tr>
            <div class="larsErBedreEnMartinPåHeartstone">
                <li class="fiksme"> Gjør mot andre slik du vil de skal gjøre mot deg. </li>
                <li class="fiksme"> Inviter nye personer til å bli med på ting. </li>
                <li class="fiksme"> Tenk på andre sine følelser før du sier noe slemt. </li>
                <li class="fiksme"> Si "Hei" når du møter noen. </li>
                <li class="fiksme"> Vær snill med hverandre. </li><br>
            </div>
                <div class="iframe"><iframe width="560" height="315" src="https://www.youtube.com/embed/BpDwzOvvgsE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            </tr>
            <div class="botCorner"><button class="returnButton" onclick="visMeny()">&#8617;</button></div>
        <tbody>
    </table>
    `;
}