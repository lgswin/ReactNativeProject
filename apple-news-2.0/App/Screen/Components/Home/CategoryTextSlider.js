import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Color from '../../../Shared/Color';

function CategoryTextSlider() {
    const [active, setActive] = useState(1);
    const categoryList = [
        {
            id:1,
            name:'Latest'
        },
        {
            id:2,
            name:'World'
        },
        {
            id:3,
            name:'Latest'
        },
        {
            id:4,
            name:'Sports'
        },
        {
            id:5,
            name:'Life'
        },
        {
            id:6,
            name:'Movie'
        },
    ]

    const onCategoryClick=(id)=> {
        setActive(id);
    }
  return (
    <View style={{marginTop:10}}>
        <FlatList 
            data={categoryList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=>onCategoryClick(item.id)}>
                    <Text style={item.id==active?styles.selectText:styles.unselectText}>{item.name}</Text>
                </TouchableOpacity>
            )}
        />       
    </View>
  )
}

// News API key
// d98bee827c2c4b32bdc791563308f1b4
const styles = StyleSheet.create({
    unselectText: {
        marginRight: 15,
        fontSize: 20, 
        fontWeight: '800',
        color:Color.gray
    },
    selectText: {
        marginRight: 15,
        fontSize: 20, 
        fontWeight: '900',
        color:Color.primary
    }
})

export default CategoryTextSlider