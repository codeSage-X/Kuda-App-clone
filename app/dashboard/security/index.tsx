import React, { useState } from 'react';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import { Ionicons } from '@expo/vector-icons';
import { View, Image, Pressable, ScrollView, Switch, Modal } from 'react-native';
import { Href, useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();
  const [faceIdEnabled, setFaceIdEnabled] = useState(false);
  const [showFaceIdModal, setShowFaceIdModal] = useState(false);

  const handleNavigation = () => {
    router.back();
  };

  const handleFaceIdToggle = (value: boolean) => {
    if (value) {
      // Show modal when trying to enable Face ID
      setShowFaceIdModal(true);
    } else {
      // Directly disable if turning off
      setFaceIdEnabled(false);
    }
  };

  const handleEnableFaceId = () => {
    setShowFaceIdModal(false);
    // Navigate to transaction PIN page
    router.push('../transactionPin');
  };

  const handleCancelModal = () => {
    setShowFaceIdModal(false);
  };

  const securityItems = [
    {
      id: 'faceId',
      title: 'Face ID',
      icon: 'scan',
      iconColor: '#30b06a',
      hasToggle: true,
      link: null,
    },
    {
      id: 'transactionPin',
      title: 'Transaction PIN',
      icon: 'keypad',
      iconColor: '#25c1de',
      hasToggle: false,
      link: '../resetTransactionPin',
    },
    {
      id: 'passkey',
      title: 'Passkey',
      icon: 'shield-checkmark',
      iconColor: '#30b06a',
      hasToggle: false,
      link: '../passkey',
    },
    {
      id: 'privateMode',
      title: 'Private Mode',
      icon: 'eye',
      iconColor: '#ffd700',
      hasToggle: false,
      showStatus: true,
      status: 'Off',
      link: '../privateMode',
    },
  ];

  const handlePress = (item: typeof securityItems[0]) => {
    if (item.link) {
      router.push(item.link as any);
    }
  };

  return (
    <>
      <ScrollView style={{ backgroundColor: '#121212' }}>
        <Box height={'100%'} width={'100%'} style={{ backgroundColor: '#121212' }}>
          {/* Header */}
          <Box
            height={60}
            paddingTop={'lg'}
            borderBottomWidth={0.2}
            style={{ borderColor: '#a1a1a1', marginTop: 20 }}
            width={'100%'}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Box
              width={'100%'}
              height={50}
              justifyContent={'space-between'}
              alignItems={'center'}
              flexDirection={'row'}
            >
              <Box flexDirection={'row'} width={'10%'} padding={'md'} justifyContent={'flex-end'}>
                <Pressable onPress={() => handleNavigation()}>
                  <Ionicons name="chevron-back" size={20} color="white" />
                </Pressable>
              </Box>
              <Box width={'60%'} padding={'md'} flexDirection={'row'} justifyContent={'flex-start'}>
                <CustomText variant={'body'} color={'white'} fontWeight={'800'} fontSize={14}>
                  Security
                </CustomText>
              </Box>
            </Box>
          </Box>

          {/* Security Menu Items */}
          <Box width={'100%'} alignItems={'center'}>
            <Box width={'90%'}>
              {securityItems.map((item, index) => (
                <Pressable
                  key={item.id}
                  onPress={() => handlePress(item)}
                  disabled={item.hasToggle}
                >
                  <Box
                    flexDirection={'row'}
                    alignItems={'center'}
                    style={{ marginTop: index === 0 ? 25 : 0, paddingVertical: 18 }}
                  >
                    <Box width={'12%'} justifyContent={'center'} alignItems={'center'}>
                      <Box
                        height={40}
                        width={40}
                        style={{ borderRadius: 50 }}
                        alignItems={'center'}
                        justifyContent={'center'}
                      >
                        <Ionicons name={item.icon as any} size={28} style={{ color: item.iconColor }} />
                      </Box>
                    </Box>

                    <Box width={'66%'} paddingLeft={'sm'} justifyContent={'center'}>
                      <CustomText variant={'body'} fontSize={16} fontWeight={'700'} color={'white'}>
                        {item.title}
                      </CustomText>
                    </Box>

                    <Box width={'22%'} justifyContent={'center'} alignItems={'flex-end'}>
                      {item.hasToggle ? (
                        <Switch
                          value={faceIdEnabled}
                          onValueChange={handleFaceIdToggle}
                          trackColor={{ false: '#767577', true: '#30b06a' }}
                          thumbColor={faceIdEnabled ? '#ffffff' : '#f4f3f4'}
                        />
                      ) : item.showStatus ? (
                        <Box flexDirection={'row'} alignItems={'center'}>
                          <CustomText
                            variant={'body'}
                            fontSize={14}
                            style={{ color: '#8a8a8a', marginRight: 8 }}
                          >
                            {item.status}
                          </CustomText>
                          <Ionicons name="chevron-forward-sharp" size={22} color="#8a8a8a" />
                        </Box>
                      ) : (
                        <Ionicons name="chevron-forward-sharp" size={22} color="#8a8a8a" />
                      )}
                    </Box>
                  </Box>
                </Pressable>
              ))}
            </Box>
          </Box>
        </Box>

        <Box style={{ height: 20, backgroundColor: '#121212' }} />
      </ScrollView>

      {/* Face ID Enable Modal */}
      <Modal
        visible={showFaceIdModal}
        transparent={true}
        animationType="slide"
        onRequestClose={handleCancelModal}
      >
        <Pressable
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'flex-end',
          }}
          onPress={handleCancelModal}
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
                <Box
                  width={40}
                  height={4}
                  style={{ backgroundColor: '#4a4a4a', borderRadius: 2 }}
                />
              </Box>

              {/* Face ID Icon */}
              <Box alignItems={'center'} style={{ marginBottom: 30 }}>
                <Box
                  width={100}
                  height={100}
                  style={{
                    backgroundColor: '#6a3de8',
                    borderRadius: 50,
                    borderWidth: 3,
                    borderColor: '#30b06a',
                  }}
                  alignItems={'center'}
                  justifyContent={'center'}
                >
                  <Ionicons name="scan" size={50} color="white" />
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
                Enable Face ID
              </CustomText>

              {/* Subtitle */}
              <CustomText
                variant={'body'}
                fontSize={15}
               
                textAlign={'center'}
                style={{ marginBottom: 40, color: '#999' }}
              >
                Log in and authorize transactions with Face ID.
              </CustomText>

              {/* Buttons */}
              <Box flexDirection={'row'} justifyContent={'space-between'}>
                <Pressable onPress={handleCancelModal} style={{ flex: 1, marginRight: 10 }}>
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

                <Pressable onPress={handleEnableFaceId} style={{ flex: 1, marginLeft: 10 }}>
                  <Box
                    style={{
                      backgroundColor: '#6a3de8',
                      borderRadius: 8,
                      paddingVertical: 16,
                      alignItems: 'center',
                    }}
                  >
                    <CustomText variant={'body'} fontSize={16} fontWeight={'700'} color={'white'}>
                      Enable
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