import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDoc, getDocs, getFirestore, orderBy, query } from 'firebase/firestore';
import { app } from '../../firebaseConfig';
import LatestItemList from '../../Components/Homescreen/LatestItemList';
import { ScrollView } from 'react-native-gesture-handler';

export default function ExploreScreen() {
  const db=getFirestore(app);
  const [productList,setProductList] = useState([]);
  useEffect(()=> {
    getAllProducts();
  }, [])

  const getAllProducts = async()=> {
    setProductList([]);
    const q = query(collection(db,'UserPost'),orderBy('createdAt', 'desc'));

    const snapshot=await getDocs(q);

    snapshot.forEach((doc)=> {
      setProductList(productList=>[...productList,doc.data()]);
    })
  }
  return (
    <View className="p-5 py-8">
      <Text className="text-[30px] font-bold">ExploreScreen</Text>
      <LatestItemList latestItemList={productList}/>
    </View>
  )
}