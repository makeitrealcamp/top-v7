import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About', {
          params1: 'HOLA',
          params2: 5
        })}
      />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
