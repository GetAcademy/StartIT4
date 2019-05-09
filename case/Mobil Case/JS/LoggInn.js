function LoggInn() {
    document.getElementById('mainextra').innerHTML = `<input type="text" placeholder="USERNAME" /><br/>
    <input type="password" placeholder="PASSWORD" />
    <div>
        <button onclick="Rolle()" class="button">LOGG INN</button>
        <button onclick="LagNyBruker()" class="button">LAG NY BRUKER</button>
    </div>`;
}
