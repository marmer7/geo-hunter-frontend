class LocationsAdapter {
  constructor() {
    this.baseUrl = "http://localhost:3000/api/v1/locations";
  }

  getLocations() {
    return fetch(this.baseUrl).then(response => response.json());
  }

  createLocation(latitude, longitude) {}
}
