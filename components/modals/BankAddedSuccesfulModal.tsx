import { View, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import ModalWarpper from './ModalWarpper'
import Box from '@component/general/Box'
import { Image } from 'expo-image'
import CustomText from '@component/general/CustomText'
import { RoundedButton } from '@component/general/RoundedButton'
import { useTheme } from '@shopify/restyle'
import { Theme } from '@theme/themes'
import { useRouter } from 'expo-router'

const BankAddedCompleteModal = ({ isOpen, toggle }: { isOpen: boolean, toggle: () => void}) => {
    const { height } = useWindowDimensions();
    const theme = useTheme<Theme>();
    const router = useRouter();

    const close = () => {
        toggle();
        // router.push('/dashboard/homepage/wallet/');
    }
    
  return (
    <ModalWarpper isOpen={isOpen} toggle={() => {}} height={height/100*100} isRounded={false}>
        <Box flex={1} justifyContent={'center'} alignItems={'center'} paddingHorizontal={'md'}>
            <Image source={require('../../assets/images/bankAdded.png')} contentFit='contain' style={{ width: 200, height: 200 }} />
            <CustomText variant={'medium'} fontSize={24} marginTop={'md'}>Bank account added successful</CustomText>
            <CustomText fontSize={16} marginBottom={'md'}>Bank account successfully added to your account.</CustomText>
            <RoundedButton width={'100%'} height={48} onPress={() => close()} label={'Withdraw money'} backgroundColor={theme.colors.primaryColor} textColor='white' />
        </Box>
    </ModalWarpper>
  )
}

export default BankAddedCompleteModal