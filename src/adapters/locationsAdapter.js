class LocationsAdapter {
  constructor(){
    this.baseUrl = 'http://localhost:3000/api/vs/locations'
  }

  getLocations() {
    return fetch(this.baseUrl).then(response => response.json())
  }

  createLocation(latitude, longitude) {
  const locationCreateParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({latitude, longitude})
    }
    return fetch(this.baseUrl, locationCreateParams).then(resp => resp.json())
  }
}
