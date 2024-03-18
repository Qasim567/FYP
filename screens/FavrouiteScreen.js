import React, { useEffect, useCallback } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Pressable, Alert, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFavorites } from '../context/FavoritesContext';

const FavoritesScreen = () => {
  const navigation = useNavigation();
  const { favorites, setFavorites } = useFavorites();

  const isMealFavorite = (meal) => {
    return favorites.some((fav) => fav.id === meal.id);
  };

  const handleShowMealDetail = (meal) => {
    navigation.navigate('MealDetail', { meal, isFavorite: isMealFavorite(meal) });
  };

  const RenderItem = ({ item }) => {
    return (
      <Pressable
        onPress={() => handleShowMealDetail(item)}
        onLongPress={() =>
          isMealFavorite(item) ? handleRemoveFromFavorites(item) : handleAddToFavorites(item)
        }
      >
        <View style={styles.mealContainer}>
          <Image source={{ uri: item.imageUrl }} style={styles.mealImage} />
          <Text style={styles.mealTitle}>{item.title}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <ImageBackground
            style={styles.background}
            source={require('../assets/cookie.jpg')}
            resizeMode="cover"
        >
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <Text style={styles.noFavoritesText}>Favorites yet to add!</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <RenderItem item={item} />}
        />
      )}
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 50,
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
  noFavoritesText: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
    marginTop: '75%',
    fontStyle:'italic',
    fontWeight:'bold'
  },
});

export default FavoritesScreen;
