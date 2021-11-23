import React from 'react';
import { View, Text, Platform, SafeAreaView, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



function footer(){
    return(
        <View style = {styles.footer}>
            <TouchableOpacity 
            style = {styles.button} 
            onPress = {() =>RootNavigation.navigate('test')}
            >
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style = {styles.button} >
                <Text>about</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style = {styles.button} >
                <Text>Quote</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style = {styles.button} >
                <Text>Catalog</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center'

    },
    button: {
        padding : 20,
    }
            
});

export default footer;