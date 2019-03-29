function visMeny() {
    document.getElementById('innhold').innerHTML =
        `<h1 class="to">Meny</h1>
       
            <div>
               
                    <button class="fixed1" onclick="visSiIfraOmMobbing()">Si ifra om mobbing</button>
               
             
                    <button class="fixed1" onclick="visHvaErMobbing()">Hva er mobbing</button>
               
                    <button class="fixed1" onclick="visHvordanTaVarePåAndre();nåErMenyBorte();">Hvordan ta vare på andre</button>
               
                    <button class="fixed1" onclick="visSelvevaluering()">Selvevaluering</button>
                
            </div>
            <div>
               
                    <button class="fixed1 fixed2">Logg ut</button>
               
            </div>
        </tr>
    </tbody>
    </table>`
}
