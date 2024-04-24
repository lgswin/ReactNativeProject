import { View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function PostItem({item}) {

  const navigation=useNavigation();

  return (
    <TouchableOpacity 
    style={{flex : 1}}
    className="flex-1 p-1 rounded-lg border-[1px] border-slate-200 flex-row"
    onPress={()=>navigation.push('product-detail', {
      product:item
    })}
    >
        <View>
          <Image source={{uri:item.image}} 
          className="w-[140px] h-[140px] rounded-lg "
          />
        </View>
        <View className="ml-3">
            <Text className="text-[20px] font-bold mt-2">{item.title}</Text>
            <Text className="text-[20px] font-bold text-blue-500">$ {item.price}</Text>
            <Text className="text-blue-500 bg-blue-200 mt-1 p-1 text-center rounded-full px-1 text-[10px] w-[70px]">{item.category}</Text>
        </View>
    </TouchableOpacity>
  )
}