import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const bgImage = { uri: 'https://images.pexels.com/photos/7736066/pexels-photo-7736066.jpeg' }

export default function App() {
    const [inputText, setInputText] = useState('');
    const [goals, setGoals] = useState(sampleGoals);

    const addGoal = () => {
        if (inputText.trim() !== '') {
            setGoals([...goals, inputText]);
            setInputText('');
        }
    };

    const deleteGoal = (indexToRemove) => {
        const newGoals = goals.filter((_, index) => index !== indexToRemove);
        setGoals(newGoals);
    };

    return (
        <ImageBackground source={bgImage} style={styles.bgImage}>
            <View style={styles.container}>
                <Text style={styles.title}>Mes objectifs</Text>

                <GoalInput value={inputText} onChangeText={setInputText} onAdd={addGoal} />

                {goals.map((goal, index) => (
                    <GoalItem key={index} text={goal} onDelete={() => deleteGoal(index)} />
                ))}

                <StatusBar style="auto" />
            </View>
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

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 20,
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
