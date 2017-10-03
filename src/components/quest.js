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

  static calcDistanceFromUser(userCoord, questCoord) {
    Number.prototype.toRad = function() {
      return this * Math.PI / 180;
    };

    let lat1 = userCoord[0];
    let lon1 = userCoord[1];
    let lat2 = questCoord[0];
    let lon2 = questCoord[1];

    var R = 6371; // km
    var x1 = lat2 - lat1;
    var dLat = x1.toRad();
    var x2 = lon2 - lon1;
    var dLon = x2.toRad();
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1.toRad()) *
        Math.cos(lat2.toRad()) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    this.distanceFromUser = R * c / 1.609344; // distance in miles
    console.log(this.distanceFromUser);
  }
}

Quest.all = [];
