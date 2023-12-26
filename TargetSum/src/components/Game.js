import React from 'react';
import PropTypes from 'prop-types';

import {View, Text, Button, StyleSheet, Dimensions} from 'react-native';

import RandomNumber from './RandomNumber';
import shuffle from 'lodash.shuffle';

const screenHeight = Dimensions.get('window').height;

class Game extends React.Component {
  static propTypes = {
    randomNumberCount: PropTypes.number.isRequired,
    initialSeconds: PropTypes.number.isRequired,
    onPlayAgain: PropTypes.func.isRequired,
  };

  state = {
    selectedIds: [],
    remainingSeconds: this.props.initialSeconds,
  };

  gameStatus = 'PLAYING';

  randomNumbers = Array.from({length: this.props.randomNumberCount}).map(
    () => 1 + Math.floor(10 * Math.random()),
  );
  target = this.randomNumbers
    .slice(0, this.props.randomNumberCount - 2)
    .reduce((acc, curr) => acc + curr, 0);

  shuffledRandomNumbers = shuffle(this.randomNumbers);

  componentDidMount() {
    console.log('componentDidMount');
    this.intervalId = setInterval(() => {
      this.setState(
        prevState => {
          return {remainingSeconds: prevState.remainingSeconds - 1};
        },
        () => {
          if (this.state.remainingSeconds === 0) {
            clearInterval(this.intervalId);
          }
        },
      );
    }, 1000);
  }

  UNSAFE_componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.intervalId);
  }

  isNumberSelected = numberIndex => {
    return this.state.selectedIds.indexOf(numberIndex) >= 0;
  };

  selectNumber = numberIndex => {
    this.setState(prevState => ({
      selectedIds: [...prevState.selectedIds, numberIndex],
    }));
  };

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
    if (
      nextState.selectedIds !== this.state.selectedIds ||
      nextState.remainingSeconds === 0
    ) {
      this.gameStatus = this.getGameStatus(nextState);
      console.log(this.gameStatus);
      this.gameStatus = 'PLAYING';
      if (this.gameState !== 'PLAYING') {
        console.log('clear??');
        clearInterval(this.intervalId);
      }
    }
  }

  getGameStatus = nextState => {
    const sumSelected = nextState.selectedIds.reduce((acc, curr) => {
      return acc + this.shuffledRandomNumbers[curr];
    }, 0);
    if (nextState.remainingSeconds === 0) {
      return 'LOST';
    }
    if (sumSelected < this.target) {
      return 'PLAYING';
    }
    if (sumSelected === this.target) {
      return 'WON';
    }
    if (sumSelected > this.target) {
      return 'LOST';
    }
  };

  render() {
    console.log('game render');
    const gameStatus = this.gameStatus;
    return (
      <View style={styles.container}>
        <Text style={[styles.target, styles[`STATUS_${gameStatus}`]]}>
          {this.target}
        </Text>
        <View style={styles.randomContainer}>
          {this.shuffledRandomNumbers.map((randomNumber, index) => (
            <RandomNumber
              key={index}
              id={index}
              number={randomNumber}
              isDisabled={
                this.isNumberSelected(index) || gameStatus !== 'PLAYING'
              }
              onPress={this.selectNumber}
            />
          ))}
        </View>
        {this.gameStatus !== 'PLAYING' && (
          <Text style={styles.centerbig}>{gameStatus}</Text>
        )}

        {this.gameStatus !== 'PLAYING' && (
          <Button title="Play again" onPress={this.props.onPlayAgain} />
        )}
        {this.gameStatus === 'PLAYING' && (
          <Text style={styles.centerbig}>{this.state.remainingSeconds}</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerbig: {
    fontSize: 40,
    textAlign: 'center',
  },
  container: {
    backgroundColor: 'yellow',
    flex: 1,
    padding: 50,
    borderWidth: 10,
    borderColor: 'green',
    borderStyle: 'solid',
    borderRadius: 48,
  },

  target: {
    fontSize: 40,
    marginTop: 80,
    margin: 20,
    backgroundColor: '#bbb',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderStyle: 'solid',
  },

  randomContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    height: screenHeight * 0.5,
  },

  STATUS_PLAYING: {
    backgroundColor: '#bbb',
  },
  STATUS_WON: {
    backgroundColor: 'green',
  },
  STATUS_LOST: {
    backgroundColor: 'red',
  },
});

export default Game;
