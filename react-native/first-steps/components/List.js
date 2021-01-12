import React from 'react'
import { FlatList, View, Text, SectionList, StyleSheet } from 'react-native'

const list = [
  { id: 1, name: 'Maria', age: 24 },
  { id: 2, name: 'Juan', age: 24 },
  { id: 3, name: 'Ana', age: 24 },
  { id: 4, name: 'Martin', age: 24 },
];

export function List() {
  return (
    <View>
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.age}</Text>
          </View>
        )}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
}

const sectionList = [
  {
    title: 'M',
    data: [
      { id: 1, name: 'Maria', age: 24 },
      { id: 2, name: 'Martin', age: 24 },
    ]
  },
  {
    title: 'J',
    data: [
      { id: 3, name: 'Juan', age: 24 },
    ]
  },
  {
    title: 'A',
    data: [
      { id: 4, name: 'Ana', age: 24 },
    ]
  },
]

export function SList() {
  return (
    <SectionList
      sections={sectionList}
      renderItem={({ item }) => (
        <View>
          <Text>{item.name}</Text>
          <Text>{item.age}</Text>
        </View>
      )}
      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionTitle}>{section.title}</Text>
      )}
      keyExtractor={(item) => `${item.id}`}
    />
  )
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
  }
})
