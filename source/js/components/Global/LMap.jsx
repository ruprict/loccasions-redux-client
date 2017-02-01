import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const position = [35.181119, -80.84885];
export default class LMap extends Component {

  render() {
    const events = this.props.events
    return <Map center={position} zoom={13} style={{height: '500px'}}>
    <TileLayer
      url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    {events.map((ev) => (
      <Marker key={ev.properties.id} position={[ev.geometry.coordinates[1], ev.geometry.coordinates[0]]}>
        <Popup>
          <h4>{ev.properties.note}.</h4>
        </Popup>
      </Marker>
    ))}
  </Map>
  }
}
