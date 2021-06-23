import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image, Button, TouchableOpacity, Alert} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { colors } from '../../../styles/colors.js';

// https://reactnativecode.com/rounded-corners-button-example/ - button

class AboutPage extends React.Component {

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
                    ></LinearGradient>
                     <Image
                        style={styles.logo}
                        source={require('../../../assets/clouds.jpg')}
                        />
                        <View style= {styles.space}></View>
                        
                    <Text style = {styles.title}>About How Much Do You Know</Text> 
                    <View style = {styles.aboutContainer}>
                    <Text style = {styles.aboutText}>How Much Do You Know is a question card game that asks introspective questions
                        with the motive to strengthen the relationships between the users. Whether you are 
                        playing with family members, friends, or a significant other there are questions
                        that will help you find more about the people around you. This game is also meant
                        for breaking the ice situations when meeting someone new.
                    </Text>
                    </View>
                    <Text style = {styles.title}>Warning</Text> 
                    <View style = {styles.warningContainer}
                    >
                    <Text style = {styles.aboutText}> Certain questions may lead to awkward, emotional, or difficult situations.
                    </Text>
                    </View>
                    <Text style = {styles.title}>Thank You</Text> 
                    <View style = {styles.warningContainer}
                    >
                    <Text style = {styles.aboutText}> Thank you to the individuals who helped create this application 
                    </Text>
                    </View>
                    
                </SafeAreaView>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',

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
        color: colors.white,
        fontSize: 15,
        textAlign: 'left',
    },
    logo: {
        width: 200,
        height: 100,
        
    },
    
    aboutText: {
        color: colors.white,
        textAlign: 'left',
        fontSize: 15
    },
    aboutContainer: {
        paddingBottom: 30,
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 10,
    },

    warningContainer: {
        paddingBottom: 30,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 10,
    },
    space: {
        height: 100
    }
});

export default AboutPage