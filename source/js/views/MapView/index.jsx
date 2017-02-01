import React, { Component, PropTypes } from 'react';
import LMap from '../../components/Global/LMap';
import Login from '../../components/Global/Login';
import { connect } from 'react-redux';
import { getEvents } from 'actions/app';
import { login } from 'actions/login';

@connect(state => ({
  asyncData: state.app.get('asyncData'),
  asyncError: state.app.get('asyncError'),
  asyncLoading: state.app.get('asyncLoading'),
  events: state.app.get('events'),
}))
export default class MapView extends Component {
  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(getEvents());
  }

  login(props) {
    const {dispatch} = this.props;
    dispatch(login(props));
  }
  render(){
    return <div id="mapPage">
      <LMap events={this.props.events}/>
      <Login doLogin={this.login.bind(this)}/>
    </div>;
  }
}
