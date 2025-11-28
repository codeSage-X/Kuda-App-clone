import React from 'react';
import Box from '@component/general/Box';
import { Styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomText from '@component/general/CustomText';
import { Ionicons } from '@expo/vector-icons';
import { PrimaryButton } from '@component/general/CustomButton';

const SuccessModal = ({ icon, title, message, buttonText, buttonAction, buttonOnPress }:any) => {
  return (
    <Box style={Styles.martContainer} alignItems={'center'} justifyContent={'center'}>
      <Box style={Styles.modal}>
        <Box width={'100%'} height={'100%'} alignItems={'center'} justifyContent={'flex-end'} style={{ backgroundColor: '#000000c0' }}>
          <Box width={'95%'} height={'30%'} justifyContent={'center'} alignItems={'center'} marginBottom={'lg'} borderRadius={14} backgroundColor={'secondaryBackgroundColor'}>
            <Box width={'90%'} height={'90%'} justifyContent={'center'}>
              <Box>
                {icon && <Ionicons name={icon} color={'#079455'} size={25} />}
              </Box>
              <Box marginTop={'md'}>
                <CustomText variant='header' fontSize={16} lineHeight={20}>{title}</CustomText>
              </Box>
              <Box marginTop={'sm'}>
                <CustomText fontSize={14} style={{ color: 'grey' }}>{message}</CustomText>
              </Box>
              {buttonText && buttonAction && (
                <TouchableOpacity onPress={buttonOnPress}>
                  <Box marginTop={'xl'}>
                    <PrimaryButton onPress={buttonAction} label={buttonText} width='100%' />
                  </Box>
                </TouchableOpacity>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SuccessModal;
