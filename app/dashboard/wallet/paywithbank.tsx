import { Pressable } from 'react-native'
import React from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import { Feather } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { useTheme } from '@shopify/restyle'
import { Theme } from '@theme/index'
import useForm from '@hooks/useForm'
import { cardSchema } from '@services/validation'
import { CustomTextInput } from '@component/form/CustomInput'
import { SubmitButton } from '@component/form/CustomButton'
import WhatisPaystack from '@component/modals/WhatisPaystack'
import DepositCompleteModal from '@component/modals/DepositCompleteModal'

const Paywithbank = () => {
  const [showModal, setShowModal]= React.useState(false);
  const [showCompletedModal, setShowCompletedModal] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const theme = useTheme<Theme>();
  const router = useRouter();

  const { renderForm} = useForm({
    defaultValues: {
      cardName: '',
      cardNumber: '',
      cvv: '',
      expDate: ''
    },
    validationSchema: cardSchema,
  });

  const submit = (data: any) => {
    setIsLoading(true);
    setTimeout(() => {
      setShowCompletedModal(true);
      setIsLoading(false);
    }, 4000);
  }
  return renderForm(
    <Box flex={1} paddingHorizontal={'md'} bg='white'>

      <Box width='100%' height={100} marginTop={'3xl'} justifyContent={'flex-end'}>
        <Feather name='arrow-left' color={theme.colors.black} size={25} onPress={() => router.back()} />
        <CustomText variant={'medium'} color={'black'} fontSize={22} marginTop={'md'}>Bank Transfer</CustomText>
      </Box>

      <CustomText variant='body' marginTop={'md'}>Proceed to your bank app to complete the transfer</CustomText>

      <Box width={'100%'} flexDirection={'row'} justifyContent={'space-between'} marginTop={'md'}>
        <Box>
          <CustomText variant={'body'}>Account Number</CustomText>
          <CustomText variant={'medium'}>90827382838</CustomText>
        </Box>

        <Pressable style={{
          width: 80,
          height: 48,
          borderWidth: 2,
          borderColor: '#A0BDF9',
          backgroundColor: '#EAF1FE',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row'
        }}>
          <Feather name='copy' color={'black'} size={20} />
          <CustomText>Copy</CustomText>
        </Pressable>
      </Box>

      <Box marginTop={'md'}>
          <CustomText variant={'body'}>Bank Name</CustomText>
          <CustomText variant={'medium'}>Paystack Titan</CustomText>
      </Box>

      <Box marginTop={'md'}>
          <CustomText variant={'body'}>Account Name</CustomText>
          <CustomText variant={'medium'}>John bossco</CustomText>
      </Box>

    </Box>
  )
}

export default Paywithbank