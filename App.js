import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Entypo from '@expo/vector-icons/Entypo';
import { StyleSheet,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
import { FavoritesProvider } from './context/FavoritesContext';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import FavoriteScreen from "./screens/FavrouiteScreen"
import ProfileScreen from './screens/ProfileScreen';
import MealsScreen from './components/MealScreen';
import MealDetailScreen from './components/MealDetailScreen';
import Home from './API/Home';
import RecipeDetail from './API/RecipeDetail';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: '#351401' },
        tabBarActiveTintColor: '#e4baa1',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: '#191919',
          borderTopWidth: 1,
          borderTopColor: 'lightgray',
          borderTopLeftRadius:10,
          borderTopRightRadius:10
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{ 
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="scan-circle" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Logout"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(Entypo.font);
        await new Promise(resolve => setTimeout(resolve, 2000))
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);
  if (!appIsReady) {
    return null;
  }
  return ( 
    <FavoritesProvider>
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen component={LoginScreen}
            name='Login'
            options={{
              headerShown: false,
            }} />
          <Stack.Screen component={SignupScreen} name='Signup'
            options={{
              headerShown: false,
            }} />
          <Stack.Screen component={MyTabs} name='TabHome'
            options={{
              headerShown: false, 
            }} />
            <Stack.Screen component={MealsScreen} name='ItemOverView'
            options={{
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#3f2f25' },
            }} />
            <Stack.Screen component={MealDetailScreen} name='MealDetail'
            options={{
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#3f2f25' },
            }} />
            <Stack.Screen component={Home} name='Homeie'
            options={{
              headerShown: false
            }} />
            <Stack.Screen component={RecipeDetail} name='Recipe'
            options={{
              headerShown: false
            }} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='light' />
    </View>
    </FavoritesProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
