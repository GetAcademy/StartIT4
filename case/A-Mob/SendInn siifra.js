function visSendInn() {
    document.getElementById('innhold').innerHTML =
        `
    <table>
        <tbody>
            <tr>
                <h1> Fint at du valgte og ta kontakt!</h1>
            </tr>
            <tr>
                <td onclick="visMeny()">Meny</td>
            </tr>
        </tbody>
    </table>
    `;
}