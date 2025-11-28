
import React from 'react'
import Box from '@component/general/Box'
import { Feather } from '@expo/vector-icons'
import CustomText from '@component/general/CustomText'
import { Theme } from '@theme/themes'
import { useTheme } from '@shopify/restyle'
import { useRouter } from 'expo-router'
import { RoundedButton } from '@component/general/RoundedButton'
import WithdrawalSuccessModal from '@component/modals/WithdrawlSuccessModal'

const VerifyOtp = () => {
    const [showModal, setShowModal] = React.useState(false);
    const theme = useTheme<Theme>();
    const router = useRouter();
  return (
   <Box flex={1} padding='md' bg='white'>
        {/* MODALS */}
        <WithdrawalSuccessModal isOpen={showModal} toggle={() => setShowModal(prev => !prev)} />

        <Box width='100%' height={100} justifyContent={'flex-end'} marginTop={'2xl'}>
            <Feather name='arrow-left' color={theme.colors.black} size={25} onPress={() => router.back()} />
            <CustomText variant={'medium'} color={'black'} fontSize={22} marginTop={'md'}>Withdraw Funds</CustomText>
        </Box>

        <CustomText variant={'body'}>An OTP was sent to 08132581551 kindly enter the code below to complete your withdrawal</CustomText>

        <Box width={'100%'} flexDirection={'row'} justifyContent={'center'} marginTop={'4xl'} marginBottom={'md'}>
            <Box width={48} height={48} borderRadius={8} borderWidth={1} marginRight={'md'} style={{ borderColor: '#D0D5DD' }} />
            <Box width={48} height={48} borderRadius={8} borderWidth={1} marginRight={'md'} style={{ borderColor: '#D0D5DD' }} />
            <Box width={48} height={48} borderRadius={8} borderWidth={1} marginRight={'md'} style={{ borderColor: '#D0D5DD' }} />
            <Box width={48} height={48} borderRadius={8} borderWidth={1} marginRight={'md'} style={{ borderColor: '#D0D5DD' }} />
            <Box width={48} height={48} borderRadius={8} borderWidth={1} marginRight={'md'} style={{ borderColor: '#D0D5DD' }} />
            
        </Box>

        <RoundedButton onPress={() => setShowModal(true)} label='Contine' width={'100%'} height={48} textColor='white' backgroundColor={theme.colors.primaryColor} />
   </Box>
  )
}

export default VerifyOtp