
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName='index' />
  )
}

export default _layout