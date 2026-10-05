function initMap() {
  const mapElement = document.getElementById("map");
  if (!mapElement) return; // Exit cleanly if on pages 1, 2, or 3

  // Campus coordinates (Illinois Tech)
  const coords = { lat: 41.8349, lng: -87.6270 };

  // Base Map initialization
  const map = new google.maps.Map(mapElement, {
    zoom: 15,
    center: coords
  });
}