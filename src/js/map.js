
var map, marker, infoWindow,
			center = {
					lat: 47.1013653,
					lng: 37.5483022
				};
			function initMap() {
				map = new google.maps.Map(document.getElementById('map'), {
				center: center,
				zoom: 16
			})

			marker = new google.maps.Marker({
				position: center,
				map : map,
				title: 'Hello world!',
				icon: 'favicon.png'
			})

			infoWindow = new google.maps.InfoWindow({
				content: '<h3>info Window of Beetroot</h3>'
			});

			marker.addListener('click', function() {
				infoWindow.open(map, marker);
			})
		}