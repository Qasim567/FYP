import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CATEGORIES, MEALS } from '../data/bakery-data';
import CategoryGrid from '../components/CategoryGrid';
function HomeScreen() {
  const navigation = useNavigation();

  const [columns, setColumns] = useState(2);
  function handleCategoryPress(categoryId, title) {
    const mealsInCategory = MEALS.filter(meal => meal.categoryIds.includes(categoryId));
    navigation.navigate('ItemOverView', { meals: mealsInCategory, title });
  }

  return (
    <View style={styles.container}>
       <View style={styles.imageview}>
                <Image
                    style={styles.image}
                    source={require('../assets/cookie.jpg')}
                    resizeMode='cover'
                />
        </View>
        <View style={styles.txtview}>
        <Text style={styles.headertxt}>Discover Our Tasty Treats. Welcome!</Text>
        </View>
        <FlatList 
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryGrid item={item} onPress={() => handleCategoryPress(item.id)} />
        )}
        numColumns={columns}
        key={columns}
        style={{ flex: 0.25 }}
      />
      </View>
  );
}
const styles=StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor:'#3f2f25'
},
  imageview: {
    flex:0.75,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    overflow: 'hidden'
},
image: {
    width: '100%',
    height: '100%',
},
txtview:{
  flex:0.15,
},
headertxt:{
  fontSize:20,
  fontWeight:'bold',
  textAlignVertical: 'center',
  backgroundColor: '#3f2f25',
  fontStyle:'italic',
  textAlign:'center'
},
})
export default HomeScreen;
