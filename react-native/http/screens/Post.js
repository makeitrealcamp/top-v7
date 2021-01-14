import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'

export default function Post({ navigation, route }) {
  const [post, setPost] = useState(null)

  useEffect(() => {
    // const token = await AsyncStorage.getItem('token')
    AsyncStorage.getItem('token').then(token => {
      if(!token) {
        navigation.navigate('Home')
      }
    })
  }, [])

  useEffect(() => {
    console.log(route.params.id)
    axios({
      method: 'GET',
      baseURL: 'https://jsonplaceholder.typicode.com',
      url: `/posts/${route.params.id}`
    })
      .then(({ data }) => setPost(data))
  }, [])

  return (
    <View style={styles.container}>
      {post && (
        <>
          <Text style={styles.title}>{post.title}</Text>
          <Text>{post.body}</Text>
        </>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});
