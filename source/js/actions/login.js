import api from 'api';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

function loginStart() {
  return {
    type: LOGIN_START,
  };
}

function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    data,
  };
}

function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}

export function login(props) {
  return function (dispatch) {
    dispatch(loginStart());

    api.login(props)
      .then(data => {
        localStorage.setItem("token", data.token);
        return dispatch(loginSuccess());
      })
      .catch(error => dispatch(loginError(error)));
  };
}
