////////////////////////////////////////////////////////
///////////////// google map start ///////////////////////////
////////////////////////////////////////////////////////	


google.maps.event.addDomListener(window, 'load', init);

var map;

function init() {
    var mapOptions = {
        center: new google.maps.LatLng(-43.57824, 172.376982),
        zoom: 10,
        zoomControl: false,
		disableDefaultUI: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT,
        },
        disableDoubleClickZoom: false,
        mapTypeControl: false,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        },
        scaleControl: true,
        scrollwheel: false,
        streetViewControl: false,
        draggable : true,
        overviewMapControl: false,
    }

    var mapElement = document.getElementById('contact_map');
    var map = new google.maps.Map(mapElement, mapOptions);
     
	var i= 0;
	 
	 
      var  marker = new google.maps.Marker({
            icon: 'assets/images/map-pin.png', 
            position: new google.maps.LatLng(-43.57824, 172.376982),
            map: map
        });
     
    
	// Create an InfoWindow for the marker
		var contentString = "<p class='map-info'><i class='fa fa-building'></i> 16 Stoneleigh drive, Rolleston 7614, NZ</p>";	// HTML text to display in the InfoWindow
		var infowindow = new google.maps.InfoWindow( { content: contentString } );
		
		// Set event to display the InfoWindow anchored to the marker when the marker is clicked.
		google.maps.event.addListener( marker, 'click', function() { infowindow.open( map, marker ); });
	
}