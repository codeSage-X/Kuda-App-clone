import { View, Text, Modal, Pressable, TouchableWithoutFeedback } from 'react-native'
import React, { ReactNode } from 'react'
import Box from '@component/general/Box';

interface IProps {
    isOpen: boolean;
    toggle: () => void;
    height?: number;
    children: ReactNode;
    isRounded?: boolean;
}

const ModalWrapper = ({ isOpen, toggle, height = 150, children, isRounded = true }: IProps) => {
  return (
    <Modal 
      visible={isOpen} 
      onRequestClose={toggle}
      transparent 
      animationType='slide'
    >
      {/* Pressable Overlay - Closes modal when tapped */}
      <Pressable 
        style={{ flex: 1 }} 
        onPress={toggle}
      >
        <Box 
          flex={1} 
          style={{ backgroundColor:'#000000b3'}} 
          justifyContent={'flex-end'}
        >
          {/* Modal Content - Prevents closing when tapped */}
          <Pressable onPress={(e) => e.stopPropagation()}>
            <Box 
              width='100%' 
              height={height} 
              style={{ backgroundColor: '#121212' }}
              borderTopLeftRadius={isRounded ? 20 : 0} 
              borderTopRightRadius={isRounded ? 20 : 0}
            >
              {children}
            </Box>
          </Pressable>
        </Box>
      </Pressable>
    </Modal>
  )
}

export default ModalWrapper