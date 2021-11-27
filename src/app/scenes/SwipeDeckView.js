import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image, Button, TouchableOpacity, Alert} from 'react-native';
import { colors } from '../../../styles/colors.js';
import {familyQuestions} from '../components/family/FamilyQuestions';
import {friendsQuestions} from '../components/friends/FriendsQuestions';
import {relationshipQuestions} from '../components/relationship/RelationshipQuestions';
import Card from '../components/Card'
import Swiper from 'react-native-deck-swiper';

// https://reactnativecode.com/rounded-corners-button-example/ - button
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array - Shuffle
// https://github.com/alexbrillant/react-native-deck-swiper


class Deck extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            currentDeck: [],
            currentCard: '',
            color: this.props.navigation.getParam('color'),
            category: this.props.navigation.getParam('category')
        }
    }


    // reasons the api might fail
    // 1. client / user throwing an exception 
    // 2. server is throwing an exception
    // 3. malformed exception

    // this function should make a http request to the card deck endpoint
    // then it will store the response in the phone local storage
    // if the api request failed, then return the default questions 
    // or the questions on local storage

    setDeck() {
        try {
            fetch('http://localhost:8080/api/v1/questions/' + this.props.navigation.getParam('category'))
                .then((response) => response.json())
                .then((responseJson) => {
                    let deck = [];
                    for (let val in responseJson) {
                        deck.push(responseJson[val].question)
                    }
                    this.setState({
                        counter: 0,
                        currentDeck: this.shuffle(deck)
                    })
                    this.setState({
                        currentCard: this.state.currentDeck[this.state.counter]
                    })
                })
        } catch (error) {
            console.log("Error fetching data ------------------", error)
        }
    }

    componentDidMount() {
        this.setDeck()
    }

    shuffle(array) {
  

        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }

      
        return array;
      }




    render() {
        return (
            <View 
            style={styles.container}
            backgroundColor={this.state.color}
            >
                    <Swiper
                    cards= {this.state.currentDeck}
                    renderCard={(card) => {
                        return (
                    <View style={styles.cardContainer}>
                        <Card>
                            <Text style={styles.cardText}>{card}</Text>
                        </Card>
                        </View>
                        )
                    }}
                    onSwipedAll={() => {this.props.navigation.navigate('Home')}}
                    cardIndex={0}
                    backgroundColor={null}
                    stackSeparation={10}
                    cardVerticalMargin={200}
                    cardHorizontalMargin={65}
                    marginTop={150}
                    marginBottom={150}
                    stackSize= {15}>
                    </Swiper>
                </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    cardContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardText: {
        color: colors.black,
        fontSize: 20,
        textAlign: 'center',
        paddingRight: 5,
        paddingLeft: 5
    },
    cardOutOfDeckText: {
        color: colors.black,
        fontSize: 15,
        textAlign: 'right',
        paddingTop: 20,
        paddingRight: 20,
        color: colors.black,
    },
    backButton: {
        marginTop:0,
        paddingTop:9,
        paddingBottom:9,
        paddingLeft: 0,
        paddingRight: 0,
        marginLeft:30,
        marginRight:30,
        backgroundColor: colors.white,
        borderRadius:100,
        borderWidth: 5,
        borderColor: '#fff'
    },
    backButtonText: {
        color: `#6E8EEF`,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    buttonContainer: {
        paddingBottom: 0,
        paddingTop: 600,
        justifyContent: 'flex-end'
    },

});

export default Deck
