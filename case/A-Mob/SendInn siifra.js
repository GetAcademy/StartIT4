function visSendInn() {
    document.getElementById('innhold').innerHTML =
        `
    <table>
        <tbody>
            <tr>
                <h1> Fint at du valgte og ta kontakt!</h1>
                <p> Takk for at du valgte og ta kontakt vi skal gjøre vordt beste får at dette ikke skjer igjen! </p>
                <p> Tusen takk </p>
            </tr>
            <tr>
                <div onclick="visMeny()">Meny</div>
            </tr>
        </tbody>
    </table>
    `;
}