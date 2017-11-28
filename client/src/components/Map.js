
import React from 'react';
import MapCard from '../components/MapCard';
const fetch = require("isomorphic-fetch");
const { compose, withProps, withHandlers } = require("recompose");
const {
  withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} = require("react-google-maps");
var google =window.google;
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");

const MapWithAMarkerClusterer = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=AIzaSyAsJeZnsuZU_zcPWoCEuNtT-LMSds7z_Ao&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withHandlers({
        onMarkerClustererClick: () => (markerClusterer) => {
            const clickedMarkers = markerClusterer.getMarkers()
            console.log(`Current clicked markers length: ${clickedMarkers.length}`)
            console.log(clickedMarkers)
        },
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={3}
        defaultCenter={{ lat: 25.0391667, lng: 121.525 }}
    >
        <MarkerClusterer
            onClick={props.onMarkerClustererClick}
            averageCenter
            enableRetinaIcons
            gridSize={60}
        >
           
            {props.markers.map(marker => (
                <Marker
                    key={marker.photo_id}
                    position={{ lat: marker.latitude, lng: marker.longitude }}
                />
            ))}
        </MarkerClusterer>
        
    </GoogleMap>
    );

class Map extends React.PureComponent {
    constructor(props){
        super(props);
    }

 
    componentWillMount() {
        this.setState({ markers: [] })
    }

    componentDidMount() {
        this.initMap();
        const url = [
            // Length issue
            `https://gist.githubusercontent.com`,
            `/farrrr/dfda7dd7fccfec5474d3`,
            `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`
        ].join("")

        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({ markers: data.photos });
            });
    }
   initMap=()=> {
    // map = new google.maps.Map(document.getElementById('map'), {
    //     center: {
    //         lat: -34.397,
    //         lng: 150.644
    //     },
    //     zoom: 6
    // });
        var map;
        var infowindow;
        var searchType = 'Food Bank';
        var pos;
        var map, infoWindow;
    infoWindow = new google.maps.InfoWindow();
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            // pos = {
            //     lat: position.coords.latitude,
            //     lng: position.coords.longitude
            // };
            console.log(position);
            // find();
        })
    }else{
        console.log('Not working')
    }
}
    render() {
        return (  <div className="col-md-8 " style={{ height: '100%', paddingLeft: '25px', position: 'relative', zIndex: '2' }}>
             
            <MapWithAMarkerClusterer markers={this.state.markers} 
            />
           
            </div>
        )
    }
}

export default Map;