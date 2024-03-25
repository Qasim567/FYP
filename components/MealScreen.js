import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Pressable, TextInput, Modal, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { MEALS, CATEGORIES } from '../data/bakery-data';

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
  const [showIngredientsModal, setShowIngredientsModal] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [ingredientsList, setIngredientsList] = useState([]);

  useEffect(() => {
    const allIngredients = meals.reduce((acc, meal) => {
      if (meal.ingredients) {
        meal.ingredients.forEach(ingredient => {
          if (!acc.includes(ingredient)) {
            acc.push(ingredient);
          }
        });
      }
      return acc;
    }, []);
    setIngredientsList(allIngredients);
  }, [meals]);

  const handleIngredientSelection = (ingredient) => {
    setSelectedIngredients([...selectedIngredients, ingredient]);
    setSearchText(searchText ? `${searchText}, ${ingredient}` : ingredient);
    setShowIngredientsModal(false);
  };

  const renderIngredientItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleIngredientSelection(item)}>
      <Text style={styles.ingredientItem}>{item}</Text>
    </TouchableOpacity>
  );

  const filteredMeals = meals.filter(meal => {
    const containsSelectedIngredients = selectedIngredients.length === 0 || 
      selectedIngredients.some(selectedIngredient =>
        meal.ingredients && meal.ingredients.some(ingredient =>
          ingredient.toLowerCase().includes(selectedIngredient.toLowerCase())
        )
      );
  
    const matchesSearchText = searchText.trim() === '' ||
      meal.ingredients && meal.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(searchText.toLowerCase())
      );
  
    return containsSelectedIngredients || matchesSearchText;
  });
  
  return (
    <View style={styles.screen}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by ingredients..."
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity onPress={() => setShowIngredientsModal(true)} style={styles.filterButton}>
          <Entypo name="menu" size={28} color="white" />
        </TouchableOpacity>
      </View>
      <Modal visible={showIngredientsModal} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeading}>Select Ingredients</Text>
            <FlatList
              data={ingredientsList}
              renderItem={renderIngredientItem}
              keyExtractor={(item) => item}
            />
            <TouchableOpacity onPress={() => setShowIngredientsModal(false)} style={styles.closeButton}>
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    color:'white'
  },
  filterButton: {
    paddingBottom: 10,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C0C0C0',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  ingredientItem: {
    padding: 10,
    fontSize: 12,
  },
  modalHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#5e2c04',
    borderRadius: 8,
    alignSelf: 'center',
  },
  modalCloseText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MealsScreen;
