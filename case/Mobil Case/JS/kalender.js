function kalender() {
    header.innerHTML = '<h1>Kalender</h1>';
    content.classList.length = 0;
    content.classList.add('myGrid');
    content.classList.add('kalender');
    content.innerHTML = `
    <div><center><img src="https://kalendersiden.net/preview.php?geometry=700x500&page=1&lang=no&month=1&year=2019&months=6&pages=1&format=landscape&color=grey&usercolor=%23f2bfd2&head=Kalendersiden.net&headplace=left&info%5B%5D=showyear&family=&userdata=&bgplace=back&aspect=cut&bgalpha=50&info%5B%5D=weeks&info%5B%5D=phases&info%5B%5D=holidays"></div>
    <div><center><button onclick="showMainScreen()">Tilbake</button></div>
    `;
}
