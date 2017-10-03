class App {
  constructor() {
    this.userLocation = new UserLocation();
    this.questAdapter = new QuestsAdapter();
    this.locationAdapter = new LocationsAdapter();

    this.bindEventListeners();
  }

  fetchAndLoadQuests() {
    return this.questAdapter
      .getQuests()
      .then(quests => quests.forEach(q => new Quest(q)));
  }

  fetchAndLoadLocations() {
    return this.locationAdapter
      .getLocations()
      .then(locations => locations.forEach(l => new Location(l)));
  }

  bindEventListeners() {
    $("#quest-list").on("click", function(e) {
      let loc = Location.all.find(function(l) {
        return l.id == e.target.dataset.location;
      });
      Quest.calcDistanceFromUser(localStorage.userCoord, loc.getLatLon());
    });
  }
}
