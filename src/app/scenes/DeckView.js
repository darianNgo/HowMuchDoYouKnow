import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image, Button, TouchableOpacity, Alert} from 'react-native';
import { colors } from '../../../styles/colors.js';
import {familyQuestions} from '../components/family/FamilyQuestions';
import {friendsQuestions} from '../components/friends/FriendsQuestions';
import {relationshipQuestions} from '../components/relationship/RelationshipQuestions';
import FlipCard from "react-native-flip-card";

// https://reactnativecode.com/rounded-corners-button-example/ - button
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array - Shuffle


class Deck extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            isflipped: false,
            currentDeck: this.getDeck(),
            currentCard: '',
            color: this.props.navigation.getParam('color')
        }
    }

    flip = () => {
        this.setState({isflipped: !this.state.isflipped})
    }


    next = () =>  {
        // this.checkBounds
        this.setState({
            currentCard: this.state.currentDeck[this.state.counter += 1],
            counter: this.state.counter++
        })
        this.flip
    }

    prev = () =>  {
        // this.checkBounds
        this.setState({
            currentCard: this.state.currentDeck[this.state.counter -= 1],
            counter: this.state.counter--
        })
        this.flip
    }


    getDeck = () => {
        const category = this.props.navigation.getParam('category')
        let familyDeck = familyQuestions
        let friendsDeck = friendsQuestions
        let relationshipDeck = relationshipQuestions

        if (category === 'Family') {
            return familyDeck
        }
        if (category === 'Friends') {
            return friendsDeck
        }
        if (category === 'Relationship') {
            return relationshipDeck
        }
        return []
    }

    checkBounds = () => {
        if (this.state.counter > this.state.currentDeck.length) {
            this.setState({
                counter: 0,
                currentCard: this.state.currentDeck[0]
            })
        }
        if (this.state.counter < this.state.currentDeck.length) {
            this.setState({
                counter: this.state.currentDeck.length,
                currentCard: this.state.currentDeck[this.state.currentDeck.length]
            })
        }
    }

    componentDidMount() {
        this.setState({
            counter: 0,
            currentDeck: this.shuffle(this.getDeck())
        })
        this.setState({
            currentCard: this.state.currentDeck[this.state.counter]
        })
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


    getImage = () => {
        const category = this.props.navigation.getParam('category')
        if (category === 'Family') {
             return require('../../../assets/familyGreen.png')
        }
        if (category === 'Friends') {
            return require('../../../assets/friendsBlue.png')
        }
        if (category === 'Relationship') {
            return require('../../../assets/relationshipRed.png')
        }
    }


    render() {
        return (
            <View style={styles.container}>

                <View style={styles.spacer}>
                </View>

                <View style= {styles.cardContainer}> 

                <View style={styles.space2}/>

                    <FlipCard
                    friction={10}
                    perspective={1000}
                    flipHorizontal={true}
                    flipVertical={false}
                    flip={this.state.isflipped}
                    clickable={true}
                    >

                        <View 
                        style= {styles.face}
                        backgroundColor= {this.state.color}
                        >
                        <Image
                        style={styles.logo}
                        source={this.getImage()}
                        />
                        </View>

                        <View
                        style= {styles.back}
                        backgroundColor= {this.state.color}
                        >
                            <Text style={styles.cardText}> {this.state.currentCard} </Text>
                        </View>

                    </FlipCard>

                    <View style={styles.space2}/>

                </View>

                <View style={styles.spacer}>
                <Text style= {styles.cardOutOfDeckText}>
                         {this.state.counter + 1} / {this.state.currentDeck.length}
                 </Text>
                </View>

                <View style= {styles.buttonContainer}>

                <View style={styles.space}/>

                    <TouchableOpacity
                    style={styles.prevButton}
                    activeOpacity = { .5 }
                    onPress= {this.prev}
                    >

                        <Text style={styles.nextButtonText}> PREV </Text>
                    </TouchableOpacity>

                    <View style={styles.space}/>

                    <TouchableOpacity
                    style={styles.nextButton}
                    activeOpacity = { .5 }
                    onPress= {this.next}
                    >

                        <Text style={styles.nextButtonText}> NEXT </Text>
                    </TouchableOpacity>
                    <View style={styles.space}/>
                            
                </View>
                <View style={styles.spacer}/>

            </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        backgroundColor: colors.white,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'

    },
    cardContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    face: {
        backgroundColor: colors.primary,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius:10,
        flex: 1
    },
    back: {
        backgroundColor: colors.primary,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius:10,
        flex: 1
    },
    cardText: {
        color: colors.white,
        fontSize: 24,
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
    prevButton: {
        marginRight: 0,
        borderWidth: 1,
        borderRadius:10,
        paddingTop:12,
        paddingBottom:12,
        borderColor: 'dodgerblue',
        flex: 1,
    },
    space: {
        width: 45,
    },
    space2: {
        width: 2,
    },
    nextButton: {
        marginLeft: 0,
        borderWidth: 1,
        borderRadius:10,
        paddingTop:12,
        paddingBottom:12,
        borderColor: 'dodgerblue',
        flex: 1
    },
    nextButtonText: {
        color: colors.primary,
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: .5,
    },
    spacer: {
        flex: 1,
    },
    logo: {
        flex: 1,
        width: 200,
        height: 200
    }
});

export default Deck
