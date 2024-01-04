import { initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyC2Yr2TYPkFYQ2luFpsbd2jfCEw8KkN0X0",
  authDomain: "final-year-project-33695.firebaseapp.com",
  projectId: "final-year-project-33695",
  storageBucket: "final-year-project-33695.appspot.com",
  messagingSenderId: "166491535750",
  appId: "1:166491535750:web:e47ba25edb86780de0d407"
});

export const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(AsyncStorage),
});