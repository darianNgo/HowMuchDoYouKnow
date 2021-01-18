import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image, Button, TouchableOpacity, Alert} from 'react-native';
import { colors } from '../../../styles/colors.js';

// https://reactnativecode.com/rounded-corners-button-example/ - button

class QuestionCategories extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

     pressHandler = () => {
        this.props.navigation.navigate('Description')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.space} />
                <SafeAreaView style= {styles.buttonContainer}>
                        <TouchableOpacity
                        style={styles.familyButton}
                        activeOpacity = { .5 }
                        onPress={() => {
                            this.props.navigation.navigate('Description', {
                              category: 'Family',
                              color: '#8fbc8f',
                              image: '../../../assets/familyWhite.png'
                            });
                          }}
                        >
                            <Text style={styles.buttonText}> Family </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={styles.friendsButton}
                        activeOpacity = { .5 }
                        onPress={() => {
                            this.props.navigation.navigate('Description', {
                              category: 'Friends',
                              color: colors.primary,
                              image: '../../../assets/friendsWhite.png'
                            });
                          }}
                        >
                            <Text style={styles.buttonText}> Friends </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={styles.relationshipButton}
                        activeOpacity = { .5 }
                        onPress={() => {
                            this.props.navigation.navigate('Description', {
                              category: 'Relationship',
                              color: '#8b0000',
                              image: '../../../assets/relationshipWhite.png'
                            });
                          }}
                        >
                            <Text style={styles.buttonText}> Relationship </Text>
                        </TouchableOpacity>
                </SafeAreaView>
                <View style={styles.space} />
            </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: colors.white,
        flex: 1,
        flexDirection: 'row'
    },
    buttonContainer: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: colors.white,
        flex: 2,
    },
    space: {
        backgroundColor: colors.white,
        flex: 1,
    },
    familyButton: {
        marginTop:50,
        marginBottom: 50,
        paddingTop:15,
        paddingBottom:15,
        paddingLeft: 50,
        paddingRight: 50,
        backgroundColor: '#8fbc8f',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    friendsButton: {
        marginTop:50,
        marginBottom: 50,
        paddingTop:15,
        paddingBottom:15,
        paddingLeft: 50,
        paddingRight: 50,
        backgroundColor: colors.primary,
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    relationshipButton: {
        marginTop:50,
        marginBottom: 50,
        paddingTop:15,
        paddingBottom:15,
        paddingLeft: 50,
        paddingRight: 50,
        backgroundColor: '#8b0000',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    buttonText: {
        color: colors.white,
        textAlign: 'center',
    }
});

export default QuestionCategories;