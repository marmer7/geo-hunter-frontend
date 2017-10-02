class Location {
  constructor(locationJSON) {
    this.name = locationJSON.name;
    this.longitude = locationJSON.longitude;
    this.latitude = locationJSON.latitude;
    this.address = locationJSON.address;
    this.id = locationJSON.id;
  }

  render() {
    return `<li id="${this.id}">${this.name} - lat: ${this.latitude} lon: ${this
      .longitude}</li>`;
  }
}
