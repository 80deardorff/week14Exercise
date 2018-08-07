function myMap() {
    var mapProp= {
    center: new google.maps.LatLng(40.922389,-86.027797),
    zoom: 5, };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
