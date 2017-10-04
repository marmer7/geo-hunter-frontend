let app;
let coordinates;
let cookieUser;

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

$('#signup').on('click', function() {
  $('#signup-div').toggle()
  $('#signin-div').hide()
  clickAwayHide($('#signup-div'))
});

$('#signin').on('click', function() {
  $('#signin-div').toggle()
  $('#signup-div').hide()
  clickAwayHide($('#signin-div'))
});

function clickAwayHide(node) {
  $(document).mouseup(function(e)
  {
      var container = node;
      if (!container.is(e.target) && container.has(e.target).length === 0)
      {
          container.hide();
      }
  })
}
