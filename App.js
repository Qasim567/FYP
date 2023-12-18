import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
import { auth } from './firebase/firebase.config';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import FavoriteScreen from "./screens/FavrouiteScreen"
import ProfileScreen from './screens/ProfileScreen';
import MealsScreen from './components/MealScreen';
import MealDetailScreen from './components/MealDetailScreen';

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
          borderTopLeftRadius:18,
          borderTopRightRadius:18
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
        name="Profile"
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
  
  return ( 
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
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
