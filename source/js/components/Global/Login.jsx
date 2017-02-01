import React, { Component } from 'react';


export default class Login extends Component {
  handleButtonClick(ev) {
    ev.stopPropagation();
    ev.preventDefault();
    var props = {
      email: this.refs.email.value,
      password: this.refs.password.value,
    };
    this.props.doLogin(props);
  }

  render() {
    return (
      <form onSubmit={ this.handleButtonClick.bind(this) }>
        <input name='email' type='email' ref='email'/>
        <input name='password' type='password' ref='password'/>
        <input type='submit' value ='Login' />
      </form>)
  }
}

