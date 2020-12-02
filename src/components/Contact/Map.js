import { Component } from "react";

import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const style = {
  width: "100%",
  height: "100%"
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        initialCenter={{
          lat: 59.9387942,
          lng: 30.3230833
        }}
        style={style}
        zoom={18}
      >
        <Marker
          onClick={this.onMarkerClick}
          position={{ lat: 59.9387942, lng: 30.3230833 }}
          name={"Current location"}
          icon={{
            url: "/icons/SVG/marker.svg"
          }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBFEOItSUO6mvdLdUfoFcE4hXQYLt55g5Y"
})(MapContainer);
