class UserLocation {
  constructor() {
    this.latitude = 0;
    this.longitude = 0;
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.savePosition.bind(this));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  savePosition(position) {
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    console.log(this.latitude);
    console.log(this.longitude);
  }

  distanceFromQuest() {}
}
