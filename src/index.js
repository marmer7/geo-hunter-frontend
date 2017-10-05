let app;
let userCoordinates = [0, 0];
let cookieUser;
let user;
let huntLocation;
let distanceToHunt;
let myInterval;

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

$("#signup-form").on("submit", function(e) {
  e.preventDefault();
  let username = $("#signup-username").val();
  let password = $("#signup-password").val();
  app = new App();
  app.fetchPostNewUser(username, password).then(resp => console.log(resp));
  $("#signup-username").val("");
  $("#signup-password").val("");
  $("#signup-password-confirm").val("");
});

$("#signin-form").on("submit", function(e) {
  e.preventDefault();
  let username = $("#signin-username").val();
  let password = $("#signin-password").val();
  app = new App();
  app.fetchSignInUser(username, password).then(resp => loginSuccess(resp));
  $("#signin-username").val("");
  $("#signin-password").val("");
});

$("#signup").on("click", function() {
  $("#signup-div").toggle();
  $("#signin-div").hide();
  clickAwayHide($("#signup-div"));
});

$("#signin").on("click", function() {
  $("#signin-div").toggle();
  $("#signup-div").hide();
  clickAwayHide($("#signin-div"));
});

function loginSuccess(resp) {
  user = new User(resp);
  cookieUser = user.id;
  $("#signup").hide();
  $("#signin").hide();
  $("#signin-div").hide();
  $("#profile-options").show();
  $("#profile-img").attr("src", `./image/${user.username}.png`);
}

$("#profile-options").mouseover(function() {
  $("#profile-options-inner").show();
});

$("#profile-options").mouseout(function() {
  $("#profile-options-inner").hide();
});

$("#view-profile").on("click", function() {
  $("#profileModal").show();
  user.appendHTML();
});

function clickAwayHide(node) {
  $(document).mouseup(function(e) {
    var container = node;
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.hide();
    }
  });
}
