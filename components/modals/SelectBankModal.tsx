import { View, Text, useWindowDimensions, TextInput, ScrollView } from 'react-native'
import React from 'react'
import ModalWarpper from './ModalWarpper'
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import { Feather } from '@expo/vector-icons';

const BANKS = ['UBA', 'WEMA', 'First Bank', 'Kuda', 'Access Bank', 'Heritage Bank', 'Plam Pay', 'Opay', 'Fidelity Bank', 'Stanbic IBTC', 'UBA', 'WEMA', 'First Bank', 'Kuda', 'Access Bank', 'Heritage Bank', 'Plam Pay', 'Opay', 'Fidelity Bank', 'Stanbic IBTC'];

const SelectBankModal = ({ isOpen, toggle, setItem }: {
    isOpen: boolean;
    toggle: () => void,
    setItem: (data: string) => void
}) => {
    const { height } = useWindowDimensions();
    const onSelect = (item: string) => {
        setItem(item);
        toggle();
        alert('clicked')
    }
  return (
    <ModalWarpper isOpen={isOpen} toggle={() => toggle()} height={height/100*80}>
        <Box width='100%' height={'100%'} padding='md'>
            <Box width='100%' flexDirection={'row'} justifyContent={'space-between'}>
                <CustomText></CustomText>
                <CustomText variant={'body'}>Select Bank</CustomText>
                <Feather name='x' size={25} color='black' onPress={() => toggle()} />
            </Box>

            <Box height={48} marginTop={'lg'} width={'100%'} flexDirection={'row'} alignItems={'center'} paddingHorizontal={'sm'} borderWidth={1}  borderRadius={25} style={{
                backgroundColor: '#FCFCFD',
                borderColor: '#EAECF0',
            }}>
                <Feather name='search' size={25} color='black' />
                <TextInput placeholder='Search bank' placeholderTextColor={'grey'} style={{ flex: 1, fontFamily: 'BasierRegular', paddingLeft: 10 }} />
            </Box>

            <Box flex={1} marginTop={'lg'}>
                <ScrollView style={{ flex: 1 }}>
                    { BANKS.map((item, index) => (
                        <CustomText key={index.toString()} marginBottom='4xl' onPress={() => onSelect(item)}>{item}</CustomText>
                    )) }
                </ScrollView>
            </Box>
        </Box>
    </ModalWarpper>
  )
}

export default SelectBankModal