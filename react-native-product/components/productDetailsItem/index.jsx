import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
} from "react-native";

export default function ProductDetailsItem({ productDetailsdata }) {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.textStyle}>{productDetailsdata.title}</Text>
      </View>
      <ScrollView>
        <View style={styles.constainer}>
          <Text style={styles.subTitle}>- Reason</Text>
          <Text style={styles.textStyle}>
            "{productDetailsdata.description}"
          </Text>
          <Text style={styles.subTitle}>- Price</Text>
          <Text style={styles.textStyle}>${productDetailsdata.price}</Text>
          <Text style={styles.subTitle}>- Rating</Text>
          <Text style={styles.textStyle}>{productDetailsdata.rating}</Text>
          <Text style={styles.subTitle}>- Category</Text>
          <Text style={styles.textStyle}>{productDetailsdata.category}</Text>
          <Image
            style={styles.imageContanier}
            source={{ uri: productDetailsdata.thumbnail }}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContanier: {
    width: "100%",
    height: 300,
    borderWidth: 1,
    backgroundColor: "black",
  },
  titleContainer: {
    marginTop: 0,
    paddingTop: 25,
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#cbf3f0",
  },
  constainer: {
    height: "100%",
    padding: 10,
    paddingHorizontal: 15,
    borderWidth: 0,
    margin: 0,
    borderColor: "#88da9e",
    backgroundColor: "#c7f9cc",
  },
  subTitle: {
    color: "#22223b",
    fontSize: 20,
    paddingBottom: 10,
    fontWeight: "bold",
  },
  textStyle: {
    color: "#22223b",
    fontSize: 20,
    paddingBottom: 20,
  },
});
