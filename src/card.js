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
    const color = this.props.color ? styles[`card__${this.props.color}`] : null

    return (
      <View style={styles.card}>
        <Text style={styles.card__header}>{this.props.header}</Text>
        <Text style={[styles.card__state, color]}>{this.props.state}</Text>
      </View>
    )
  }
}

Card.propTypes = {
  header: React.PropTypes.string,
  state: React.PropTypes.string.isRequired,
  color: React.PropTypes.oneOf(['black', 'red', 'green', 'yellow']),
};
