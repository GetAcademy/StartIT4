function toggleMap() {
    var mapping = document.getElementById('map').innerHTML;
    document.getElementById('main') = mapping;
}


function initMap() {
    var larvik = { lat: 59.05328, lng: 10.03517 };
    var BergeskogenBarnehage = { lat: 59.033773, lng: 10.078426 };
    var Solstad = { lat: 59.010082, lng: 10.023670 };
    var ValbyBarnehage = { lat: 59.044160, lng: 10.091385 };
    var Rødbøl = { lat: 59.103482, lng: 10.113474 };
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 14, center: larvik });
    // THIS IS WHERE YOU DECLARE THE MARKERS. 
    var marker = new google.maps.Marker({ position: Solstad, map: map });
    var marker = new google.maps.Marker({ position: BergeskogenBarnehage, map: map });
    var marker = new google.maps.Marker({ position: ValbyBarnehage, map: map });
    var marker = new google.maps.Marker({ position: Rødbøl, map: map });
    var marker = new google.maps.Marker({ position: larvik, map: map });

}
function toggleMap() {
    document.getElementById('main').style.display ='none';
    document.getElementById('content').style.display = 'none';
    document.getElementById('map').style.display = 'block';
}


