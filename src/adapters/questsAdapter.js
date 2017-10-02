class QuestsAdapter {
  constructor() {
    this.baseUrl = "http://localhost:3000/api/v1/quests";
  }

  getQuests() {
    return fetch(this.baseUrl).then(response => response.json());
  }

  createQuest(latitude, longitude) {}
}
