
var ilhavo = new google.maps.LatLng(33.981233, -117.769371);
var museum = new google.maps.LatLng(33.672420, -117.848149);

function initialize() {
   var mapOptions = {
      center: ilhavo,
      zoom: 9,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false
   };


   var map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);

   // variable to define the content of Info Window
   var content = '<div id="iw-container">' +
                  '<div class="iw-title">Irvine</div>' +
                  '<div class="iw-content">Michelson And Jamboree<br/>2967 Michelson Drive<br/>Manhattan Beach, CA</div>' +
                  '</div>';

   // creates the new Info Window with reference to the variable infowindow and establishes the content
   var infowindow = new google.maps.InfoWindow({
      content: content
   });

   // variable to define the option of the marker
   var marker = new google.maps.Marker({
      position: museum, // variable with the coordinates Lat and Lng
      map: map,
      title:"Irvine"
   });

   // procedure to show the Info Window using a click on the marker
   google.maps.event.addListener(marker, 'mouseover', function() {
      infowindow.open(map,marker); //map and marker are the variables defined previously
   });

  // event to close the infoWindow with a click on the map
  google.maps.event.addListener(marker, 'mouseout', function() {
    infowindow.close();
  });

    google.maps.event.addListener(infowindow, 'domready', function() {
      var iwOuter = $('.gm-style-iw');
      var iwBackground = iwOuter.prev();

    // Removes background shadow DIV
    iwBackground.children(':nth-child(2)').css({'display' : 'none'});

    // Removes white background DIV
    iwBackground.children(':nth-child(4)').css({'display' : 'none'});

    // Moves the infowindow 115px to the right.
    iwOuter.parent().parent().css({left: '-25px'});

    // Moves the shadow of the arrow 76px to the left margin.
    iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 110px !important;'});

    // Moves the arrow 76px to the left margin.
    iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: 110px !important;'});

    // Changes the desired tail shadow color.
    iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'rgba(178, 178, 178, 0.6); 0px 1px 6px', 'z-index' : '1'});

    // Reference to the div that groups the close button elements.
    var iwCloseBtn = iwOuter.next();

    // Apply the desired effect to the close button
    iwCloseBtn.css({opacity: '0', right: '38px', top: '3px', border: '7px solid #48b5e9', 'border-radius': '13px', 'box-shadow': '0 0 5px #3990B9'});

        // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
    if($('.iw-content').height() < 140){
      $('.iw-bottom-gradient').css({display: 'none'});
    }

    // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
    iwCloseBtn.mouseout(function(){
      $(this).css({opacity: '1'});
    });

    });
}
google.maps.event.addDomListener(window, 'load', initialize);


