function initMap() {
  const mapElement = document.getElementById("map");
  if (!mapElement) return;

  const coords = { lat: 41.8349, lng: -87.6270 };

  const map = new google.maps.Map(mapElement, {
    zoom: 15,
    center: coords
  });

  const marker = new google.maps.Marker({
    position: coords,
    map: map,
    title: "Illinois Tech"
  });

  const infoWindow = new google.maps.InfoWindow({
    content: "<h3>Illinois Tech</h3><p>Chicago, IL</p>"
  });

  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });
}