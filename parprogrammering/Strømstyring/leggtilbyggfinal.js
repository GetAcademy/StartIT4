function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

db.collection('Bygg').get()
    .then(function (data) {
        let alleBygg = [];
        data.forEach(function (doc) {
            let bygg = doc.data();
            //console.log(bygg);
            alleBygg.push(bygg);
        });
        doSomethingWithAlleBygg(alleBygg);

    })
    .catch(function (error) { console.error(error); })

function doSomethingWithAlleBygg(alleBygg) {
    for (let i = 0; i < alleBygg.length; i++) {
        let building = alleBygg[i];
        document.getElementById('myTable').innerHTML +=
            `<b>
      <tr onclick="showAllInfo(${i})">
      <td>${building.navn}</b></td>
      <td>${building.adresse}</td>
      <td>${building.by}</td>
      <td>${building.postnr}</td>
      <td>${building.kategori}</td>
      <td>${building.areal}</td>
      <td>${building.oppvarming}</td>

 `;
    }
}

function toggleList(){
    document.getElementById('main').style.display = 'none';
    document.getElementById('content').style.display = 'none';
    document.getElementById('map').style.display = 'none';
    document.getElementById('SearchTable').style.display="block";
}