import React from 'react';
import {StyleSheet, View, Text, SafeAreaView , Image} from 'react-native';
import logo from './assets/logo.png';

function Header(props){
    return(
        <View style={styles.header}>
            <Image 
            style = {styles.logo} 
            source = {logo}/>
            <View>
                <Text>{props.headerDisplay}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    header : {
        width: '100%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo : {
        width: 80,
        height: 80
    }
});

export default Header;
