import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Location = () =>{
  const [currLocation, setCurrLocation] = useState({});
  useEffect(() => {
    getLocation();
  }, []);


  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
    //   console.log(position);
      const { latitude, longitude } = position.coords;
      setCurrLocation({ latitude, longitude });
    });
  };

  return (
    <div>
      <h1>Current Location</h1>
      <p>Latitude: {currLocation.latitude}</p>
      <p>Longitude: {currLocation.longitude}</p>
    </div>
  );
};

export default Location;