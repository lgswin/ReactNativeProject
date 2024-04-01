import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Apps/Screens/HomeScreen';
import ExploreScreen from '../Apps/Screens/ExploreScreen';
import AddPostScreen from '../Apps/Screens/AddPostScreen';
import ProfileScreen from '../Apps/Screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import HomeScreenStackNav from './HomeScreenStackNav';

const Tab = createBottomTabNavigator();

export default class TabNavigation extends Component {
  render() {
    return (
      <Tab.Navigator screenOptions={{
        headerShown: false,
        
      }}>
        <Tab.Screen name='home-nav' component={HomeScreenStackNav} 
            options={{
                tabBarLabel: ({color})=>(
                    <Text style={{color:color, fontSize:12, marginBottom: 3}}>Home</Text>
                ), 
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="home" size={size} color={color} />
                )
            }}
        />
        <Tab.Screen name='explore' component={ExploreScreen}
            options={{
                tabBarLabel: ({color})=>(
                    <Text style={{color:color, fontSize:12, marginBottom: 3}}>Explore</Text>
                ), 
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="explore" size={24} color="black" />
                )
            }}
        />
        <Tab.Screen name='addpost' component={AddPostScreen}
            options={{
                tabBarLabel: ({color})=>(
                    <Text style={{color:color, fontSize:12, marginBottom: 3}}>AddPost</Text>
                ), 
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="post" size={24} color="black" />
                )
            }}
        />
        <Tab.Screen name='profile' component={ProfileScreen}
            options={{
                tabBarLabel: ({color})=>(
                    <Text style={{color:color, fontSize:12, marginBottom: 3}}>Profile</Text>
                ), 
                tabBarIcon: ({color, size}) => (
                    <AntDesign name="profile" size={24} color="black" />
                )
            }}
        />
      </Tab.Navigator>
    )
  }
}