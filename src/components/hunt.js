class Hunt {
  constructor(huntObj) {
    this.user = huntObj.user;
    this.quest = huntObj.quest;
    this.startDistance = Quest.calcDistanceFromUser(
      userCoordinates,
      huntLocation
    );
    this.locationMonitor();
    this.appendHTML();
    this.status = false;
  }

  appendHTML() {
    $("#quests-container").empty();
    $("#quests-container").append(`<h3>Your Hunt!</h3>
      <h1>${this.quest.name}</h1>
      <div id="myProgress">
        <div id="myBar">0%</div>
      </div>
      <h2>Points: ${this.quest.prize}</h2>
      <h2 id="distanceToHunt"> ${this.startDistance} miles away</h2>
      <p id="Hunt description">${this.quest.description}</p>`);
  }

  move(startD) {
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 1000);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        elem.style.width = distanceToHunt / startD + "%";
        elem.innerHTML = distanceToHunt / startD * 1 + "%";
      }
    }
  }

  checkInterval() {
    distanceToHunt = Quest.calcDistanceFromUser(userCoordinates, huntLocation);
    $("#distanceToHunt").text(`${distanceToHunt} miles away!`);
    if (distanceToHunt <= 0.05) {
      console.log("success!");
      clearInterval(myInterval);
    } else {
      this.move(this.startDistance);
    }
  }

  locationMonitor() {
    myInterval = setInterval(
      function() {
        this.checkInterval();
      }.bind(this),
      5000
    );
  }
}
