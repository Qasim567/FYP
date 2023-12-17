import React, { useLayoutEffect, useContext } from 'react';
import { Text, Image, ScrollView, StyleSheet} from 'react-native';

const MealDetailScreen = ({ route, navigation }) => {
  const { meal } = route.params;
  const { imageUrl, title, ingredients, steps } = meal;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title, 
    });
  }, [navigation, title]);

  return (
    <ScrollView>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.txt}>{title}</Text>

      <Text style={[styles.text, styles.underline]}>Ingredients</Text>
      {ingredients && ingredients.map((ingredient, index) => (
        <Text style={styles.innertext} key={index}>{ingredient}</Text>
      ))}

      <Text style={[styles.text, styles.underline]}> Recipe Steps</Text>
      {steps && steps.map((step, index) => (
        <Text style={styles.innertext} key={index}>{step}</Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  txt: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 8,
    color: 'white',
  },
  text: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 19,
    color: '#F4A384',
    marginBottom: 7,
  },
  innertext: {
    textAlign: 'center',
    backgroundColor: '#F4A384',
    color: 'white',
    borderRadius: 5,
    marginBottom: 7,
    marginLeft: 10,
    marginRight: 10,
    paddingVertical: 3,
  },
  underline: {
    borderBottomWidth: 2,
    borderBottomColor: '#F4A384',
    fontWeight: 'bold',
    margin: 20,
  },
});

export default MealDetailScreen;
