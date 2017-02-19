/**
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import styles from './styles'

export default class Card extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.card__header}>{this.props.header}</Text>
        <Text style={[styles.card__state]}>{this.props.state}</Text>
      </View>
    )
  }
}
