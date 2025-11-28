import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import { Styles } from '../../styles/splash/styles'
import { OutlineButton } from '@component/general/OutlineButton'
import { PrimaryButton } from '@component/general/CustomButton'
import {
  useRouter  
} from 'expo-router';
const wave = require('../../assets/images/bg/Wave.png')

const Onboarding = () => {
  const router = useRouter();
  return (
    <Box backgroundColor={'white'} style={Styles.martContainer}>
        <Box style={Styles.martSplit55}>
        <ImageBackground source={wave} resizeMode="cover" style={Styles.bgImage}>
            {/* <CustomText variant={'subheader'} textAlign={'center'} fontSize={36} lineHeight={44} color={'white'}>Property Mart</CustomText> */}
         </ImageBackground>
        </Box>
        <Box style={[Styles.martSplit45, Styles.flex]} >
            <Box style={[Styles.subContainer, Styles.flex]} >
                <Box style={[Styles.martSplit55, Styles.flex]} backgroundColor={'white'}>
                    <CustomText variant={'subheader'} textAlign={'center'} fontSize={26} lineHeight={25} 
                    color={'black'} fontWeight={'800'}>Find Your Perfect Property Match</CustomText>
                    <Box style={[Styles.flex, {padding:10} ]}>
                        <Box style={{width:'80%'}}>
                        <CustomText variant={'subheader'} textAlign={'center'} fontSize={16} lineHeight={14} 
                        color={'black'} >
                            Discover, invest, and claim your space in the real estate market.</CustomText>
                        </Box>
                    </Box>
                </Box>
                <Box style={Styles.martSplit45}>
                    <Box width='100%' height={45} flexDirection={'column'} justifyContent={'space-between'}>
                        <Box width={'100%'}>
                            <PrimaryButton width={'100%'} isDisabled={false} label='Create an account' onPress={() => router.push('/auth/signup')} />
                        </Box>
                        <Box width={'100%'} style={{paddingTop:10}}>
                            <OutlineButton width={'100%'} isDisabled={false} label='Login' onPress={() => router.push('/auth/login')} />
                        </Box>
                    </Box>
                </Box>
                <Box height={5} width={'100%'}  flexDirection={'row'} justifyContent={'center'} >
                    <Box height={5} width={'30%'} backgroundColor={'black'} borderRadius={10}>
                        <CustomText>Hello</CustomText>
                    </Box>
                </Box>
            </Box>
        
        </Box>
    </Box>
  )
}

export default Onboarding;