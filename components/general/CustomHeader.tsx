import { View, Text } from 'react-native'
import React from 'react'
import Box from './Box'
import { Theme } from '@theme/themes';
import { useTheme } from '@shopify/restyle';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import CustomText from './CustomText';

const CustomHeader = ({ title }: {
    route?: string;
    title: string;
}) => {
    const theme = useTheme<Theme>();
    const router = useRouter();
  return (
    <Box width={'100%'} height={100} justifyContent={'flex-end'}>
        <Feather name='arrow-left' color={theme.colors.black} size={25} onPress={() => router.back()} />
        <CustomText variant={'subheader'} color={'black'} fontSize={22} marginTop={'md'}>{title}</CustomText>
    </Box>
  )
}

export default CustomHeader