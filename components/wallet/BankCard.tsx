import { Pressable } from 'react-native'
import React from 'react'
import Box from '@component/general/Box'
import { RadioButton } from 'react-native-ui-lib'
import CustomText from '@component/general/CustomText'
import { Feather } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const BankCard = () => {
    const router = useRouter();
  return (
   <Pressable 
   onPress={() => router.push('/')}
   style={{
    borderColor: '#2D66DD',
    backgroundColor: '#EAF1FE',
    width: '100%',
    height: 100,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 10
   }}>
    <Box flexDirection={'row'} alignItems={'flex-start'}>
        <RadioButton value={false} selected onPress={() => {}} color='#2D66DD' />
        <Box marginLeft={'md'}>
            <CustomText variant={'subheader'} fontSize={16}>Kuda</CustomText>
            <CustomText variant={'body'} fontSize={16} marginVertical={'xs'}>Chidi Mokeme</CustomText>
            <CustomText variant={'body'} fontSize={16}>3029384839</CustomText>
        </Box>
    </Box>

    <Feather name='edit-2' size={25} />
   </Pressable>
  )
}

export default BankCard