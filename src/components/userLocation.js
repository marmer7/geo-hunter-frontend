class UserLocation {
  constructor() {
    this.latitude = false;
    this.longitude = false;
    this.getLocation();
    this.watchCurrentLocation();
    this.adapter = new userLocationsAdapter();
  }

  getLocation() {
    if (navigator.geolocation && !cookieUser) {
      navigator.geolocation.getCurrentPosition(this.savePosition.bind(this));
    }
  }

  error(err) {
    console.warn("ERROR(" + err.code + "): " + err.message);
  }

  savePosition(position) {
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    // fetch post request to database storing user location
    this.adapter.postLocation(1, this.latitude, this.longitude);
    userCoordinates = [this.latitude, this.longitude];
    console.log(userCoordinates);
    Quest.all[0].appendHTML();
  }

  watchCurrentLocation() {
    navigator.geolocation.watchPosition(
      this.savePosition.bind(this),
      this.error,
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
    );
  }
}
