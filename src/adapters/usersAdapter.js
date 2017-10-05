class UsersAdapter {
  constructor() {
    this.baseUrl = `https://aqueous-wave-80105.herokuapp.com/api/v1/users/${cookieUser}`;
    this.postUser = "https://aqueous-wave-80105.herokuapp.com/api/v1/users";
  }

  getUser() {
    return fetch(this.baseUrl).then(res => res.json());
  }

  newUser(userName, passWord) {
    return fetch(this.postUser, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: userName,
        password: passWord,
        points: 200
      })
    }).then(res => res.json());
  }

  loginUser(userName, passWord) {
    return fetch(
      "https://aqueous-wave-80105.herokuapp.com/api/v1/users/login",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: userName,
          password: passWord
        })
      }
    ).then(res => res.json());
  }
}
