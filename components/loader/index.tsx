import React from 'react'
import CustomText from '@component/general/CustomText'
import Box from '@component/general/Box'
import { Image } from 'react-native'

const loader = require('../../assets/images/foreground/loader.svg')
const logo = require('../../assets/images/logo/logo.png')

const Loader = () => {
  return (
    <Box height={'100%'} width={'100%'}
      style={{zIndex:9999, position:'absolute', backgroundColor:'#000000c0'}} 
       flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
        <CustomText color={'secondaryBackgroundColor'}>Loading...
        {/* <Image source={loader} resizeMode="cover" />
        <Image source={logo} resizeMode="cover"  /> */}
        </CustomText>
    </Box>
  )
}

export default Loader;
