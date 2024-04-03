import React from 'react';
import { Text, Image, ScrollView, StyleSheet } from 'react-native';

const RecipeDetail = ({route}) => {
  const { recipe } = route.params;
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <Text style={styles.title}>{recipe.label}</Text>
      <Text style={[styles.text, styles.underline]}>Calories</Text>
      <Text style={styles.innertext}>{Math.round(recipe.calories)}</Text>
      <Text style={[styles.text, styles.underline]}>Ingredients:</Text>
      {recipe.ingredients.map((ingredient, i) => (
        <Text key={i} style={styles.innertext}>{`${ingredient.text}`}</Text>
      ))}
      <Text style={[styles.text, styles.underline]}>Allergy</Text>
      <Text style={styles.innertext}>{recipe.healthLabels.join(', ')}</Text>
      <Text style={[styles.text, styles.underline]}>Diet</Text>
      <Text style={styles.innertext}>{recipe.dietLabels.join(', ')}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor:'#3f2f25',
},
image: {
  width: '100%',
  height: 300,
},
title: {
  fontSize: 24,
  fontWeight: 'bold',
  textAlign: 'center',
  marginVertical: 10,
  color:'white'
},
text: {
  textAlign: 'center',
  marginTop: 10,
  fontSize: 19,
  color: '#F4A384',
  marginBottom: 7,
},
underline: {
  borderBottomWidth: 2,
  borderBottomColor: '#F4A384',
  fontWeight: 'bold',
  margin: 80,
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
});

export default RecipeDetail;
