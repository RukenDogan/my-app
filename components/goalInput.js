import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function GoalInput({ value, onChangeText, onAdd }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        value={value}
        placeholder="Entrez votre objectif"
        onChangeText={onChangeText}
      />
      <TouchableOpacity onPress={onAdd}>
        <Text style={styles.buttonAdd}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    margin: 10,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 10,
    flex: 1,
    color: 'white',
  },
  buttonAdd: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    fontWeight: 'bold',
  },
});
