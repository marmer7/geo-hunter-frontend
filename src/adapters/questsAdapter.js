class QuestsAdapter {
  constructor() {
    this.baseUrl = "http://localhost:3000/api/v1/quests";
  }

  getQuests() {
    return fetch(this.baseUrl).then(response => response.json());
  }

  postQuest(questData) {
    fetch(this.baseUrl, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(questData)
    })
      .then(res => res.json())
      .then(res => new Quest(res));
  }

  createQuest(latitude, longitude) {}
}
