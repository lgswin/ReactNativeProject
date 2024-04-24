import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MyProductsScreen from '../Apps/Screens/MyProductsScreen';
import ProfileScreen from '../Apps/Screens/ProfileScreen';
import ProductDetail from '../Apps/Screens/ProductDetail';

const Stack = createStackNavigator();

export default function ProfileScreenStackNav() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='profile-tab' component={ProfileScreen} 
        options={{
            headerShown: false,
        }}
        />
        <Stack.Screen name='my-product' component={MyProductsScreen} 
        options={{
            headerStyle: {
                backgroundColor:'#3b82f6',
            },
            headerTintColor:'#fff',
            headerTitle:'My Products'
        }}
        />
        <Stack.Screen name='product-detail' component={ProductDetail}
            options={{
                headerStyle: {
                    backgroundColor:'#3b82f6',
                },
                headerTintColor:'#fff',
                headerTitle:'Detail'
            }} />
    </Stack.Navigator>
  )
}