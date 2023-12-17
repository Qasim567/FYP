import React, {useLayoutEffect} from 'react';
import { View, Text, FlatList, Image, StyleSheet, Pressable } from 'react-native';
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

  return (
    <FlatList
      data={meals}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <RenderItem item={item} />}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
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
