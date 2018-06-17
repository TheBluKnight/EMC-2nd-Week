
  // Regular map
  function regular_map() {
      var var_location = new google.maps.LatLng(25.284975, 55.476772);
      var Worker1 = new google.maps.LatLng(25.284742, 55.477771);
      var Anim1 = new google.maps.LatLng(25.284742, 55.477700);
      var Anim2 = new google.maps.LatLng(25.283906, 55.475819);
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
          title: "My Farm"
      });
      var var_marker = new google.maps.Marker({
        position: Worker1,
        map: var_map,
        title: "W2315"
    });
    var var_marker = new google.maps.Marker({
        position: Anim1,
        map: var_map,
        title: "A7411"
    });
    var var_marker = new google.maps.Marker({
        position: Anim2,
        map: var_map,
        title: "A0070"
    });
  }

  // Initialize maps
  google.maps.event.addDomListener(window, 'load', regular_map);

                            