import { FlatList, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../Components/Homescreen/Header'
import Slider from '../../Components/Homescreen/Slider'
import {collection, getDocs, getFirestore, orderBy} from 'firebase/firestore';
import {app} from '../../firebaseConfig';
import Categories from '../../Components/Homescreen/Categories';
import LatestItemList from '../../Components/Homescreen/LatestItemList';

export default function HomeScreen() {
  
  const db = getFirestore(app);

  const [sliderList,setSliderList]=useState([]);
  const [categoryList,setCategoryList]=useState([]);
  const [latestItemList,setLatestItemList]=useState([]);
  useEffect(()=>{
    getSliders();
    getCategoryList();
    getLatestItemList();
  },[])

  const getSliders= async ()=>{
    setSliderList([]);
    const querySnapshot = await getDocs(collection(db, "Sliders"));
    querySnapshot.forEach((doc) => {
      //console.log(doc.id, " => ", doc.data());
      setSliderList(sliderList=>[...sliderList,doc.data()]);
    });

  }

  const getCategoryList=async()=>{
    setCategoryList([]);
    const querySnapshot = await getDocs(collection(db, 'Category'));

    querySnapshot.forEach((doc)=> {
        // console.log("Docs:", doc.data());
        setCategoryList(categoryList=>[...categoryList,doc.data()]);
    })
}

const getLatestItemList=async()=>{
  setLatestItemList([]);
  const querySnapshot=await getDocs(collection(db, 'UserPost'), orderBy('createdAt', 'desc')); 
  querySnapshot.forEach((doc) => {
    console.log("Docs:", doc.data());
    setLatestItemList(latestItemList=>[...latestItemList,doc.data()]);
  })
}

  return (
    <FlatList
      ListEmptyComponent={  
        <View className="py-8 px-6 bg-white flex-1">
            <Header />
            <Slider sliderList={sliderList}/>
            <Categories categoryList={categoryList}/>
            <LatestItemList latestItemList={latestItemList} heading={'Latest Items'}/>
        </View>
      }
      />
  )
}
