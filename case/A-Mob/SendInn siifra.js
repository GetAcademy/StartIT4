function visSendInn() {
    document.getElementById('innhold').innerHTML =
        `
    <table>
        <tbody>
            <tr>
                <h1> Fint at du valgte og ta kontakt!</h1>
                <p> Takk for at du valgte å ta kontakt vi skal gjøre vårt beste for at dette ikke skjer igjen! </p>
                <p> Tusen takk </p>
            </tr>
            <tr>
                <button class="knapp1" onclick="visMeny()">Meny</button>
            </tr>
        </tbody>
    </table>
    `;
}