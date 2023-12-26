import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableHighlight, Text, StyleSheet} from 'react-native';

class RandomNumber extends React.Component {
  static propTyeps = {
    id: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired,
  };

  handlePress = () => {
    console.log('handlePress');
    if (this.props.isDisabled) return;
    this.props.onPress(this.props.id);
  };

  render() {
    return (
      <TouchableHighlight onPress={this.handlePress}>
        <Text style={[styles.random, this.props.isDisabled && styles.disabled]}>
          {this.props.number}
        </Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  random: {
    width: 100,
    height: 50,
    backgroundColor: '#bbb',
    marginHorizontal: 15,
    marginVertical: 25,
    lineHeight: 50,
    fontSize: 35,
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 10,
  },

  disabled: {
    opacity: 0.3,
  },
});

export default RandomNumber;
