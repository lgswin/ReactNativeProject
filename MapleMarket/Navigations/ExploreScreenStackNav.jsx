import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProductDetail from '../Apps/Screens/ProductDetail';
import ExploreScreen from '../Apps/Screens/ExploreScreen';

const Stack = createStackNavigator();
export default function ExploreScreenStackNav() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='explore-tab' component={ExploreScreen} 
            options={{
                headerShown:false
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