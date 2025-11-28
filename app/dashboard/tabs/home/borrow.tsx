import { SubmitButton } from '@component/form/CustomButton';
import Box from '@component/general/Box'
import { PrimaryButton } from '@component/general/CustomButton';
import CustomText from '@component/general/CustomText';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react'
import { Image, Pressable, TouchableOpacity } from 'react-native';
const  ngn = require('../../../../assets/images/ngn.png');
const  loan = require('../../../../assets/images/loan.png');

const options = [
    {
      title: 'Get Loan',
      icon: 'add-circle-sharp' as 'add-circle-sharp'
    },
  ];

export default function Borrow() {
    function handlePress(title: string): void {
        throw new Error('Function not implemented.');
    }

     function handleVerify() {
        console.log('verify')
    }

  return (
    <Box height={'100%'} width={'100%'}  style={{ backgroundColor: '#121212' }}>
      <Box height={20} flexDirection={'row'} alignItems={'center'} marginTop={'lg'}>
        <Image source={ngn} resizeMode={'cover'} style={{ width: 15, height: 15 }}  />
        <CustomText variant={'xs'} color={'white'} fontSize={12} fontWeight={'100'} marginLeft={'xs'}>You Owe</CustomText>
      </Box>
     
      <Box height={'auto'} flexDirection={'row'} >
        <Box width={'80%'}>
            <CustomText variant={'header'} fontSize={24} style={{color:'#1dcef5'}} >₦0.00</CustomText>
        </Box>
        <Box width={'20%'} alignItems={'flex-end'} justifyContent={'center' }>
            <Ionicons name="ellipsis-horizontal-circle-sharp" size={18} color="#a1a1a1"   />
        </Box>

      </Box>

      <Box flexDirection={'row'} height={40} width={'100%'} justifyContent={'space-between'} >
                      {options.map((option, index) => (
                        <Pressable
                          key={index}
                          onPress={() => handlePress(option.title)}
                          style={{ width: '38%', backgroundColor: '#212121', height: '100%', borderRadius:10, }}
                        >
                          <TouchableOpacity>
                            <Box flexDirection={'row'} alignItems={'center'} style={{ height: '100%' }}>
                              <Ionicons name={option.icon} size={20} color="#1dcef5" style={{ marginLeft: 15 }} />
                              <CustomText variant={'xs'} fontSize={12} style={{color:'#1dcef5'}} fontWeight={'800'} marginLeft={'md'}>
                                {option.title}
                              </CustomText>
                            </Box>
                          </TouchableOpacity>
                        </Pressable>
                      ))}
                
       </Box>
       
       <Box height={'auto'} width={'100%'} borderBottomWidth={0.2} style={{ borderColor: '#4f4f4f' }} borderLeftWidth={0} borderRightWidth={0}  marginTop={'sm'} justifyContent={'space-between'} alignItems={'center'} >
         <Box height={20}></Box>
        <CustomText variant={'header'}  color={'white'} fontSize={24}  fontWeight={'800'}>Get a Loan</CustomText>
        <CustomText variant={'xs'} color={'white'} fontSize={12} lineHeight={20} textAlign={'center'} >Life happens and anyone can get low on cash.
        Get an overdraft, a personal loan, or a salary loan quickly if you qualify.</CustomText>

        <Image source={loan} resizeMode={'contain'} style={{ width: 150, height: 150 }}  />
            
       </Box>

       <Box >
       <PrimaryButton label='Get a Loan' width='100%' onPress={(data:any) => handleVerify()} />
       </Box>

      
   </Box>
  )
}