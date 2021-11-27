import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image, Button, TouchableOpacity, Alert} from 'react-native';
import { colors } from '../../../styles/colors.js';

// https://reactnativecode.com/rounded-corners-button-example/ - button


class DeckDescription extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: this.props.navigation.getParam('color'),
            // title: this.props.navigation.getParam('category')
        }
    }

    getDescription = () => {

        const category = this.props.navigation.getParam('category')
        let description = ''
        if (category === 'Family') {
            description = 'Remove existing boundaries when sharing details about your life'
        }
        if (category === 'Friends') {
            description = 'We assume we know a lot, but there is more to discover'
        }
        if (category === 'Relationship') {
            description = 'I want us to be transparent'
        }
        return description

    }

    // getImage = () => {
    //     const category = this.props.navigation.getParam('category')
    //     if (category === 'Family') {
    //          return require('../../../assets/familyWhite.png')
    //     }
    //     if (category === 'Friends') {
    //         return require('../../../assets/friendsWhite.png')
    //     }
    //     if (category === 'Relationship') {
    //         return require('../../../assets/relationshipWhite.png')
    //     }
    // }

    // componentDidMount() {
    //     this.props.navigation.setOptions({
    //         title: this.props.navigation.getParam('category')
    //     })
    // }

    render() {
        const category = this.props.navigation.getParam('category')
        return (
                <View style= {styles.container}>

                    <View style= {styles.container}>
                        <Image
                        style={styles.logo}
                        source={this.getImage()}
                        />
                    </View>

                        <View 
                        style={styles.descriptionBox}
                        backgroundColor= {this.state.color}
                        >

                                <View style={styles.descrpitionBoxTextContainer}>

                                    <View style= {styles.titleContainer}>
                                    <Text style={styles.title}>{this.props.navigation.getParam('category')} Deck </Text>
                                    </View>
                                   
                                    <Text style={styles.descrpitionBoxText}> {this.getDescription()} </Text>
                                </View>

                                <View style={styles.buttonContainer}>
                                    <View style={styles.space}/>
                                    <View style= {styles.startButton}>
                                        <Button 
                                        onPress={() => this.props.navigation.navigate('Deck', {
                                            category: category,
                                            color: this.state.color, 
                                        })
                                    }
                                        title= 'START'
                                        color= '#fff'
                                        textAlign= 'center'
                                        />
                                    </View>
                                    <View style={styles.space}/>
                                </View>
                                <View style={{flex: .3}}/>
                      </View>
                 </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        flex: 1,
        flexDirection: 'column',
    },
    logo: {
        padding: 100,
        width: 10,
        height: 10,
    },
    descriptionBox: {
        marginTop:0,
        paddingTop:15,
        width: 400,
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        flex: 2,
        alignContent: 'center',

        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    
    descrpitionBoxTextContainer: {
        flex: 1,
    },
    title: {
        color: colors.white,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    titleContainer: {
        flex: .2,

    },
    descrpitionBoxText: {
        color: colors.white,
        textAlign: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        fontSize: 15
    },
    buttonContainer: {
        flex: .12,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'stretch'
    },
    startButton: {
        borderWidth: 1,
        borderRadius:10,
        borderColor: '#fff',
        flex: 1,
        justifyContent: 'center',
    },
    space: {
        flex: .5
    },
});

export default DeckDescription