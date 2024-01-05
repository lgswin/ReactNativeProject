import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductContext from "./context";
import ProductListing from "./screens/productListing";
import Favorites from "./screens/favorites";
import ProductDetails from "./screens/productDetails";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        options={{
          title: "Product List",
        }}
        name="ProductListing"
        component={ProductListing}
      />
      <Tabs.Screen
        options={{
          title: "Favorites",
        }}
        name="favorites"
        component={Favorites}
      />
    </Tabs.Navigator>
  );
}

export default function App() {
  return (
    <ProductContext>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#fff",
              },
              contentStyle: {
                backgroundColor: "#555555",
              },
            }}
          >
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="BottomTabs"
              component={BottomTabs}
            />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </View>
    </ProductContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
