import { View, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import ModalWarpper from './ModalWarpper'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import { RoundedButton } from '@component/general/RoundedButton'
import { useTheme } from '@shopify/restyle'
import { Theme } from '@theme/themes'

const WhatisPaystack = ({ isOpen, toggle }: {
    isOpen: boolean;
    toggle: () => void;
}) => {
    const theme = useTheme<Theme>();
    const { height } = useWindowDimensions();
  return (
    <ModalWarpper isOpen={isOpen} toggle={() => toggle()} height={height/100*45} >
        <Box width='100%' padding='md'>
            <CustomText variant={'medium'} fontSize={24} style={{ color: 'black' }}>What is Paystack</CustomText>
            <CustomText variant={'body'} marginTop={'md'}>
            Paystack is a payment gateway, enabling businesses to accept payments securely over the internet. It integrates with websites and mobile applications, allowing merchants to receive payments from customers through various channels. Paystack places a strong emphasis on security to ensure safe and secure transactions.
            </CustomText>
            <Box height={20} />
            <RoundedButton width={'100%'} label={'Got it'} onPress={() => toggle()} backgroundColor={theme.colors.primaryColor} textColor='white' borderRadius={10} height={48} />
        </Box>
    </ModalWarpper>
  )
}

export default WhatisPaystack