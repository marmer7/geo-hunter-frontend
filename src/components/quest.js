class Quest {
  constructor(questJSON) {
    this.id = questJSON.id;
    this.name = questJSON.name;
    this.questUser = questJSON.user;
    this.location = questJSON.location;
    this.description = questJSON.description;
    this.hint = questJSON.hint;
    this.distanceFromUser = "n/a";
    this.huntsAdapter = new HuntsAdapter();
    Quest.all.push(this);
    this.appendHTML();
  }

  render() {
    return `<li id="${this.id}" class="quests" data-location="${this.location
      .id}">${this.name} - <span> ${Quest.calcDistanceFromUser(
      userCoordinates,
      [this.location.latitude, this.location.longitude]
    )} miles away</span><button href="#" data-questid="${this
      .id}" class="hunt-quest">Hunt!</button></li>`;
  }

  questsHTML() {
    return Quest.all.map(quest => quest.render()).join("");
  }

  appendHTML() {
    $("#quest-list").html(`${this.questsHTML()}`);
    $(".hunt-quest").on("click", e => {
      var huntQuest = Quest.all.find(function(quest) {
        return quest.id == e.target.dataset.questid
      }).location
      huntLocation = [huntQuest.latitude, huntQuest.longitude]
      this.huntsAdapter.postHunt({
        user_id: cookieUser,
        quest_id: e.target.dataset.questid
      });
    });
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
    return this.distanceFromUser.toFixed(2);
  }
}

Quest.all = [];
