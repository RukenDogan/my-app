import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function GoalItem({ text, onDelete }) {
  return (
    <View style={styles.textGoal}>
      <Text style={styles.text}>{text}</Text>
      <Pressable onPress={onDelete} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>X</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  textGoal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },

  text: {
    fontSize: 16,
    color: 'white',
  },

  deleteButton: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 5,
  },
  
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
