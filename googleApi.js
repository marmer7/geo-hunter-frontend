class GoogleApi {
  constructor() {
    this.key = config.GOOGLE_KEY;
    this.modal = document.getElementById("newQuestModal");
    this.newQuestBtn = document.getElementById("newQuest");
    this.span = document.getElementsByClassName("close")[0];
    this.bindEventListeners();
    this.jsonp();
  }

  jsonp() {
    var s = document.createElement("script");
    s.src =
      "https://maps.googleapis.com/maps/api/js?key=" +
      this.key +
      "&libraries=places&callback=activatePlacesSearch";
    document.body.appendChild(s);
  }

  createQuest(res, questInfo) {
    return {
      name: questInfo.name,
      prize: parseInt(questInfo.prize),
      description: questInfo.description,
      hint: questInfo.hint,
      user_id: cookieUser,
      location: {
        address: res.formatted_address,
        latitude: res.geometry.location.lat,
        longitude: res.geometry.location.lng
      }
    };
  }

  geocodeLookup(address, questInfo) {
    let param = address.split(" ").join("+");
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${param}&key=${this
      .key}`;
    return $.get(url).then(res => this.createQuest(res.results[0], questInfo));
  }

  bindEventListeners() {
    this.newQuestBtn.onclick = function() {
      this.modal.style.display = "block";
    }.bind(this);

    // When the user clicks on <span> (x), close the modal
    this.span.onclick = function() {
      this.modal.style.display = "none";
    }.bind(this);

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == this.modal) {
        this.modal.style.display = "none";
      }
    }.bind(this);
  }
}
