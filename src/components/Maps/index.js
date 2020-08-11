import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { API_KEY } from './const';

const containerStyle = {
  marginTop: '12px',
  width: 'auto',
  minHeight: '150px',
  height: '90%',
};



function MyComponent({coords}) {

  const { latitude, longitude } = {...coords}
  const [map, setMap] = React.useState(null)
  const center = {
    lat: latitude || 52.233,
    lng: longitude || 20.781
  };


  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])


  return (
    <LoadScript
      googleMapsApiKey={API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={7}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >

        { /* Child components, such as markers, info windows, etc. */}
        <>
          <Marker position={center} draggable/>
        </>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)