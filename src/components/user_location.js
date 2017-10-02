class UserLocation {
  constructor() {
    this.latitude = false;
    this.longitude = false;
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
  }

  distanceFromQuest() {
    if (this.latitude && this.longitude) {
      // Quest.addDistance()
    } else {
      this.getLocation();
    }
  }
}
