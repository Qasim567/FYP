import React from 'react';
import { View, Text, StyleSheet, Image, Pressable} from 'react-native';

function CategoryGrid ({ item,onPress }){
  return (
    <View style={styles.container}>
    <Pressable android_ripple={{ color: '#3f2f25' }} 
    style={styles.btn}
    onPress={onPress}>
      <View style={styles.categoryContainer}>
        <Image source={{ uri: item.image }} style={styles.categoryImage} />
        <Text style={styles.categoryTitle}>{item.title}</Text>
      </View>
    </Pressable>
    </View> 
     );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    margin: 23,
    borderRadius: 8,
    elevation: 8
},
  btn: {
    flex: 1,
  },
  categoryContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryImage: {
    width: '120%', 
    height: '120%', 
    borderRadius: 10,
  },
  categoryTitle: {
    position: 'absolute',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
});

export default CategoryGrid;
