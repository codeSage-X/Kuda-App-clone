import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Box from '@component/general/Box'
import { Ionicons } from '@expo/vector-icons'

interface IProps {
    borderColor?: string;
    backgroundColor?: string;
    borderRadius?: number;
    value: string;
    onChange: (value: string) => void;
}

const SearchBar = ({ borderColor, backgroundColor = 'white', borderRadius = 10, value, onChange }: IProps) => {
  return (
    <Box width={'100%'} paddingHorizontal={'md'} height={48} borderWidth={1} borderRadius={borderRadius} flexDirection={'row'} alignItems={'center'} style={{
        borderColor,
        backgroundColor
    }}>
        <Ionicons name='search-outline' size={24} color='grey' />
        <TextInput placeholder='Search' value={value} onChangeText={(e) => onChange(e)} style={{
            flex: 1,
            marginLeft: 10,
            fontFamily: 'BasierRegular',
            fontSize: 16
        }} />
    </Box>
  )
}

export default SearchBar