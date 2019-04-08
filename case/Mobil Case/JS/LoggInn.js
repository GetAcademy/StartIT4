function LoggInn() {
    document.getElementById('mainextra').innerHTML = `<input type="text" placeholder="USERNAME" /><br/>
    <input type="password" placeholder="PASSWORD" />
    <div>
        <button onclick="showMainScreen()" class="button">LOGG INN</button>
        <button class="button">LAG NY BRUKER</button>
    </div>`;
}
