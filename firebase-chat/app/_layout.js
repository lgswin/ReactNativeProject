import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import {Slot, useRouter, useSegments} from "expo-router";
import "../global.css";
import { AuthContextProvider, useAuth } from '../context/authContext';
import { MenuProvider } from 'react-native-popup-menu';

const MainLayout = () => {
  const {isAuthenticated} = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(()=>{
    // check if user is authenticated or not
    if(typeof isAuthenticated === 'undefined') return;
    
    // checking if the current route belongs to the "app" section 
    const inApp = segments[0]=='(app)';
    if(isAuthenticated && !inApp) { // 
      console.log("isAuthenticated is true");
      // redirect to home
      router.replace('home');
    } else if(isAuthenticated == false) {
      console.log("isAuthenticated is false");
      // redirect to signIn
      router.replace('SignIn');
    }
  }, [isAuthenticated])

  return <Slot />
}

export default function RootLayout() {
  console.log("RootLayout-");
  return (
    <MenuProvider>
      <AuthContextProvider>
        <MainLayout />
      </AuthContextProvider>
    </MenuProvider>
  )
}