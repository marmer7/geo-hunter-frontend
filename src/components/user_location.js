class UserLocation {
  constructor() {}

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(savePosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  savePosition(position) {
    x.innerHTML =
      "Latitude: " +
      position.coords.latitude +
      "<br>Longitude: " +
      position.coords.longitude;
  }
}
