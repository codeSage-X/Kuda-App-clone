import React from 'react';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';

const Success = ({ message }:any) => {
  return (
    <Box height={50} width={'100%'} marginTop={'20xl'} justifyContent={'center'} alignItems={'center'} padding={'xs'} paddingLeft={'sm'} paddingRight={'sm'} position={'absolute'} zIndex={9999} style={{backgroundColor:'transparent', }}>
      <Box height={35} width={'auto'} padding={'xs'} justifyContent={'center'} paddingLeft={'sm'} paddingRight={'sm'}  borderRadius={80} borderColor={'successColor'} borderWidth={0.5} position={'absolute'} zIndex={9999} style={{backgroundColor:'#ECFDF3', }}>
        <CustomText variant={'xs'} fontWeight={'700'} style={{color:"#067647"}}>{message}</CustomText>
      </Box>
    </Box>
  );
}

export default Success;
