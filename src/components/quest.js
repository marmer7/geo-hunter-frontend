class Quest {
  constructor(questJSON) {
    this.id = questJSON.id;
    this.name = questJSON.name;
    this.questUser = questJSON.user;
    this.location = questJSON.location;
    this.distanceFromUser = "n/a";
    Quest.all.push(this);
    this.appendHTML();
  }

  render() {
    return `<li id="${this.id}" class="quests" data-location="${this.location
      .id}">${this.name} created by ${this.questUser.username}</li>`;
  }

  questsHTML() {
    return Quest.all.map(quest => quest.render()).join("");
  }

  appendHTML() {
    $("#quest-list").html(`${this.questsHTML()}`);
  }
}

Quest.all = [];
