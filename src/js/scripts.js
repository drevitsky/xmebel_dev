$(document).ready(function(){
	var isotope = $('.images, masonry').isotope({
				itemSelector: '.image, masonry-item',
				percentPosition: true,
				masonry: {
					columnWidth: '.col-lg-4',
					
				}
			});
	var isotope2 = $('.masonry').isotope({
				itemSelector: '.masonry-item',
				percentPosition: true,
				masonry: {
					columnWidth: '.col-lg-6',
					
				}
			});	
	$('.switchers a').on('click', function(e) {
				$('.switchers li').removeClass('active');
				$(this).parent().addClass('active');
				e.preventDefault();
				var filter = $(this).attr('data-filter');
				filter = filter == '*' ? filter : '.' + filter;
				isotope.isotope({ filter : filter});
			});
	// Fancybox
	$('.image-box').fancybox();
	//  lazy-load 
	// $('.lazy-load').addClass('not-load');
	 var test = $('.lazy-load.not-load').slice(0, 10).removeClass('not-load');
	 isotope.isotope();
	
	 $('#btn-load').on('click',function(e){
	 	e.preventDefault();
	 	$('.lazy-load.not-load').slice(0, 4).removeClass('not-load');
	 	isotope.isotope()
	 })
	 
	
	 $('#btn-load-blog').on('click',function(e){
	 	e.preventDefault();
	 	$('.lazy-load-blog.not-load').slice(0, 4).removeClass('not-load');
	 	isotope2.isotope()
	 })

	 // search
	 $("#fa-search").click(function(){

    $(".wrap, .input").toggleClass("active");
    $("input[type='text']").focus();
  	});
	 
})
// map
	 var map, marker, infoWindow,
			center = {
					lat: 47.125244, 
					lng: 37.515187
				};
			function initMap() {
				map = new google.maps.Map(document.getElementById('map'), {
				center: center,
				zoom: 16,
				styles:[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]
			})

			marker = new google.maps.Marker({
				position: center,
				map : map,
				title: 'Магазин МебельОпт',
				icon: 'favicon.png'
			})

			infoWindow = new google.maps.InfoWindow({
				content: '<h3 slyle="color:#000">Ждём вас!</h3><br><span>Грушевського, 31</span><br><br><span>Мариуполь, Украина</span>'
			});

			marker.addListener('click', function() {
				infoWindow.open(map, marker);
			})
		}
	 // ============