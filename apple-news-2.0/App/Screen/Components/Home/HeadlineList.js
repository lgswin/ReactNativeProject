import { View, Text, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import Color from '../../../Shared/Color'
import { useNavigation } from '@react-navigation/native';

export default function HeadlineList({newsList}) {
    const filteredNewsList = newsList.filter(item => item.content !== '[Removed]' && item.urlToImage !== null);

    const navigation = useNavigation(); 
    console.log(filteredNewsList);
  return (
    <View>
      <FlatList
        data={filteredNewsList}
        renderItem={({item})=>(
            <View>
                 <View style={{height:1, backgroundColor:Color.lightGray, marginBottom:10}}>
                </View>
                <TouchableOpacity 
                    onPress={()=>navigation.navigate('read-news',{news:item})}
                    style={{marginBottom:10, display:'flex',flexDirection:'row'}}>
                    <Image source={{uri:item.urlToImage}} 
                        style={{width:130,height:130,borderRadius:10}}
                    />
                    <View style={{marginRight:135,marginLeft:10}}>
                        <Text numberOfLines={4} style={{fontSize:18,fontWeight:'bold'}}>{item.title}</Text>
                        <Text style={{color:Color.primary,marginTop:6}}>{item?.source?.name}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )}
      />
    </View>
  )
}