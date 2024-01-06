import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Modal,
  TextInput,
} from "react-native";
import { useState } from "react";
export default function FavoriteItem({
  title,
  reason,
  handleRemoveFavorites,
  id,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.favoriteItemContainer}>
      <Pressable onPress={() => setModalVisible(true)}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>Review: {reason}</Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              placeholder="Would you like to delete?"
              style={styles.reasonTextInput}
            />
            <View style={styles.buttonWrapper}>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => {
                  handleRemoveFavorites(id);
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Delete</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  favoriteItemContainer: {
    padding: 10,
    backgroundColor: "#386641",
    marginBottom: 5,
    justifyContent: "center",
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 2,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonWrapper: {
    flexDirection: "row",
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    margin: 5,
  },
  buttonOpen: {
    backgroundColor: "#A194FF",
  },
  buttonClose: {
    backgroundColor: "#1196F3",
  },
});
