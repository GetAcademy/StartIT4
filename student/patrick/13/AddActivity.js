function AddActivity()
{
    document.getElementById("MainContent").innerHTML =
        `
            <table>
                <tr>
                    <td>
                        Dato
                    </td>
                    <td>
                        <input id="DatoInput" type="Date"/>
                    </td>
                    
                </tr>
                <tr>
                    <td>
                        Beskrivelse
                    </td>
                    <td>
                        <input id="BeskrivelseInput" type="text"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        AntallPåmeldte
                    </td>
                    <td>
                        <input id="AntallPåmeldteInput" type="text"/>
                    </td>
                </tr>
            </table>
            <button>
                Registrer!
            </button>


        `;
}
function NewActivity()
{
    document.getElementById("MainContent").innerHTML =
        `
            <table id="ShowAllTable" class="MainList">
        <tr>
            <th>
                Dato
            </th>
            <th>
                Beskrivelse
            </th>
            <th>
                AntallPåmeldte
            </th>
        </tr >
        <tr>
            <td>
                01.12.2018
            </td>
            <td>
                KirkeBrenning
            </td>
            <td>
                12
            </td>
        </tr>
        <tr>
            <td>
                05.07.2019
            </td>
            <td>
                KKK-Utdrikningslag
            </td>
            <td>
                666
            </td>
        </tr>
        <tr>
            <td>
                22.10.2019
            </td>
            <td>
                Protestere alkohol avgiften utenfor stortinget
            </td>
            <td>
                13234
            </td>
        </tr>
        <tr>
            <tr>
                    <td>
                        ${document.getElementById(`DatoInput`).value}
                    </td>
                    <td>
                        ${document.getElementById(`BeskrivelseInput`).value}
                    </td>
                    <td>
                        ${document.getElementById(`AntallPåmeldteInput`).value}
                    </td>
                </tr>
        </tr>
            </table>




        `;
}