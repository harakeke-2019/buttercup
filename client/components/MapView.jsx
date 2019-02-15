import React, {Component} from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '60%',
  height: '60%'
}

export class MapContainer extends Component {
constructor(props){
super(props)
this.state.latitude=this.props.match.params.lat
this.state.longitude=this.props.match.params.lon

state = {
  showingInfoWindow: false,  
  activeMarker: {},          
  selectedPlace: {}          
};

}
 
  

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };


  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: this.state.latitude, lng: this.state.longitude }}>
        
        <Marker onClick={this.onMarkerClick} name={'Auckland City'}/>
        <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow} onClose={this.onClose}>
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ' AIzaSyCWIIoZNYtpwXHn_055IaJVebHjTjVDrLg '
})(MapContainer)
