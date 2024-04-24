import { View, Text, Image, TouchableOpacity } from 'react-native'
import * as WebBrowser from "expo-web-browser";
import React from 'react'
import { useWarmUpBrowser } from '../../hooks/useWamUpBrowser';
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    const onPress = React.useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();
     
          if (createdSessionId) {
            setActive({ session: createdSessionId });
          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error("OAuth error", err);
        }
      }, []);

  return (
    <View>
        <Image source={require('./../../assets/images/waterloo.jpg')} 
            className = "w-full h-[400px] object-cover"    
        />
        <View className="p-8 bg-amber-100 mt-[-10px] rounded-3xl shadow-md">
            <Text className="text-[30px] font-bold text-center">KW 둥근 마켓</Text>
            <Text className="text-[18px] text-slate-500 mt-6">근처 사람들에게 물건을 빨리 빨리 팔수 있어요.  많이 많이 애용해주세요.</Text>

            <TouchableOpacity onPress={onPress} className="p-4 bg-blue-500 rounded-full mt-20">
                <Text className="text-white text-center text-[18px]">Get Started</Text>
            </TouchableOpacity>
        </View>
        
        <Text className="text-center text-[20px]">something more...</Text>
    </View>
  )
}