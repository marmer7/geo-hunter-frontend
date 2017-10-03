let app;
let coordinates;

$(function() {
  app = new App();
  app.fetchAndLoadQuests().then(() => {
    Quest.all.forEach(quest => {
      // console.log("quest location:", quest.location);
    });
  });

  app.fetchAndLoadLocations().then(() => {
    Location.all.forEach(l => console.log(l));
  });
});
