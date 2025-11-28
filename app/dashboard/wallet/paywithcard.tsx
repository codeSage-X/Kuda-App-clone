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

const Paywithcard = () => {
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
      {/* MODALS */}
      <WhatisPaystack isOpen={showModal} toggle={() => setShowModal(false)} />
      <DepositCompleteModal isOpen={showCompletedModal} toggle={() => setShowCompletedModal(prev => !prev)} />
      <Box width='100%' height={100} justifyContent={'flex-end'} marginTop={'2xl'}>
        <Feather name='arrow-left' color={theme.colors.black} size={25} onPress={() => router.back()} />
        <CustomText variant={'medium'} color={'black'} fontSize={22} marginTop={'md'}>Pay with your card</CustomText>
      </Box>

      <Box width='100%' marginTop={'md'} alignItems={'center'}>
        <Box marginTop={'md'} width={'100%'}>
          <CustomTextInput name='cardName' isPassword={false} label='Name on card' placeholder='John Smith' />
        </Box>

        <Box marginTop={'md'} width={'100%'}>
          <CustomTextInput name='cardNumber' isPassword={false} label='Card  Number' placeholder='XXXX-XXXX-XXXX-XXXX' />
        </Box>

        <Box marginTop={'md'} marginBottom={'md'} width={'100%'} flexDirection={'row'} justifyContent={'space-between'}>
          <Box  flex={0.48}>
            <CustomTextInput name='expDate' isPassword={false} label='Expiry Date' placeholder='09/23' />
          </Box>

          <Box  flex={0.48}>
            <CustomTextInput name='cvv' isPassword={false} label='CVV' placeholder='' />
          </Box>
        </Box>

        <SubmitButton onSubmit={(data) => submit(data)} isLoading={isLoading} label={`Fund Wallet (N100,000)`} width='100%' />

        <Box flexDirection={'row'} justifyContent={'center'} alignItems={'center'} marginTop={'md'}>
          <Feather name='lock' size={25} color='black' />
          <CustomText variant={'body'} marginLeft={'md'} marginRight={'xs'}>Secured by</CustomText>
          <CustomText variant={'medium'} fontSize={18}>PAYSTACK</CustomText>
        </Box>

        <Pressable 
        onPress={() => setShowModal(true)}
        style={{
          height: 38,
          borderRadius: 30,
          borderWidth: 0.3,
          borderColor: theme.colors.primaryColor,
          width: '45%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10
        }}>
          <CustomText variant={'body'}>What is Paystack</CustomText>
        </Pressable>

      </Box>
    </Box>
  )
}

export default Paywithcard