class Quests {
  constructor() {
    // this.initBindingsAndEventListeners();
    this.quests = [];
    this.adapter = new QuestsAdapter();
    this.fetchAndLoadQuests();
  }

  // initBindingsAndEventListeners() {}

  fetchAndLoadQuests() {
    this.adapter
      .getQuests()
      .then(questsJSON =>
        questsJSON.forEach(quest => {
          this.quests.push(new Quest(quest));
        })
      )
      .then(res => this.render());
  }

  handleAddQuest() {}

  handleDeleteQuest() {}

  removeDeletedQuest(deleteResponse) {}

  questsHTML() {
    return this.quests.map(quest => quest.render()).join("");
  }

  render() {
    $("#quest-list").html(`${this.questsHTML()}`);
  }
}
