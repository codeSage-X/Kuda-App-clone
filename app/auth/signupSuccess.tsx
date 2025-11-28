import {  Image, Pressable, } from 'react-native'
import React from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import { PrimaryButton } from '@component/general/CustomButton'
import { Link, router } from 'expo-router'
import { Styles } from '../../styles/auth/styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
const palmfone = require('../../assets/images/foreground/acctcreated.png')

const SignupSuccess = () => {
  return (
    <>
    <Box style={[Styles.martContainer, Styles.flex]} >
    <Box style={Styles.subContainer}>
        <Box width={'100%'} height={'100%'}>
                  <Box height={'30%'} width={'100%'} flexDirection={'row'} justifyContent={'flex-end'} >
                        
                        <TouchableOpacity>
                              <Pressable onPress={()=>(router.push('/auth/login'))}>
                                <CustomText variant={'xs'} fontSize={12} lineHeight={20} 
                                    color={'btnBlue'} fontWeight={'800'}>I’ll do this later
                                </CustomText>
                              </Pressable>
                        </TouchableOpacity>
                        
                    </Box> 
                    <Box height={'70%'} width={'100%'} flexDirection={'column'} alignItems={'center'}>
                    <Box height={'20%'} paddingBottom={'xl'}>
                        <Image source={palmfone} resizeMode="cover" style={{width:100, height:100}} />
                    </Box>
                    <Box height={10}></Box>
                    <Box height={'10%'} marginTop={'xl'}>
                        <CustomText variant={'subheader'} textAlign={'left'} fontSize={20} lineHeight={25} marginTop={'sm'} 
                            color={'black'} fontWeight={'800'}>Account Verified successfully!
                        </CustomText>
                    </Box>
                    <Box height={'10%'}>
                        <CustomText variant={'xs'} textAlign={'center'} fontSize={14} lineHeight={20} 
                        color={'black'} fontWeight={'400'}>We’re so happy to have you! Let’s get your account up and running
                        </CustomText>
                    </Box>
                    <Box width={'100%'} marginTop={'xl'}>
                        <PrimaryButton onPress={()=>{console.log('not yet up')}}
                            label={'Continue to account set up'} width={'100%'} />
                    </Box>
                    <Box height={'40%'} flexDirection={'row'} alignItems={'flex-end'}>
                        <Box height={5} width={'100%'}  flexDirection={'row'} justifyContent={'center'} >
                            <Box height={5} width={'30%'} backgroundColor={'black'} borderRadius={10}>
                                <CustomText>Hello</CustomText>
                            </Box>
                        </Box>
                    </Box>
                    </Box>     
        </Box>
    </Box>
    </Box>
    </>
  )
}

export default SignupSuccess;