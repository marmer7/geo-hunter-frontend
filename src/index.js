let app;

$("#quest-list").on("click", function(e) {
  let location_id = e.target.dataset.location;
});

$(function() {
  app = new App();
  app.questInit().then(() => {
    console.log(Quest.all);
    Quest.all.forEach(quest => {
      console.log("quest location:", quest.location);
      console.log(
        "person location:",
        app.userLocation.latitude,
        app.userLocation.longitude
      );
    });
  });
  // .then(quests => quests.forEach(q => new Quest(q)))
  // .then(() => {
  //   debugger;
  // });
});
