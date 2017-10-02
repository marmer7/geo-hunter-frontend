class App {
  constructor() {
    this.userLocation = new UserLocation();
    this.adapter = new QuestsAdapter();
  }

  questInit() {
    return this.fetchAndLoadQuests();
  }

  fetchAndLoadQuests() {
    return this.adapter
      .getQuests()
      .then(quests => quests.forEach(q => new Quest(q)));
  }
}
