import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'

export default function Posts({ navigation }) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    AsyncStorage.getItem('token').then(token => {
      console.log(token)
      if(!token) {
        navigation.navigate('Home')
      }
    })
  }, [])

  useEffect(() => {
    axios({
      method: 'GET',
      baseURL: 'https://jsonplaceholder.typicode.com',
      url: '/posts'
    })
      .then(({ data }) => setPosts(data))
  }, [])

  return (
    <View style={styles.container}>
      {posts && posts.length > 0 && (
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <View>
              <Text>{item.title}</Text>
              <Button
                title="view more"
                onPress={() => navigation.navigate('Post', { id: item.id })}
              />
            </View>
          )}
          keyExtractor={(item) => `${item.id}`}
        />
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
