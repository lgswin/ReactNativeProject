import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

const App = (props: { title?: string }) => {
  const [count, setCount] = useState(2);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>
        {props.title?.toUpperCase()}
      </Text>
      <Text>Count: {count}</Text>
    </SafeAreaView>
  );
}

App.defaultProps = {
  title: 'Hello React Native'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
