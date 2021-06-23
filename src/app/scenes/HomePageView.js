import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image, Button, TouchableOpacity, Alert} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
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
                    <LinearGradient
                    colors= {['rgba(0,0,0,0.0)', 'transparent']}
                    style= {styles.background}
                    >
                        <Image
                        style={styles.logo}
                        source={require('../../../assets/HMDYK.png')}
                        />
                        <View style={styles.space}/>
                        <View style= {styles.buttonContainer}>
                        <TouchableOpacity
                        style={styles.startButton}
                        activeOpacity = { .5 }
                        onPress= { this.pressHandler}
                        >
                            <Text style={styles.startButtonText}>START </Text>
                        </TouchableOpacity>
                        </View>
                    </LinearGradient>
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
    background: {
        backgroundColor: `#6E8EEF`,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
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
        paddingLeft: 0,
        paddingRight: 0,
        marginLeft:30,
        marginRight:30,
        backgroundColor: colors.white,
        borderRadius:100,
        borderWidth: 5,
        borderColor: '#fff'
    },
    startButtonText: {
        color: `#6E8EEF`,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    buttonContainer: {
        paddingBottom: 100,
    },
    space: {
        height: 40
    }
});

export default HomePage