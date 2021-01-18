import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image, Button, TouchableOpacity, Alert} from 'react-native';
import { colors } from '../../../styles/colors.js';

// https://reactnativecode.com/rounded-corners-button-example/ - button

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    pressHandler = () =>  {
       this.props.navigation.navigate('Categories')
    }

    render() {
        return (
                <SafeAreaView style= {styles.container}>
                        <Image
                        style={styles.logo}
                        source={require('../../../assets/newLogo.png')}
                        />
                        <View style={styles.space}/>
                        <View style= {styles.buttonContainer}>
                        <TouchableOpacity
                        style={styles.startButton}
                        activeOpacity = { .5 }
                        onPress= { this.pressHandler}
                        >
                            <Text style={styles.startButtonText}> START </Text>
                        </TouchableOpacity>
                        </View>
                </SafeAreaView>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        flex: 1
    },
    title: {
        flexDirection: 'column',
        fontWeight: 'bold',
        color: colors.primary,
        fontSize: 20,
    },
    logo: {
        width: 350,
        height: 350,
    },
    startButton: {
        marginTop:100,
        paddingTop:15,
        paddingBottom:15,
        paddingLeft: 50,
        paddingRight: 50,
        marginLeft:30,
        marginRight:30,
        backgroundColor: colors.primary,
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    startButtonText: {
        color: colors.white,
        textAlign: 'center',
    },
    buttonContainer: {
        paddingBottom: 100,
    },
    space: {
        height: 40
    }
});

export default HomePage