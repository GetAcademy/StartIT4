function visSendInn() {
    document.getElementById('innhold').innerHTML =
        `
    <table>
        <tbody>
            <tr>
                <h1> Fint at du valgte og ta kontakt!</h1>
            </tr>
            <tr>
                <div onclick="visMeny()">Meny</div>
            </tr>
        </tbody>
    </table>
    `;
}