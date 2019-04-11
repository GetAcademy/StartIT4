function visMeny() {
    document.getElementById('innhold').innerHTML =
        `<h1 class="to">Meny</h1>
       <table>
            <div><button class="fixed1" onclick="harBlittMobbet()">Si ifra om mobbing</button></div></br>
            <div><button class="fixed1" onclick="visHvaErMobbing()">Hva er mobbing</button></div></br>
            <div><button class="fixed1" onclick="visHvordanTaVarePåAndre();nåErMenyBorte();">Hvordan ta vare på andre</button></div></br>
            <div><button class="fixed1" onclick="visSelvevaluering()">Selvevaluering</button></div>
            <div>
               <button class="fixed1 fixed2">Logg ut</button>
            </div>
        </tr>
    </tbody>
    </table>`
}
