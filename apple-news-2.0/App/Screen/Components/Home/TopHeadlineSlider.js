import { View, Text, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../../Services/GlobalApi';
import Color from '../../../Shared/Color';

export default function TopHeadlineSlider({newsList}) {

  return (
    <View style={{marginTop:10}}>
      <FlatList
        data={newsList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>(
            <TouchableOpacity
              style={{width:Dimensions.get('screen').width*0.80, marginRight:15}}
            >
                <Image source={{uri:item.urlToImage}} 
                    style={{height:Dimensions.get('screen').width*0.77, borderRadius:10}}
                />
                <Text numberOfLines={3} style={{marginTop:10,fontSize:20,fontWeight:'bold'}}>{item.title}</Text>
                <Text style={{marginTop:5,color:Color.primary}}>{item?.source?.name}</Text>
            </TouchableOpacity>
        )}
      />
    </View>
  )
}