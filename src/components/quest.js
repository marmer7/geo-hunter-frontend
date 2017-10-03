class Quest {
  constructor(questJSON) {
    this.id = questJSON.id;
    this.questUser = questJSON.user;
    this.location = questJSON.location;
    this.distanceFromUser = "n/a";
    Quest.all.push(this);
    this.appendHTML();
  }

  render() {
    return `<li id="${this.id}" class="quests" data-location="${this.location
      .id}">${this.questUser.username} - ${this.location.name}</li>`;
  }

  questsHTML() {
    return Quest.all.map(quest => quest.render()).join("");
  }

  appendHTML() {
    $("#quest-list").html(`${this.questsHTML()}`);
  }

  static findLocation(id) {
    return Quest.all.find(function(q) {
      return q.id === id;
    }).location;
  }
}

Quest.all = [];
