class Quest {
  constructor(questJSON) {
    this.id = questJSON.id;
    this.questUser = questJSON.user;
    this.questLocation = questJSON.location;
  }

  render() {
    return `<li id="${this.id}">${this.questUser.username} - ${this
      .questLocation.name}</li>`;
  }
}
