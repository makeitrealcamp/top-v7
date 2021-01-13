import React, { useState } from 'react'
import { TextInput, Switch, Button } from 'react-native'
import {Picker} from '@react-native-picker/picker';

export function Form() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [language, setLanguage] = useState('')
  const [terms, setTerms] = useState(false)

  function handleChange(text) {
    setName(text)
  }

  function handleSubmit() {
    console.log(name, password, language, terms)
  }

  return (
    <>
      <TextInput
        placeholder="Insert your name"
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Switch
        onValueChange={() => setTerms(prevTerms => !prevTerms)}
        value={terms}
      />
      <Picker
        selectedValue={language}
        style={{height: 50, width: 100}}
        onValueChange={(itemValue, itemIndex) =>
          setLanguage(itemValue)
        }
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      {terms && (
        <Button
          title="Send"
          onPress={handleSubmit}
        />
      )}
    </>
  )
}
