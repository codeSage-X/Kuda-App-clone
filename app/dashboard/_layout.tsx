import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { Slot, SplashScreen, Stack } from 'expo-router';


const _layout = () => {
  return (
   <>
    <StatusBar translucent barStyle={'dark-content'} />
     <Stack screenOptions={{ headerShown: false }} />
   </>
  )
}

export default _layout