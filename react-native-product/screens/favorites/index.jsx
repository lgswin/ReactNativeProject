import { FlatList, Text, View, StyleSheet } from "react-native";
import { useContext } from "react";
import { Context } from "../../context";
import FavoriteItem from "../../components/favoriteItem";

export default function Favorites() {
  const { favoriteItems, handleRemoveFavorites } = useContext(Context);

  console.log(favoriteItems);

  if (!favoriteItems.length) {
    return (
      <View style={styles.noFavorites}>
        <Text style={styles.noFavoriteText}>No Favorites Added.</Text>
      </View>
    );
  }

  return (
    <View style={styles.favoriteMainContainer}>
      <FlatList
        data={favoriteItems}
        renderItem={(itemData) => (
          <FavoriteItem
            title={itemData.item.title}
            reason={itemData.item.reason}
            handleRemoveFavorites={handleRemoveFavorites}
            id={itemData.item.id}
          />
        )}
        keyExtractor={(itemData) => itemData.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  favoriteMainContainer: {
    paddingHorizontal: 16,
    paddingVertical: 0,
  },
  noFavorites: {
    padding: 20,
    alignItems: "center",
  },
  noFavoriteText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
});
