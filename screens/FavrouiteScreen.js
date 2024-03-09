import React, { useEffect, useCallback } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Pressable, Alert } from 'react-native';
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
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <Text style={styles.noFavoritesText}>No Favorites</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <RenderItem item={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3f2f25',
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
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginTop: '80%',
  },
});

export default FavoritesScreen;
