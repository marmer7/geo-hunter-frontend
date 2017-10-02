class Quest {
  constructor(questJSON) {
    this.id = questJSON.id;
    this.questUser = questJSON.user;
    this.questLocation = questJSON.location;
    this.distanceFromUser = "n/a"
  }

  render() {
    return `<li id="${this.id}" class="quests" data-location="${this.questLocation.id}">${this.questUser.username} - ${this
      .questLocation.name}</li>`;
  }

  calcDistanceFromUser(){
    Number.prototype.toRad = function() {
      return this * Math.PI / 180;
    };

    var lat2 = this.questLocation.latitude;
    var lon2 = this.questLocation.longitude;
    var lat1 = userlatitude;
    var lon1 = userlongitude;

    var R = 6371; // km
    //has a problem with the .toRad() method below.
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
    var d = R * c;
  }

  static addDistance(){

  }

}
