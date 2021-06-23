import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image, Button, TouchableOpacity, Alert} from 'react-native';
import { colors } from '../../../styles/colors.js';
import {LinearGradient} from 'expo-linear-gradient';

// https://reactnativecode.com/rounded-corners-button-example/ - button

class QuestionCategories extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // title: 'Decks'
        }
    }

     pressHandler = (color, image, category) => {
        this.props.navigation.navigate('Deck', {
            category: category,
            color: color,
            image: image
          });
    }


    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style ={styles.picContain}>
                    <Image
                    style={styles.back}
                    source={require('../../../assets/clouds.jpg')}
                    />
                </View>
                <View style = {styles.textContain}>
                    <Text style={styles.Title}>Who are you playing with today?</Text>
                    </View>
                {/* <View style={styles.space} /> */}
                <SafeAreaView style= {styles.buttonContainer}>
                        <TouchableOpacity
                        activeOpacity = { .5 }
                        onPress={() => {this.pressHandler(colors.family, '../../../assets/familyWhite.png', 'family')}}
                        >
                            <Image
                            style={styles.image}
                            source={require('../../../assets/family.jpg')}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                        activeOpacity = { .5 }
                        onPress={() => {this.pressHandler(colors.friends, '../../../assets/friendsWhite.png', 'friends')}}
                        >
                            <Image 
                            style={styles.image}
                            source={require('../../../assets/friends.jpg')}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                        activeOpacity = { .5 }
                        onPress={() => {this.pressHandler(colors.relationship, '../../../assets/relationshipWhite.png', 'relationship')}}
                        >
                            <Image 
                            style={styles.image}
                            source={require('../../../assets/relationship.jpg')}/>
                        </TouchableOpacity>
                </SafeAreaView>
                {/* <View style={styles.space} /> */}
            </SafeAreaView>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#6E8EEF',
        flex: 1,
        flexDirection: 'column'
    },
    picContain: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingRight: 50,
        paddingTop: 50
    },
    textContain: {
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 30
    },
    Title: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 20,
    },
    back: {
        width: 260,
        height: 120,
        
    },
    background: {
        backgroundColor: '#6E8EEF',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignContent: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6E8EEF',
        flexDirection: 'column',
        flex: 1,

    },
    space: {
        backgroundColor: '#6E8EEF',
        flex: 1,
    },
    image: {
        resizeMode: 'stretch',
        width: 400,
        height: 140
    },

    buttonText: {
        color: '#6E8EEF',
        textAlign: 'center',
    }
});

export default QuestionCategories;