import { View, Text, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as Location from 'expo-location';
import { reverseGeocodeAsync } from 'expo-location';

export default function GetCityName() {
    const [location, setLocation] = useState(null);
    const [locationName, setLocationName] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if(status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        console.log(location);
        setLocation(location.coords);
    };

    useEffect(() => {
          (async () => {
            try {
              await getLocation();
              console.log('location :', location);
              if (location) {
                const locationInfo = await reverseGeocodeAsync({
                  latitude: location.latitude,
                  longitude: location.longitude,
                });
                console.log("location name", locationInfo);
                if (locationInfo && locationInfo.length > 0) {
                  const { city, region, country } = locationInfo[0];
                  setLocationName(`${city}, ${region}, ${country}`);
                }
              }
            } catch (error) {
              console.error('Error fetching location name:', error);
            }
          })();
      }, []);

  return (
    <View>
      {errorMsg && <Text>{errorMsg}</Text>}
      {location && (
        <View>
          <Text>Latitude: {location.latitude}</Text>
          <Text>Longitude: {location.longitude}</Text>
          {locationName && <Text>Location: {locationName}</Text>}
        </View>
      )}
    </View>
  )
}