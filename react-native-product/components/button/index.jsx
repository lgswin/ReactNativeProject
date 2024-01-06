import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const MyButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#00bbf9",
    padding: 10,
    marginLeft: 1,
    borderRadius: 6,
  },
  text: {
    fontSize: 12,
    color: "#03045e",
  },
});

export default MyButton;
