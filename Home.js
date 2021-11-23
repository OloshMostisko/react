import { setStatusBarBackgroundColor } from "expo-status-bar";
import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Platform, SafeAreaView , FlatList, Image, TouchableWithoutFeedback, isLoading, ActivityIndicator} from 'react-native';
import { navigationRef } from "./RootNavigation";


function HomePage(navigationRef){
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    const getFaculties = async () => {
       try {
        const response = await fetch('https://cse.bubt.edu.bd/api/faculties/?format=json');
        const json = await response.json();
        setData(json.results);
        print(json.results)
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  
    useEffect(() => {
      getFaculties();
    }, []);



    return (
        <View style={{ flex: 1, padding: 24 }}>
          {isLoading ? <ActivityIndicator/> : (
            <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <Text>{item.title}, {item.releaseYear}</Text>
              )}
            />
          )}
        </View>
      );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        fontWeight: 'bold',
    },
    thumbnail:{
        height: 300,
        width: 300,

    },
    blurb:{
        fontStyle: 'italic',
    },
    listings:{

    }

});

export default HomePage;