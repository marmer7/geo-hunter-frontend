class App {
  constructor() {
    this.userLocation = new UserLocation();
    this.questAdapter = new QuestsAdapter();
    this.locationAdapter = new LocationsAdapter();
    this.googleApi = new GoogleApi();
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
      Quest.calcDistanceFromUser(coordinates, loc.getLatLon());
    });

    function questFormSubmit(e) {
      e.preventDefault();
      let questInfo = {
        name: e.target.quest_name.value,
        prize: e.target.prize.value
      };
      this.googleApi
        .geocodeLookup(e.target.search_term.value, questInfo)
        .then(res => this.questAdapter.postQuest(res));
      e.target.search_term.value = "";
      document.getElementById("newQuestModal").style.display = "none";
    }

    $("#new-quest-form").on("submit", questFormSubmit.bind(this));
  }
}
