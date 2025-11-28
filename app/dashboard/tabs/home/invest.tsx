import { SubmitButton } from '@component/form/CustomButton';
import Box from '@component/general/Box'
import { PrimaryButton } from '@component/general/CustomButton';
import CustomText from '@component/general/CustomText';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react'
import { Image, Pressable, TouchableOpacity } from 'react-native';
const redStroke = require('../../../../assets/images/red.png');
const yellowStroke = require('../../../../assets/images/yellow.png');
const blueStroke = require('../../../../assets/images/blue.png');
const bambooLogo = require('../../../../assets/images/bamboo.png');
const tsLogo = require('../../../../assets/images/ts.png');
const fbLogo = require('../../../../assets/images/fb.png');
const gLogo = require('../../../../assets/images/gg.png');
const amLogo = require('../../../../assets/images/am.png');


const options = [
    {
      title: 'Get Loan',
      icon: 'add-circle-sharp' as 'add-circle-sharp'
    },
  ];

export default function Invest() {
    function handlePress(title: string): void {
        throw new Error('Function not implemented.');
    }

    function handleVerify(data: any) {
      console.log('verify')
    }

  return (
    <Box height={'100%'} width={'100%'}  style={{ backgroundColor: '#121212' }}>
      
       <Box height={200}  flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Box height={'50%'} width={'22%'} style={{ backgroundColor: '#424242' }} borderRadius={10} alignItems={'center'} justifyContent={'center'} borderWidth={1}>
            <Box height={'50%'} justifyContent={'center'} alignItems={'center'}>
            <Image source={tsLogo} resizeMode={'contain'} style={{ width:35, height:35, }}  />
            </Box>
            <Box height={'50%'} width={'100%'}>
                <Image source={redStroke} resizeMode={'contain'} style={{ width:'100%', height:'100%',  borderRadius:10 }}  />
            </Box>
          
          </Box>

          <Box height={'50%'} width={'22%'} style={{ backgroundColor: '#424242' }} borderRadius={10} alignItems={'center'} justifyContent={'center'} borderWidth={1}>
            <Box height={'50%'} justifyContent={'center'} alignItems={'center'}>
            <Image source={fbLogo} resizeMode={'contain'} style={{ width:65, height:65, }}  />
            </Box>
            <Box height={'50%'} width={'100%'}>
                <Image source={blueStroke} resizeMode={'contain'} style={{ width:'100%', height:'100%',  borderRadius:10 }}  />
            </Box>
          
          </Box>
          <Box height={'50%'} width={'22%'} style={{ backgroundColor: '#424242' }} borderRadius={10} alignItems={'center'} justifyContent={'center'} borderWidth={1}>
            <Box height={'50%'} justifyContent={'center'} alignItems={'center'}>
            <Image source={amLogo} resizeMode={'contain'} style={{ width:40, height:40, }}  />
            </Box>
            <Box height={'50%'} width={'100%'}>
                <Image source={yellowStroke} resizeMode={'contain'} style={{ width:'100%', height:'100%',  borderRadius:10 }}  />
            </Box>
          
          </Box>

          <Box height={'50%'} width={'22%'} style={{ backgroundColor: '#424242' }} borderRadius={10} alignItems={'center'} justifyContent={'center'} borderWidth={1}>
            <Box height={'50%'} justifyContent={'center'} alignItems={'center'}>
            <Image source={gLogo} resizeMode={'contain'} style={{ width:35, height:35, borderRadius:100 }}  />
            </Box>
            <Box height={'50%'} width={'100%'}>
                <Image source={blueStroke} resizeMode={'contain'} style={{ width:'100%', height:'100%',  borderRadius:10 }}  />
            </Box>
          
          </Box>

          

       </Box>
     
       
       <Box height={'auto'} width={'100%'}  justifyContent={'space-between'} alignItems={'center'} >
         
        <CustomText variant={'subheader'}  color={'white'}  fontSize={20} fontWeight={'800'}>Investments made easy</CustomText>
        <CustomText variant={'xs'} color={'white'} fontSize={12} lineHeight={20} textAlign={'center'} >Buy stocks with as little as $10.</CustomText>
            
       </Box>

       <Box marginTop={'2xl'}>
       <PrimaryButton label='Find a stock' width='100%' onPress={(data:any) => handleVerify(data)} />
       </Box>

       <Box marginTop={'2xl'}>
       <CustomText variant={'xs'} color={'white'} fontSize={12} lineHeight={20} textAlign={'center'} >
        Kuda doesn't give investment advice. Please, consult your legal, financial and tax advicers before you buy stock
        </CustomText>
       </Box>

       <Box width={'100%'} height={80} justifyContent={'center'} alignItems={'center'}>
       <Image source={bambooLogo} resizeMode={'contain'} style={{ width:250, height:80 }}  />
       </Box>
      
   </Box>
  )
}