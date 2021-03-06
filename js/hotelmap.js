// Docs: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
var makeMapMarker = function (map, coord, labelText, labelHorizOffset) {
    return new google.maps.Marker({
        position: new google.maps.LatLng(coord),
        map: map,
        clickable: false,
        icon: {
            url: 'img/pin.png',
            labelOrigin: new google.maps.Point(labelHorizOffset, 30)
        },
        label: {
            text: labelText,
            fontSize: '14px',
            fontWeight: 'bold'
        }
    });
};

google.maps.event.addDomListener(window, 'load', init);
function init() {
    var mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng(37.988071, -78.494965), // Charlottesville
        clickableIcons: true,
        styles: [{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.business","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}]
    };

    var mapElement = document.getElementById('hotelmap');
    var map = new google.maps.Map(mapElement, mapOptions);
    var pinIcon = 'img/pin.png';

    // Wedding Venue
    var coordWinery = {lat: 37.939056, lng: -78.498702};
    var labelWinery = 'Trump Winery';
    var markerWinery = makeMapMarker(map, coordWinery, labelWinery, 65);

    // The Omni
    var coordOmni = {lat: 38.031385, lng: -78.483660};
    var labelOmni = 'The Omni Hotel Downtown';
    var markerOmni = makeMapMarker(map, coordOmni, labelOmni, -75);

    // The Hilton
    var coordHilton = {lat: 38.024591, lng: -78.438338};
    var labelHilton = 'The Hilton Garden Inn';
    var markerHilton = makeMapMarker(map, coordHilton, labelHilton, 90);

}
