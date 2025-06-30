import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, FlatList, Pressable, ImageBackground, SafeAreaView, Modal } from 'react-native';


const bgImage = { uri: 'https://images.pexels.com/photos/7736066/pexels-photo-7736066.jpeg' }

export default function App() { // Composant principal de l'application
  const [inputText, setInputText] = useState(''); // État pour stocker le texte de l'input
  const [goals, setGoals] = useState(sampleGoals); // État pour stocker les objectifs, initialisé avec des objectifs d'exemple (pour faire fonctionner la modale de suppression)

  const [modalVisible, setModalVisible] = useState(false); // Contrôle de la modale
  const [goalToDeleteIndex, setGoalToDeleteIndex] = useState(null); // L'objectif sélectionné


  const onPress = () => { // Fonction appelée lors de l'appui sur le bouton "Add"
    if (inputText.trim() !== '') { // Vérifie si le champ n'est pas vide
      setGoals([...goals, inputText]); // ajoute l'objectif
      setInputText(''); // vide le champ
    }
  };

  return (
    <ImageBackground source={bgImage} style={styles.bgImage}>
      <SafeAreaView style={styles.container}>

        <Text style={styles.text1}>Open up <Text style={styles.app}>App.js</Text> to start working on your app!</Text>

        <View style={styles.inputContainer}>

          <TextInput
            style={styles.textInput}
            value={inputText}
            placeholder="Entrez votre objectif"
            placeholderTextColor="white"
            onChangeText={newText => setInputText(newText)}
          />

          <Pressable
            onPress={onPress}
            android_ripple={{
              color: 'lightblue',
              foreground: true,
              borderless: true,
              radius: 30,
            }}
          >
            <Text style={styles.buttonAdd}>Add</Text>
          </Pressable>

        </View>

        <Text style={styles.title}>Mes objectifs :</Text>

        <FlatList
          data={goals}
          keyExtractor={(index) => index.toString()}
          renderItem={({ item, index }) => (

            <View key={index} style={styles.textGoal}>
              <Text style={styles.text}>{item}</Text>

              <Pressable
                onPress={() => {
                  setGoalToDeleteIndex(index);
                  setModalVisible(true);
                }}
                style={styles.deleteButton}
              >
                <Text style={styles.deleteButtonText}>X</Text>
              </Pressable>

            </View>
          )}
        />

        <Modal
          transparent={true}
          visible={modalVisible}
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalText}>Supprimer cet objectif ?</Text>
              <View style={styles.modalActions}>
                <Pressable
                  style={styles.cancelButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.cancelText}>Annuler</Text>
                </Pressable>
                <Pressable
                  style={styles.confirmButton}
                  onPress={() => {
                    if (goalToDeleteIndex !== null) {
                      const newGoals = goals.filter((_, i) => i !== goalToDeleteIndex);
                      setGoals(newGoals);
                      setGoalToDeleteIndex(null);
                      setModalVisible(false);
                    }
                  }}
                >
                  <Text style={styles.confirmText}>Confirmer</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>


        <StatusBar style="auto" />
      </SafeAreaView>
    </ImageBackground >
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent', // Permet de voir l'image de fond
    flex: 1,
    padding: 50,
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
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  bgImage: {
    flex: 1,
    // width: '100%',
    // height: '100%',
  },


  modalBackground: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.5)',
  justifyContent: 'center',
  alignItems: 'center',
},

modalContainer: {
  backgroundColor: 'white',
  padding: 20,
  borderRadius: 10,
  width: '80%',
  alignItems: 'center',
},

modalText: {
  fontSize: 18,
  marginBottom: 20,
  textAlign: 'center',
},

modalActions: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: '100%',
},

cancelButton: {
  padding: 10,
  backgroundColor: 'gray',
  borderRadius: 5,
},

cancelText: {
  color: 'white',
  fontWeight: 'bold',
},

confirmButton: {
  padding: 10,
  backgroundColor: 'red',
  borderRadius: 5,
},

confirmText: {
  color: 'white',
  fontWeight: 'bold',
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