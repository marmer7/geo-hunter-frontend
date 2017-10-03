class Location {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.latitude = data.latitude;
    this.longitude = data.longitude;
    Location.all.push(this);
  }

  getLatLon() {
    return { lat: this.latitude, lon: this.longitude };
  }
}

Location.all = [];
