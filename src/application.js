/**
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  Platform,
  Image
} from 'react-native';
import Card from './card';
import styles from './styles';

export default class Application extends Component {
  state = {
    cards: [
      {
        header: "...",
        color: "black",
        state: "..."
      }
    ]
  };

  constructor(props: any) {
    super(props);
    fetch('http://localhost:3000')
      .then((response) => response.json())
      .then((cards) => {
        this.setState(cards);
      })
      .catch(() => {
        this.setState({
          cards: [
            {
              header: "Error",
              color: "red",
              state: "Err"
            }
          ]
        })
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>
        <View style={styles.body}>
          {
            this.state.cards.map((card, index) => {
              return <Card key={index} header={card.header} color={card.color} state={card.state} />
            })
          }
        </View>
      </View>
    );
  }
}
