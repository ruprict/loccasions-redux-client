import 'es6-promise';

require('isomorphic-fetch')

function testAsync() {
  return new Promise(resolve => {
    setTimeout(() => {
      const date = new Date();
      let seconds = date.getSeconds();
      let minutes = date.getMinutes();

      seconds = seconds < 10 ? `0${ seconds }` : seconds;
      minutes = minutes < 10 ? `0${ minutes }` : minutes;

      resolve(`Current time: ${ date.getHours() }:${ minutes }:${ seconds }`);
    }, (Math.random() * 1000) + 1000); // 1-2 seconds delay
  });
}

function authHeaders() {
  return {"Authorization" : `Bearer ${localStorage.token}` };
}

function getEvents() {
  return fetch('http://localhost:8080/events/014b31ed-ff06-473a-968a-fb44e71846c3/occasions',{
    headers: authHeaders()
  }).then((response) => {
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
     return response.json();
  });
}

function login(props) {
  var data = new FormData();
  data.append("email", props.email);
  data.append("password", props.password);
  return fetch('http://localhost:8080/login',{
    method: "POST",
    body: data
  }).then((response) => {
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
     return response.json();
  });
}

export default {
  testAsync,
  getEvents,
  login,
};

