import React from 'react';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import { Ionicons } from '@expo/vector-icons';
import { Modal, Pressable } from 'react-native';

interface ISuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FullScreenSuccessModal = ({ isOpen, onClose }: ISuccessModalProps) => {
  return (
    <Modal
      visible={isOpen}
      transparent={false}
      animationType="fade"
      onRequestClose={onClose}
    >
      <Box 
        flex={1} 
        style={{ backgroundColor: '#121212' }}
        justifyContent={'center'} 
        alignItems={'center'}
        padding={'lg'}
      >
        {/* Checkmark Icon */}
        <Box
          width={100}
          height={100}
          borderRadius={24}
          style={{ backgroundColor: '#5e2e91' }}
          justifyContent={'center'}
          alignItems={'center'}
          marginBottom={'xl'}
        >
          <Ionicons name="checkmark" size={60} color="white" />
        </Box>

        {/* Title */}
        <CustomText 
          fontSize={28} 
          fontWeight={'700'} 
          color={'white'}
          marginBottom={'md'}
        >
          Sent!
        </CustomText>

        {/* Message */}
        <CustomText 
          fontSize={16} 
          style={{ color: '#a1a1a1', textAlign: 'center' }}
          marginBottom={'xl'}
        >
          Your statement is on its way to your inbox.
        </CustomText>

        {/* Done Button - Positioned at bottom */}
        <Box 
          width={'100%'} 
          position={'absolute'} 
          bottom={40} 
          paddingHorizontal={'lg'}
        >
          <Pressable onPress={onClose}>
            <Box
              height={56}
              width={'100%'}
              style={{ backgroundColor: '#5e2e91' }}
              borderRadius={12}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <CustomText 
                color={'white'} 
                fontSize={18} 
                fontWeight={'700'}
              >
                Done
              </CustomText>
            </Box>
          </Pressable>
        </Box>
      </Box>
    </Modal>
  );
};

export default FullScreenSuccessModal;