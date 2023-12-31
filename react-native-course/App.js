import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import MyButton from "./components/button";
import ApiCall from "./components/apicall";

export default function App() {
  const [value, setValue] = useState("");
  const [listOfNotes, setListOfNotes] = useState([]);

  function handleChangeText(getEnteredText) {
    setValue(getEnteredText);
  }

  function handleOnPressButton() {
    if (value !== "") {
      setListOfNotes((currentNotes) => [...currentNotes, value]);
    }
    setValue("");
  }

  function handleClear() {
    setListOfNotes([]);
    setValue("");
  }

  function handleRemoveItem(currentIndex) {
    let cpyListOfNotes = [...listOfNotes];
    cpyListOfNotes = cpyListOfNotes.filter(
      (_, index) => currentIndex !== index
    ); // filter returns a new array containing only that pass this test.
    setListOfNotes(cpyListOfNotes);
  }

  return (
    <View
      style={{ padding: 10, paddingHorizeontal: 15, flex: 1, marginBottom: 30 }}
    >
      <View style={styles.container}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>Show my input</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={handleChangeText}
            style={styles.input}
            placeholder="Add your note here"
            value={value}
          />
          <MyButton onPress={handleOnPressButton} title="Add Note" />
          <MyButton onPress={handleClear} title="Clear" />
        </View>

        <View style={styles.listContainer}>
          {/* <ScrollView>
            {listOfNotes.map((item, index) => (
              <Text style={styles.listItem} key={`item${index}`}>
                {item}
              </Text>
            ))}
          </ScrollView> */}
          {/* ScrollView renders all list at once while FlatList renders only renderItem */}
          <FlatList
            data={listOfNotes}
            renderItem={(itemData) => (
              <Pressable onPress={() => handleRemoveItem(itemData.index)}>
                <Text style={styles.listItem}>{itemData.item}</Text>
              </Pressable>
            )}
          />
        </View>
      </View>
      <View style={styles.apiContainer}>
        <ApiCall />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: "1",
    alignItems: "center",
    marginTop: 50,
    marginBotton: 10,
    padding: 5,
  },
  titleBox: {
    width: "100%",
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    color: "white",
    margin: 5,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
  inputContainer: {
    flexDirection: "row",
    paddingBottom: 30,
    borderBottomWidth: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    flex: 1,
    padding: 5,
  },
  listContainer: {
    paddingTop: 30,
  },
  listItem: {
    borderRadius: 1,
    borderColor: "red",
    backgroundColor: "#333333",
    padding: 10,
    marginBottom: 10,
    color: "#fff",
    fontSize: 20,
    width: 400,
  },
  apiContainer: {
    flex: 2,
  },
});
