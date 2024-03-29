import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { EvilIcons } from '@expo/vector-icons';

export default function Header() {
    const {user} = useUser();
    return (
        <View>
            {/* User infor sectiion */}
            <View className="flex flex-row items-center gap-4">
                <Image source={{uri:user?.imageUrl}} 
                    className="rounded-full w-12 h-12"
                />
                <View>
                    <Text className="text-[16px]">Welcome</Text>
                    <Text className="text-[20px] font-bold">{user?.fullName}</Text>
                </View>
            </View>

            {/* Search bar section  */}
            <View className="p-2 px-5 mt-5 flex flex-row bg-white rounded-full border-[2px] border-blue-300">
                <EvilIcons name="search" size={24} color="gray" />
                <TextInput placeholder='Search' 
                    className="ml-2 text-[18px]"
                    onChangeText={(value) => console.log(value)}    
                />
            </View>
        </View>
    )
}