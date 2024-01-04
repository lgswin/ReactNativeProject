import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

export default function ApiCall() {
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function getDataFromApi() {
      const apiResponse = await fetch("https://dummyjson.com/users");
      const finalData = await apiResponse.json();
      console.log(finalData.users);
      if (finalData) {
        setApiData(
          finalData.users.map(
            (userItem) =>
              `${userItem.firstName} ${userItem.lastName} ${userItem.age}`
          )
        );
        setLoading(false);
      }
    }

    getDataFromApi();
  }, []);

  if (loading) {
    return <ActivityIndicator color={"green"} size="large" />;
  }
  return (
    <View>
      <Text>Api Data</Text>
      <FlatList
        data={apiData}
        renderItem={(itemData) => <Text>{itemData.item}</Text>}
      />
    </View>
  );
}
