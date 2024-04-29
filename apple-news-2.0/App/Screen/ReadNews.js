import { View, Text, Image, TouchableOpacity, Share, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import Color from '../Shared/Color';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';

export default function ReadNews() {
    const news = useRoute().params.news;
    const navigation = useNavigation();
    useEffect(()=> {
        // console.log(news);
    },[])

    const shareNews=()=>{
        Share.share({
            message:news.title+"\nRead More"+news.description
        })
    }
  return (
    <ScrollView style={{backgroundColor:Color.white, flex:1, paddingTop:20}}>
        <View style={{marginTop:10, marginBottom: 10, display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Ionicons name="chevron-back-outline" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{shareNews()}}>
                <Octicons name="share" size={24} color="black" />
            </TouchableOpacity>
        </View>
      <Image source={{uri:news.urlToImage}}
        style={{width:'100%', height:300, borderRadius:15}}
      />
      <Text style={{marginTop:10,fontSize:22,fontWeight:'bold'}}>{news.title}</Text>
      <Text style={{marginTop:10,color:Color.primary,fontSize:16}}>{news.source.name}</Text>
      <Text style={{marginTop:10,fontSize:16,color:Color.gray,lineHeight:30}}>{news.description}</Text>
      <TouchableOpacity onPress={()=>WebBrowser.openAuthSessionAsync(news.url)}>
        <Text style={{marginTop:10,fontSize:16,color:Color.primary,fontWeight:'bold'}}>Read More</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}