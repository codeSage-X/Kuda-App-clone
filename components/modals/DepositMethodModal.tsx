import { View, Text, useWindowDimensions, Pressable } from 'react-native'
import React from 'react'
import ModalWarpper from './ModalWarpper'
import Box from '@component/general/Box';
import { Feather, Ionicons } from '@expo/vector-icons'
import CustomText from '@component/general/CustomText';
import { useRouter } from 'expo-router';

const DepositMethodModal = ({ isOpen, toggle, setType }: {
    isOpen: boolean;
    toggle: () => void;
    setType: (data: 'card'|'bank') => void
}) => {
    const { height } = useWindowDimensions();
    const router = useRouter();

    const selectPayment = (method: 'card'|'bank') => {
        setType(method);
    }

  return (
    <ModalWarpper isOpen={isOpen} toggle={toggle} height={height/100*25}>
        <Box width='100%' height={'100%'} paddingHorizontal={'md'} paddingVertical={'lg'}>
            <Box flexDirection={'row'} justifyContent={'space-between'}>
                <Box flex={0.2} />
                <CustomText variant={'medium'} fontSize={18}>Select Deposit Method</CustomText>
                <Feather name='x' size={20} color={'black'} onPress={toggle} /> 
            </Box>

            <Pressable 
            onPress={() => selectPayment('card')}
            style={{
                width: '100%',
                height: 40,
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20
            }}>
                <Feather name='credit-card' size={25} color="black" />
                <CustomText variant={'medium'} fontSize={18} marginLeft={'2xl'}>Debit Card</CustomText>
            </Pressable>

            <Pressable 
            onPress={() => selectPayment('bank')}
            style={{
                width: '100%',
                height: 40,
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20
            }}>
                <Feather name='home' size={25} color="black" />
                <CustomText variant={'medium'} fontSize={18} marginLeft={'2xl'}>Bank Transfer</CustomText>
            </Pressable>
        </Box>
    </ModalWarpper>
  )
}

export default DepositMethodModal