import React from 'react'
import { useState } from 'react';
import { GoogleMap,Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '500px',
  height: '500px'
};


function MyComponent() {
    
const center = {
    lat: 17.983973,
    lng: 79.534833
  };
  
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyD1sdhv6L-smIThQAtQEuf8x80EoTfd0oI"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker
            position={center}
            // icon={customMarker}
            onClick={(t, map, coord) => console.log(coord)}
            draggable= {true}
          />
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)