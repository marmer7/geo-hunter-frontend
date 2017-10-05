class HuntsAdapter {
  constructor() {
    this.baseUrl = "https://aqueous-wave-80105.herokuapp.com/api/v1/hunts";
  }

  postHunt(huntData) {
    fetch(this.baseUrl, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(huntData)
    })
      .then(res => res.json())
      // .then(res => console.log(res))
      .then(res => new Hunt(res));
  }
}
