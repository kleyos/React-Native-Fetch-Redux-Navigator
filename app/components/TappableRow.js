import React, { Component } from 'react';
import { TouchableHighlight, Text } from 'react-native';

import styles from './MyVerySimpleNavigator.js'

class TappableRow extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.row}
        underlayColor="#D0D0D0"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>
          {this.props.text}
          Where are rows?
        </Text>
      </TouchableHighlight>
    );
  }
}

export default TappableRow;