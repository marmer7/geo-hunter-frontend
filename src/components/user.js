class User {
  constructor(userJSON) {
    this.id = userJSON.id;
    this.username = userJSON.username;
    this.quests = userJSON.quests;
    this.hunts = userJSON.hunts;
    this.points = userJSON.points;
  }

  appendHTML() {
    if (cookieUser) {
      $("#thumbnail").attr("src", `image/${this.username}.png`);
      $("#username").text(`${this.username}`);
      $("#points").text(`${this.points}`);
      this.quests.forEach(function(quest) {
        $("#profile-quest-list").append(`<li>${quest.name}</li>`);
      });
      // this.hunts html here...
    }
  }
}

// user.hunts.find(function(hunt){ return hunt.status === false })
