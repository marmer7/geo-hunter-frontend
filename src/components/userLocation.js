class UserLocation {
  constructor() {
    this.latitude = false;
    this.longitude = false;
    this.getLocation();
    this.adapter = new userLocationsAdapter();
  }

  getLocation() {
    if (navigator.geolocation && !cookieUser) {
      navigator.geolocation.getCurrentPosition(this.savePosition.bind(this));
    }
  }

  savePosition(position) {
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    // fetch post request to database storing user location
    this.adapter.postLocation(1, this.latitude, this.longitude);
    coordinates = [this.latitude, this.longitude];
  }
}
