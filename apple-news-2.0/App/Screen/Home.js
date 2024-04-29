import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import CategoryTextSlider from './Components/Home/CategoryTextSlider'
import Color from '../Shared/Color'
import { FontAwesome } from '@expo/vector-icons';
import TopHeadlineSlider from './Components/Home/TopHeadlineSlider';
import HeadlineList from './Components/Home/HeadlineList';
import GlobalApi from '../Services/GlobalApi';

function Home() {
    const [newsList, setNewsList] = useState([]);

    useEffect(()=> {
        getTopHeadline();
    }, [])

    const getTopHeadline = async() => {
        const result=(await GlobalApi.getTopHeadline).data;
        setNewsList(result.articles);
    }

  return (
    <ScrollView>
        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={styles.appName}>
                Breaking News
            </Text>
            <FontAwesome name="bell-o" size={25} color="black" />
        </View>
        
        {/* Category List */}

        <CategoryTextSlider />

        {/* Top headlines Slider */}

        <TopHeadlineSlider newsList={newsList}/>

        {/* Headline list */}

        <HeadlineList newsList={newsList} />

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    appName:{
        fontSize:24,
        fontWeight:'bold',
        color:Color.primary,
        paddingTop:10
    }
})

export default Home