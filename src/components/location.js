class Location {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.latitude = data.latitude;
    this.longitude = data.longitude;
    Location.all.push(this);
  }

  getLatLon() {
    return [this.latitude, this.longitude];
  }
}

Location.all = [];
