// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 56.95799629411516, lng: 24.116229293343867 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
}
  
window.initMap = initMap;