
  // Regular map
  function regular_map() {
      var var_location = new google.maps.LatLng(25.284975, 55.476772);
      var imagePath = 'http://m.schuepfen.ch/icons/helveticons/black/60/Pin-location.png'
      var var_mapoptions = {
          center: var_location,
          zoom: 16.3
      };

      var var_map = new google.maps.Map(document.getElementById("map-container"),
          var_mapoptions);

      var var_marker = new google.maps.Marker({
          position: var_location,
          map: var_map,
          icon: imagePath,
          title: "My Device"
      });
  }

  // Initialize maps
  google.maps.event.addDomListener(window, 'load', regular_map);

                            