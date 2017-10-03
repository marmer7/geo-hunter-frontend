class userLocationsAdapter {
  constructor() {
    this.baseUrl = "http://localhost:3000/api/v1/user_locations";
  }

  postLocation(id, lat, lon) {
    fetch(this.baseUrl, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        user_id: id,
        latitude: lat,
        longitude: lon
      })
    }).then(function(res) {
      console.log(res);
    });
  }
}
