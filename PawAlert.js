// var list = [
// 	{location: ,
// 		time: ,
// 		img: "/img1.jpg"
// 	},
// 	{},
// 	]
      

      function initMap() {
        var uluru = {lat: 33.991833, lng: -118.287855};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: uluru
        });

        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });

        var marker1 = new google.maps.Marker({
          position: {lat: 33.984722, lng: -118.299199},
          map: map
        });

        var marker2 = new google.maps.Marker({
          position: {lat: 33.979789, lng: -118.292974},
          map: map
        });
      }