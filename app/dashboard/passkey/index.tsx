import React, { useState } from 'react';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, ScrollView, Modal } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const handleBack = () => {
    router.back();
  };

  const handleCreatePasskey = () => {
    setShowModal(true);
  };

  const handleContinue = () => {
    setShowModal(false);
    router.push('../createPasskey');
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <>
      <Box flex={1} style={{ backgroundColor: '#121212' }}>
        {/* Header */}
        <Box
          style={{
            paddingTop: 50,
            paddingBottom: 20,
            paddingHorizontal: 20,
          }}
        >
          <Box flexDirection={'row'} alignItems={'center'}>
            <Pressable onPress={handleBack}>
              <Box
                width={45}
                height={45}
                style={{ backgroundColor: '#2a2a2a', borderRadius: 22.5 }}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Ionicons name="chevron-back" size={24} color="white" />
              </Box>
            </Pressable>

            <Box flex={1} alignItems={'center'}>
              <CustomText variant={'body'} fontSize={18} fontWeight={'700'} color={'white'}>
                Passkeys
              </CustomText>
            </Box>

            <Box width={45} />
          </Box>
        </Box>

        {/* Empty State */}
        <Box flex={1} justifyContent={'center'} alignItems={'center'} style={{ paddingHorizontal: 40 }}>
          {/* Icon */}
          <Box
            width={100}
            height={100}
            style={{ backgroundColor: '#e0e0e0', borderRadius: 50, marginBottom: 30 }}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Ionicons name="person" size={40} color="black" />
            <Ionicons
              name="key"
              size={24}
              color="black"
              style={{ position: 'absolute', bottom: 25, right: 25 }}
            />
          </Box>

          {/* Text */}
          <CustomText
            variant={'body'}
            fontSize={20}
            fontWeight={'700'}
            color={'white'}
            textAlign={'center'}
            style={{ marginBottom: 15 }}
          >
            There's nothing to see yet.
          </CustomText>

          <CustomText variant={'body'} fontSize={15} style={{color:'#999'}} textAlign={'center'}>
            Create passkeys and you'll see them here.
          </CustomText>
        </Box>

        {/* Create Button */}
        <Box style={{ paddingHorizontal: 20, paddingBottom: 40 }}>
          <Pressable onPress={handleCreatePasskey}>
            <Box
              style={{
                backgroundColor: '#6a3de8',
                borderRadius: 8,
                paddingVertical: 16,
                alignItems: 'center',
              }}
            >
              <CustomText variant={'body'} fontSize={16} fontWeight={'700'} color={'white'}>
                Create A Passkey
              </CustomText>
            </Box>
          </Pressable>
        </Box>
      </Box>

      {/* Create Passkey Modal */}
      <Modal
        visible={showModal}
        transparent={true}
        animationType="slide"
        onRequestClose={handleCancel}
      >
        <Pressable
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'flex-end',
          }}
          onPress={handleCancel}
        >
          <Pressable onPress={(e) => e.stopPropagation()}>
            <Box
              style={{
                backgroundColor: '#1a1a1a',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                paddingHorizontal: 20,
                paddingTop: 20,
                paddingBottom: 40,
              }}
            >
              {/* Modal Handle */}
              <Box width={'100%'} alignItems={'center'} style={{ marginBottom: 30 }}>
                <Box width={40} height={4} style={{ backgroundColor: '#4a4a4a', borderRadius: 2 }} />
              </Box>

              {/* Info Icon */}
              <Box alignItems={'center'} style={{ marginBottom: 30 }}>
                <Box
                  width={80}
                  height={80}
                  style={{
                    backgroundColor: '#f5a623',
                    borderRadius: 20,
                  }}
                  alignItems={'center'}
                  justifyContent={'center'}
                >
                  <CustomText fontSize={40} color={'white'} fontWeight={'800'}>
                    i
                  </CustomText>
                </Box>
              </Box>

              {/* Title */}
              <CustomText
                variant={'body'}
                fontSize={24}
                fontWeight={'800'}
                color={'white'}
                textAlign={'center'}
                style={{ marginBottom: 15 }}
              >
                Create Passkey
              </CustomText>

              {/* Message */}
              <CustomText
                variant={'body'}
                fontSize={15}
               
                textAlign={'center'}
                style={{ marginBottom: 40, color:'#999' }}
              >
                Please be informed that once you create a passkey, you can't turn it off.
              </CustomText>

              {/* Buttons */}
              <Box flexDirection={'row'} justifyContent={'space-between'}>
                <Pressable onPress={handleCancel} style={{ flex: 1, marginRight: 10 }}>
                  <Box
                    style={{
                      backgroundColor: '#2a2a2a',
                      borderRadius: 8,
                      paddingVertical: 16,
                      alignItems: 'center',
                    }}
                  >
                    <CustomText variant={'body'} fontSize={16} fontWeight={'700'} color={'white'}>
                      Cancel
                    </CustomText>
                  </Box>
                </Pressable>

                <Pressable onPress={handleContinue} style={{ flex: 1, marginLeft: 10 }}>
                  <Box
                    style={{
                      backgroundColor: '#6a3de8',
                      borderRadius: 8,
                      paddingVertical: 16,
                      alignItems: 'center',
                    }}
                  >
                    <CustomText variant={'body'} fontSize={16} fontWeight={'700'} color={'white'}>
                      Continue
                    </CustomText>
                  </Box>
                </Pressable>
              </Box>
            </Box>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}