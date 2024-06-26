import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import CategoryTextSlider from './Components/Home/CategoryTextSlider'
import Color from '../Shared/Color'
import { FontAwesome } from '@expo/vector-icons';
import TopHeadlineSlider from './Components/Home/TopHeadlineSlider';
import HeadlineList from './Components/Home/HeadlineList';
import GlobalApi from '../Services/GlobalApi';

function Home() {
    const [newsList, setNewsList] = useState([]);
    const [loading, setLoading] = useState([]);

    useEffect(()=> {
        // getTopHeadline();
        getNewsByCategory('latest');
    }, [])

    const getTopHeadline = async() => {
        const result=(await GlobalApi.getTopHeadline).data;
        setNewsList(result.articles);
    }

    const getNewsByCategory = async(category)=> {
        // console.log(category.toLowerCase());
        setLoading(true);
        const result=(await GlobalApi.getByCategory(category.toLowerCase())).data;
        setNewsList(result.articles);
        setLoading(false);
    }

  return (
    <ScrollView style={{backgroundColor:Color.white}}>
        
        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={styles.appName}>
                Breaking News
            </Text>
            <FontAwesome name="bell-o" size={25} color="black" />
        </View>
        
        {/* Category List */}

        <CategoryTextSlider selectCategory={(category) => getNewsByCategory(category)} />

        {loading
        ?<ActivityIndicator style={{marginTop:Dimensions.get('screen').height*0.40}} size={'large'} color={Color.primary}/>
        :<View>
            {/* Top headlines Slider */}

            <TopHeadlineSlider newsList={newsList}/>

            {/* Headline list */}

            <HeadlineList newsList={newsList} />
        </View>}
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