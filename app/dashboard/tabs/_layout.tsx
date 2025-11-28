import React from 'react'
import { Tabs } from 'expo-router/tabs'
import { Ionicons } from '@expo/vector-icons'
import theme from '@theme/index'

const Icon = ({ focused, name }: {
    focused: boolean,
    name: string|any,
}) => {
    return (
        <Ionicons name={name} size={24} color={focused ? 'white' : 'gray'} />
    )
}

const _layout = () => {
  return (
    <Tabs safeAreaInsets={{ bottom: 10, left: 10, right: 10, top: 15 }} screenOptions={{
        headerShown: false,
        tabBarStyle: {
            backgroundColor: '#202020',
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
            fontSize: 12,
            textTransform: 'capitalize',
        }
    }}>
        <Tabs.Screen name='home' options={{
            tabBarIcon: ({ focused }) => <Icon focused={focused} name={'home-sharp'} />,
        }} />

        <Tabs.Screen name='send' options={{
            tabBarIcon: ({ focused }) => <Icon focused={focused} name={'paper-plane-sharp'} />,
        }} />

        <Tabs.Screen name='pay' options={{
            tabBarIcon: ({ focused }) => <Icon focused={focused} name={'newspaper-sharp'} />,
        }} />

        <Tabs.Screen name='cards' options={{
            tabBarIcon: ({ focused }) => <Icon focused={focused} name={'card-sharp'} />,
        }} />

        <Tabs.Screen name='more' options={{
            tabBarIcon: ({ focused }) => <Icon focused={focused} name={'list-outline'} />,
        }} />
    </Tabs>
  )
}

export default _layout
