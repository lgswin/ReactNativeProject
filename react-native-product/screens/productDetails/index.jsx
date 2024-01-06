import {
  ActivityIndicator,
  Text,
  Modal,
  View,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState, useContext } from "react";
import ProductDetailsItem from "../../components/productDetailsItem";
import MyButton from "../../components/button";
import { Context } from "../../context";

export default function ProductDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const { productId } = route.params;

  const { addToFavorites, favoriteItems } = useContext(Context);

  const [loading, setLoading] = useState(false);
  const [productDetailsdata, setProductDetailsdata] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [reason, setReason] = useState("");

  const isCurrentItemIsPresentInFavoriteItemsArray =
    favoriteItems && favoriteItems.length > 0
      ? favoriteItems.filter((item) => item.id === productId)
      : false;

  useEffect(() => {
    setLoading(true);
    async function getDataFromApi() {
      const apiRes = await fetch(`https://dummyjson.com/products/${productId}`);
      const data = await apiRes.json();

      if (data) {
        setProductDetailsdata(data);
        setLoading(false);
      }
    }

    getDataFromApi();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <MyButton
            onPress={() => setModalVisible(true)}
            title={
              isCurrentItemIsPresentInFavoriteItemsArray &&
              isCurrentItemIsPresentInFavoriteItemsArray.length > 0
                ? "Update Favorites"
                : "Add Favorites"
            }
          />
        );
      },
    });
  }, []);

  const handleOnChange = (enteredText) => {
    setReason(enteredText);
  };

  if (loading) {
    return <ActivityIndicator size="large" color={"blue"} />;
  }

  return (
    <View>
      <ProductDetailsItem productDetailsdata={productDetailsdata} />

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
              placeholder="Why you like this product?"
              onChangeText={handleOnChange}
              value={reason}
              style={styles.reasonTextInput}
            />
            <View style={styles.buttonWrapper}>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => {
                  addToFavorites(productId, reason);
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>
                  {isCurrentItemIsPresentInFavoriteItemsArray &&
                  isCurrentItemIsPresentInFavoriteItemsArray.length > 0
                    ? "Update"
                    : "Add"}
                </Text>
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
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  reasonTextInput: {
    width: 150,
    borderRadius: 1,
    borderWidth: 1,
    padding: 10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
