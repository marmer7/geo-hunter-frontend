class App {
  constructor() {
    this.userLocation = new UserLocation();
    this.questAdapter = new QuestsAdapter();
    this.locationAdapter = new LocationsAdapter();
    this.userAdapter = new UsersAdapter();

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

  fetchPostNewUser(username, password) {
    return this.userAdapter.newUser(username, password).then(res => console.log(res));
  }

  fetchSignInUser(username, password) {
    return this.userAdapter.loginUser(username, password)
  }

  fetchAndLoadProfile() {
    return this.userAdapter.getUser().then(user => new User(user));
  }

  bindEventListeners() {
    $("#quest-list").on("click", function(e) {
      let loc = Location.all.find(function(l) {
        return l.id == e.target.dataset.location;
      });
      Quest.calcDistanceFromUser(coordinates, loc.getLatLon());
    });
  }
}
