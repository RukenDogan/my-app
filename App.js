import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Pressable, ImageBackground } from 'react-native';


const bgImage = {uri: 'https://images.pexels.com/photos/7736066/pexels-photo-7736066.jpeg'}

export default function App() { // Composant principal de l'application
  const [inputText, setInputText] = useState(''); // État pour stocker le texte de l'input
  const [goals, setGoals] = useState(sampleGoals); // État pour stocker les objectifs

  const onPress = () => { // Fonction appelée lors de l'appui sur le bouton "Add"
    if (inputText.trim() !== '') { // Vérifie si le champ n'est pas vide
      setGoals([...goals, inputText]); // ajoute l'objectif
      setInputText(''); // vide le champ
    }
  };

  return (
    <ImageBackground source={bgImage} style={styles.bgImage}>
      <View style={styles.container}>
        <Text style={styles.text1}>Open up <Text style={styles.app}>App.js</Text> to start working on your app!</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={inputText}
            placeholder="Entrez votre objectif"
            placeholderTextColor="white"
            onChangeText={newText => setInputText(newText)}
          />
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.buttonAdd}>Add</Text>
          </TouchableOpacity>
        </View>


        <Text style={styles.title}>Mes objectifs :</Text>

        {goals.map((goal, index) => (
          <View key={index} style={styles.textGoal}>
            <Text style={styles.text}>{goal}</Text>

            <Pressable
              onPress={() => {
                const newGoals = goals.filter((_, i) => i !== index); // Supprime l'objectif à l'index donné
                setGoals(newGoals); // Met à jour la liste des objectifs
              }}
              style={styles.deleteButton}
            >
              <Text style={styles.deleteButtonText}>X</Text>
            </Pressable>

          </View>
        ))}

        <StatusBar style="auto" />
      </View >
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent', // Permet de voir l'image de fond
  },

  text1: {
    color: 'red',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
    color: 'white',
  },

  app: {
    fontWeight: 'bold',
  },

  text: {
    fontSize: 16,
    marginVertical: 5,
    color: 'white',
  },

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
    marginBottom: 10,
    color: 'white',
  },

  buttonAdd: {
    backgroundColor: 'blue',
    padding: 12,
    marginBottom: 10,
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
  },

  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    marginVertical: 5,
    alignSelf: 'center',
    borderRadius: 5,
  },

  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  textGoal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  bgImage: {
    flex: 1,
    // width: '100%',
    // height: '100%',
  },

});

const sampleGoals = [
  'Faire les courses',
  'Aller à la salle de sport 3 fois par semaine',
  "Monter à plus de 500m d'altitude",
  'Acheter mon premier appartement',
  'Perdre 5 kgs',
  'Gagner en productivité',
  'Apprendre un nouveau langage',
  'Faire une mission en freelance',
  'Organiser un meetup autour de la tech',
  'Faire un triathlon',
];

