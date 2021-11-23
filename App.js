import React, {useEffect, useState} from 'react';
import { View, Text, Platform, SafeAreaView , FlatList, Image, TouchableWithoutFeedback, ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts } from 'expo-font';
import {AppLoading} from 'expo';
import HomePage from './Home';
import Header from './Header';
import Footer from './Footer';
import { navigationRef } from './RootNavigation';
import NewsDetail from './NewsDetail';


const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer
      ref = {navigationRef}
    >
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} options={{
          header:() => <Header headerDisplay = "Home"/>
        }} />

        <Stack.Screen 
          name="NewsDetails" component={NewsDetail} options={{
          header:() => <Header headerDisplay = "News"/>
        }} />



      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
  };


export default App;