import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Gyroscope } from 'expo-sensors'
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'

export default function App() {
  const [gyroscope, setGyroscope] = useState(null)
  const [locationPermission, setLocationPermission] = useState('denied')
  const [location, setLocation] = useState(null)

  useEffect(() => {
    Permissions.askAsync(Permissions.LOCATION)
      .then(({ status }) => setLocationPermission(status))
  }, [])

  useEffect(() => {
    Gyroscope
      .isAvailableAsync()
      .then(isAvailable => {
        console.log('is available', isAvailable)
        if(isAvailable) {
          Gyroscope.addListener(data => setGyroscope(data))
          Gyroscope.setUpdateInterval(1000)
        }
      })

    return () => {
      Gyroscope.removeAllListeners()
    }
  }, [])

  async function handleLocation() {
    const data = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Low,
    })

    console.log(data)
    setLocation(data)
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title="get location"
        onPress={handleLocation}
      />
      {location && (
        <View>
          <Text>Lon: {location.coords.longitude}</Text>
          <Text>Lat: {location.coords.latitude}</Text>
        </View>
      )}
      {gyroscope && (
        <View>
          <Text>{gyroscope.x}</Text>
          <Text>{gyroscope.y}</Text>
          <Text>{gyroscope.z}</Text>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
