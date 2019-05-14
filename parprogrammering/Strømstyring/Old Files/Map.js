/*-------------------------------------------------------------------------- 
|    HOW TO ADD MORE MARKERS                                                              |
|                                                                                         |
|     1. DECLARE THE VARIABLE OF THE LOCATION. DECLARE IT LIKE THIS!                      |
|        var <location name> = {lat: <LATITUDE>, lng: <LONGITUDE>};                       |
|                                                                                         |
|     2. DECLARE THE MARKER LIKE THIS!                                                    |
|        var map = new google.maps.Marker({position: <variable name>, map: map});         |
-------------------------------------------------------------------------------------------*/





// Initialize and add the map
function initMap() {
 // LOCATIONS DECLARED HERE!!
  var larvik = {lat: 59.05328, lng: 10.03517};
  var BergeskogenBarnehage = {lat: 59.033773, lng: 10.078426};
  var Solstad = {lat: 59.010082, lng: 10.023670};
  var ValbyBarnehage = {lat: 59.044160, lng: 10.091385};
  var Rødbøl = {lat: 59.103482, lng: 10.113474};
// THE MAP CENTERS HERE
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 14, center: larvik});
 // THIS IS WHERE YOU DECLARE THE MARKERS. 
  var marker = new google.maps.Marker({position: Solstad, map: map});
  var marker = new google.maps.Marker({position: BergeskogenBarnehage, map: map});
  var marker = new google.maps.Marker({position: ValbyBarnehage, map: map});
  var marker = new google.maps.Marker({position: Rødbøl, map: map});
  var marker = new google.maps.Marker({position: larvik, map: map});
}
    /*Load the API from the specified URL
    * The async attribute allows the browser to render the page while the API loads
    * The key parameter will contain your own API key (which is not needed for this tutorial)
    * The callback parameter executes the initMap() function
    */
   document.getElementById('main').innerHTML = initMap();
    