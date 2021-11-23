import { setStatusBarBackgroundColor } from "expo-status-bar";
import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Platform, SafeAreaView , FlatList, Image, TouchableWithoutFeedback, ActivityIndicator, Touchable, TouchableOpacityBase} from 'react-native';
import { navigationRef } from "./RootNavigation";


function NewsDetail({route, navigation}){
    const [dataLoading, finishLoading] = useState(true);
    const [allPostData, setAllPostData] = useState([]);
    const {url} = route.params;
    const selectedPost = allPostData.find(post => post.url === url);

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e80d0d99817e452ba90e5fa23249e5be')
        .then((response) => response.json())
        .then((json) => setAllPostData(json.articles))
        .catch((error) => console.error())
        .finally(() => finishLoading(false));
    }, []);

    return(
        <View style = {styles.container}>
            <TouchableOpacity
                style = {styles.button}
                opPress = {() => navigation.goback()}
            >
                <Text style = {styles.buttontext}>Go back</Text>

            </TouchableOpacity>
            {dataLoading ? <ActivityIndicator/>: (
                <ScrollView>
                    <Text style = {styles.title}>{selectedPost.title}</Text>
                    <Image 
                    style = {styles.storyimage}
                    source = {{uri: selectedPost.urlToImage}}
                    />
                    <Text style = {styles.blurb}>{selectedPost.description}</Text>
                    <Text style = {styles.content}>{selectedPost.content}</Text>


                </ScrollView>
            )}

        </View>
    )

}

const styles = StyleSheet.create({
    container : {
       
        backgroundColor: '#fff',
        alignItems: 'center',
 
    },
    button : {
        padding: 20,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    buttontext : {
        fontWeight: 'bold'

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        padding : 20     

    },
    storyimage: {
        height: 300,
        width: 300,

    },
    blurb: {

        fontSize: 14,
        fontStyle: "italic",
        padding : 20

    },
    content: {
        flex: 1,
        fontSize : 16,
        paddingTop: 30,
        paddingBottom : 100,
        paddingLeft: 20,
        paddingRight: 20 


    }

});

export default NewsDetail;