import React from "react";
import MainScreen from "./app/screens/MainScreen";
import AppLoading from 'expo-app-loading';
import { useFonts, Outfit_400Regular, Outfit_600SemiBold } from '@expo-google-fonts/outfit';
import MessagesScreen from "./app/screens/MessagesScreen";



export default function App() {

  let [fontsLoaded] = useFonts({
    Outfit_400Regular,
    Outfit_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }


  return (
    <MainScreen />

  );
}


