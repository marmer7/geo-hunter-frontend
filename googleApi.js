class GoogleApi {
  constructor() {
    this.key = config.GOOGLE_KEY;
    this.modal = document.getElementById("newQuestModal");
    this.newQuestBtn = document.getElementById("newQuest");
    this.span = document.getElementsByClassName("close")[0];
    this.bindEventListeners();
  }

  geocodeLookup(address) {
    let param = address.split(" ").join("+");
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${param}&key=${this
      .key}`;
    $.get(url).then(res => console.log(res.results[0]));
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
