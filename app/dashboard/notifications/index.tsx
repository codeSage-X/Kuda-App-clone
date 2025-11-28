import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Box from '@component/general/Box'
import { Theme } from '@theme/themes';
import { useTheme } from '@shopify/restyle';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import CustomText from '@component/general/CustomText';
import { Image } from 'expo-image';
import CustomHeader from '@component/general/CustomHeader';

const Notifications = () => {
    const theme = useTheme<Theme>();
    const router = useRouter();
    const [isNotified, setisNotified] = useState(false)
  return (
    <>
    {
     isNotified?
      <>
      </>
      :
      <Box flex={1} bg='white' padding='md'>
        <CustomHeader title='Notifications'/>
        <Box flex={1} justifyContent={'center'} alignItems={'center'}>
            <Image source={require('../../../assets/images/nonoti.png')} contentFit='contain' style={{ width: 120, height: 120 }} />
            <CustomText variant={'subheader'} color={'black'} fontSize={18} marginTop={'md'}>No Notifications yet</CustomText>
            <CustomText variant={'body'} textAlign={'center'}>You don't have anything new yet, but we'll tell you when there's a notification.</CustomText>
        </Box>
      </Box>
    } 
   </>
  )
}

export default Notifications