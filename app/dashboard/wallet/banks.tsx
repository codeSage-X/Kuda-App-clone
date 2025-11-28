
import React from 'react'
import Box from '@component/general/Box'
import { Feather } from '@expo/vector-icons'
import { useTheme } from '@shopify/restyle'
import { Theme } from '@theme/themes'
import { useRouter } from 'expo-router'
import CustomText from '@component/general/CustomText'
import { Image } from 'expo-image'
import { RoundedButton } from '@component/general/RoundedButton'
import { useBankState } from 'states/banks'
import { ScrollView } from 'react-native-gesture-handler'
import BankCard from '@component/wallet/BankCard'

const Banks = () => {
    const theme = useTheme<Theme>();
    const router = useRouter();

    const { banks } = useBankState((state) => state);
  return (
    <Box flex={1} paddingHorizontal={'md'} bg={'white'}>
         <Box width='100%' height={100} justifyContent={'flex-end'} marginTop={'2xl'}>
            <Feather name='arrow-left' color={theme.colors.black} size={25} onPress={() => router.back()} />
            <CustomText variant={'medium'} color={'black'} fontSize={22} marginTop={'md'}>Select a bank</CustomText>
        </Box>

        {banks.length < 1 && (
            <Box flex={1} alignItems={'center'} justifyContent={'center'}>
                <Image source={require('../../../assets/images/nobanks.png')} contentFit='cover' style={{ width: 100, height: 100 }} />
                <CustomText variant={'medium'} marginTop={'md'} fontSize={24}>No Banks Linked</CustomText>
                <CustomText variant={'body'} marginBottom={'md'} textAlign={'center'}>No banks linked to your account yet. Add one now for easy transactions</CustomText>
                <RoundedButton label='Add Bank' onPress={() => router.push('/dashboard/wallet/addbank')} width={'100%'} height={48} borderRadius={10} backgroundColor={theme.colors.primaryColor} textColor='white' />
            </Box>
        )}

        {banks.length > 0 && (
            <Box flex={1} marginTop={'md'}>
                <ScrollView style={{ flex: 1 }}>
                    <BankCard />
                </ScrollView>
            </Box>
        )}
    </Box>
  )
}

export default Banks