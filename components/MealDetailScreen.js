import React, { useLayoutEffect, useState, useEffect } from 'react';
import { Text, Image, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useFavorites } from '../context/FavoritesContext';
import { Alert } from 'react-native';

const MealDetailScreen = ({ route }) => {
  const { meal, isFavorite: initialIsFavorite } = route.params;
  const { imageUrl, title, ingredients, steps } = meal;

  const navigation = useNavigation();
  const { favorites, setFavorites } = useFavorites();
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
      headerRight: () => (
        <Icon
          name={isFavorite ? 'star' : 'star-outline'}
          size={30}
          color="white"
          style={styles.favoriteIcon}
          onPress={handleToggleFavorite}
        />
      ),
    });
  }, [navigation, title, isFavorite]);

  const handleToggleFavorite = () => {
    const isMealAlreadyFavorite = favorites.some((fav) => fav.id === meal.id);
  
    if (isMealAlreadyFavorite && !isFavorite) {
      Alert.alert('Already in Favorites', `${meal.title} is already in your favorites!`);
    } else {
      const updatedFavorites = isFavorite
        ? favorites.filter((fav) => fav.id !== meal.id)
        : [...favorites, meal];
  
      setFavorites(updatedFavorites);
      setIsFavorite(!isFavorite);
  
      const action = isFavorite ? 'Removed from' : 'Added to';
      Alert.alert(`${action} Favorites`, `${meal.title} ${action.toLowerCase()} favorites!`);
    }
  };
  

  useEffect(() => {
    navigation.setOptions({
      title: title,
      headerRight: () => (
        <Icon
          name={isFavorite ? 'star' : 'star-outline'}
          size={30}
          color="white"
          style={styles.favoriteIcon}
          onPress={handleToggleFavorite}
        />
      ),
    });
  }, [isFavorite, navigation, title]);

  return (
    <ScrollView>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.txt}>{title}</Text>

      <Text style={[styles.text, styles.underline]}>Ingredients</Text>
      {ingredients && ingredients.map((ingredient, index) => (
        <Text style={styles.innertext} key={index}>{ingredient}</Text>
      ))}

      <Text style={[styles.text, styles.underline]}>Recipe Steps</Text>
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
  favoriteIcon: {
    marginRight: 20,
  },
});

export default MealDetailScreen;
