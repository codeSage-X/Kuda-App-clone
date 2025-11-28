import { View, Text, Pressable } from 'react-native'
import React, { ReactNode } from 'react'
import Box from '@component/general/Box'
import { Feather } from '@expo/vector-icons'
import { useTheme } from '@shopify/restyle'
import { Theme } from '@theme/index'
import CustomText from '@component/general/CustomText'
import { useRouter } from 'expo-router'
import { PrimaryButton } from '@component/general/CustomButton'
import { RoundedButton } from '@component/general/RoundedButton'
import ModalWarpper from '@component/modals/ModalWarpper'
import DepositMethodModal from '@component/modals/DepositMethodModal'

type IKeypadDetails = {
    label: string;
    number: string;
    character: string;
    hasIcon?: boolean;
    icon?: ReactNode;
}

const KeypadDetails: IKeypadDetails[] = [
    {
        label: '1',
        number: '1',
        character: '1',
        hasIcon: false,
    },
    {
        label: '2',
        number: '2',
        character: '2'
    },
    {
        label: '3',
        number: '3',
        character: '3'
    },
    {
        label: '4',
        number: '4',
        character: '4'
    },
    {
        label: '5',
        number: '5',
        character: '5'
    },
    {
        label: '6',
        number: '6',
        character: '6'
    },
    {
        label: '7',
        number: '7',
        character: '7'
    },
    {
        label: '8',
        number: '8',
        character: '8'
    },
    {
        label: '9',
        number: '9',
        character: '9'
    },
    {
        label: '.',
        number: '.',
        character: '.'
    },
    {
        label: '0',
        number: '0',
        character: '0'
    },
    {
        label: '1',
        number: '1',
        character: '1',
        hasIcon: true,
        icon: <Feather name='delete' size={25} color='grey' />
    },
];

const Withdraw = () => {
    const [amount, setAmount] = React.useState('0.00');
    const [showModal, setShowModal] = React.useState(false);
    const [method, setMethod] = React.useState<'card'|'bank'>('card')
    const theme = useTheme<Theme>();
    const router = useRouter();

    const addNumber = (num: string) => {
        if (amount === '0.00') {
            setAmount(num)
        } else {
            const newAmount = `${amount}${num}`;
            setAmount(newAmount);
        }
    }

    const deleteNumber = () => {
    if (amount === '0.00' || amount === '0' || amount === '') {
        setAmount('0.00');
    } else {
        const newAmount = amount.substring(0, amount.length - 1);
        setAmount(newAmount)
    }
    }

    const navigate = () => {
        if (amount === '0.00') {
            alert('Please enter an amount');
            return;
        }
        router.push('/dashboard/wallet/banks');
    }

  return (
    <Box flex={1} bg='white' paddingHorizontal={'md'}>
        {/* MODAL SECTION */}
        <DepositMethodModal isOpen={showModal} toggle={() => setShowModal(prev => !prev)} setType={(data) => setMethod(data)} />

        <Box width='100%' height={140} justifyContent={'flex-end'} marginTop={'2xl'}>
            <Feather name='arrow-left' color={theme.colors.black} size={25} onPress={() => router.back()} />
            <CustomText variant={'medium'} color={'black'} fontSize={22} marginTop={'md'}>How much do you want to withdraw?</CustomText>
        </Box>

        <Box width={'100%'} height={200}  justifyContent={'center'} alignItems={'center'}>
            <CustomText variant={'header'} fontSize={40} color={'black'}>N{amount}</CustomText>
        </Box>


        <Box flex={0.9}  flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} flexWrap={'wrap'}>
            {KeypadDetails.map((items, index) => (
                <Pressable 
                key={index.toString()}
                onPress={() => {
                    if (items.hasIcon) {
                        deleteNumber()
                    } else {
                        addNumber(items.label)
                    }
                }}
                style={{
                    width: '30%',
                    height: 60,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    { items.hasIcon && items.icon }
                    { !items.hasIcon && <CustomText variant={'subheader'} fontSize={30} color={'black'}>{items.label}</CustomText> }
                </Pressable>
            ))}
        </Box>

        <RoundedButton label='Continue' onPress={navigate} width={'100%'} height={48} borderRadius={8} backgroundColor={theme.colors.primaryColor} textColor='white' />
    </Box>
  )
}

export default Withdraw