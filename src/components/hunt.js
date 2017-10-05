class Hunt {
  constructor(huntObj) {
    this.user = huntObj.user;
    this.quest = huntObj.quest;
    this.startDistance = Quest.calcDistanceFromUser(userCoordinates, huntLocation)
    this.locationMonitor()
    this.appendHTML();
    this.status = false;
  }

  appendHTML() {
    $('#quests-container').empty();
    $('#quests-container').append(`<h3>Your Hunt!</h3>
      <h1>${this.quest.name}</h1>
      <h2>Points: ${this.quest.prize}</h2>
      <h2 id="distanceToHunt"> ${this.startDistance} miles away</h2>
      <p id="Hunt description">${this.quest.description}</p>`)
  }

  checkInterval() {
    distanceToHunt = Quest.calcDistanceFromUser(userCoordinates, huntLocation)
    $('#distanceToHunt').text(`${distanceToHunt} miles away!`)
    if (distanceToHunt <= 0.05) {
      console.log("success!")
      clearInterval(myInterval)
    }
  }

  locationMonitor(){
    myInterval = setInterval(function(){ this.checkInterval() }.bind(this), 5000);
  }

}
