import { Pressable } from 'react-native'
import React from 'react'
import Box from '@component/general/Box'
import { Feather } from '@expo/vector-icons'
import { useTheme } from '@shopify/restyle'
import { Theme } from '@theme/themes'
import { useRouter } from 'expo-router'
import CustomText from '@component/general/CustomText'
// import { Image } from 'expo-image'
import { RoundedButton } from '@component/general/RoundedButton'
import useForm from '@hooks/useForm'
import { CustomTextInput } from '@component/form/CustomInput'
import { Checkbox } from 'react-native-ui-lib'
import SelectBankModal from '@component/modals/SelectBankModal'
import BankAddedCompleteModal from '@component/modals/BankAddedSuccesfulModal'

const AddBank = () => {
    const [bank, setBank] = React.useState('Wema');
    const [showBanksModal, setShowBanksModal] = React.useState(false);
    const [showSuccessModal, setShowSucessModal] = React.useState(false);

    const { renderForm } = useForm({
        defaultValues: {
            accountNumber: '',
        }
    });

    const theme = useTheme<Theme>();
    const router = useRouter();
  return renderForm(
    <Box flex={1} paddingHorizontal={'md'} bg={'white'}>

        {/* MODALS */}
        <SelectBankModal isOpen={showBanksModal} toggle={() => setShowBanksModal(prev => !prev)} setItem={(item) => setBank(item)} />
        <BankAddedCompleteModal isOpen={showSuccessModal} toggle={() => setShowSucessModal(prev => !prev)} />

         <Box width='100%' height={100} justifyContent={'flex-end'}>
            <Feather name='arrow-left' color={theme.colors.black} size={25} onPress={() => router.back()} />
            <CustomText variant={'medium'} color={'black'} fontSize={22} marginTop={'md'}>Add Bank Account</CustomText>
        </Box>

        <Box flex={1} marginTop={'md'}>
            <CustomText variant={'body'} marginBottom={'md'} >Link your bank account to withdraw your funds with ease.</CustomText>

            <Box marginBottom={'md'}>
                <CustomText variant={'body'}>Select Bank</CustomText>
                <Pressable 
                onPress={() => setShowBanksModal(true)}
                style={{
                    width: '100%',
                    height: 48,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                }}>
                    <CustomText variant={'xs'}>{bank}</CustomText>
                    <Feather name='chevron-down' size={20} color={'lightgrey'} />
                </Pressable>
            </Box>
            <CustomTextInput name='accountNumber' isPassword={false} label='Account Number' placeholder='' />
            <Box height={10} />
            <Box width='100%' flexDirection={'row'} alignItems={'center'} marginBottom={'md'}>
                <Checkbox />
                <CustomText variant={'body'} marginLeft={'md'}>I confirm the bank account details above</CustomText>
            </Box>
            <RoundedButton label='Add Bank' onPress={() => setShowSucessModal(true)} width={'100%'} height={48} borderRadius={10} backgroundColor={theme.colors.primaryColor} textColor='white' />
        </Box>
    </Box>
  )
}

export default AddBank