class Locations {
  constructor() {
    this.initBindingsAndEventListeners();
    this.locations = [];
    this.adapter = new LocationsAdapter();
    this.fetchAndLoadLocations();
  }

  initBindingsAndEventListeners() {}

  fetchAndLoadLocations() {
    this.adapter
      .getLocations()
      .then(locationsJSON =>
        locationsJSON.forEach(location => {
          this.locations.push(new Location(location));
        })
      )
      .then(res => this.render());
  }

  handleAddLocation() {}

  handleDeleteLocation() {}

  removeDeletedLocation(deleteResponse) {}

  locationsHTML() {
    return this.locations.map(location => location.render()).join("");
  }

  render() {
    $("#locations-container").html(`<ul>${this.locationsHTML()}</ul>`);
  }
}
