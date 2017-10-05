class LocationsAdapter {
  constructor() {
    this.baseUrl = "https://aqueous-wave-80105.herokuapp.com/api/v1/locations";
  }

  getLocations() {
    return fetch(this.baseUrl).then(response => response.json());
  }
}
