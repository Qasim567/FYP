import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Pressable, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RenderItem = ({ item }) => {
  const navigation = useNavigation();

  const navigateToMealDetail = () => {
    navigation.navigate('MealDetail', { meal: item });
  };

  return (
    <Pressable onPress={navigateToMealDetail}>
      <View style={styles.mealContainer}>
        <Image source={{ uri: item.imageUrl }} style={styles.mealImage} />
        <Text style={styles.mealTitle}>{item.title}</Text>
      </View>
    </Pressable>
  );
};

const MealsScreen = ({ route }) => {
  const { meals } = route.params;
  const [searchText, setSearchText] = useState('');

  // Convert the searchText to an array of ingredients
  const searchedIngredients = searchText.toLowerCase().split(',');

  const filteredMeals = meals.filter(meal =>
    meal.ingredients && searchedIngredients.every(searchedIngredient =>
      meal.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(searchedIngredient.trim())
      )
    )
  );

  return (
    <View style={styles.screen}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by ingredients (comma-separated)..."
        placeholderTextColor="#ffffff"
        onChangeText={setSearchText}
        value={searchText}
      />
      <FlatList
        data={filteredMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RenderItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
  },
  searchInput: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    color:'white'
  },
  mealContainer: {
    margin: 16,
    borderRadius: 10,
    backgroundColor: 'white',
    overflow: 'hidden',
    elevation: 4,
  },
  mealImage: {
    width: '100%',
    height: 200,
  },
  mealTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  },
});

export default MealsScreen;
