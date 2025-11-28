// app/(tabs)/security/index.tsx
import React, { useState } from 'react';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, ScrollView, TextInput, Modal, Switch } from 'react-native';
import { useRouter } from 'expo-router';

export default function SecurityScreen() {
  const router = useRouter();
  const [hideBalance, setHideBalance] = useState(false);
  const [panicBalanceEnabled, setPanicBalanceEnabled] = useState(false);
  const [panicBalance, setPanicBalance] = useState('0.0');
  const [showPanicModal, setShowPanicModal] = useState(false);
  const [tempPanicBalance, setTempPanicBalance] = useState('0.0');

  const handleNavigation = () => {
    router.back();
  };

  const handlePanicBalanceToggle = (value: boolean) => {
    setPanicBalanceEnabled(value);
    if (!value) {
      setPanicBalance('0.0');
    }
  };

  const openPanicBalanceModal = () => {
    setTempPanicBalance(panicBalance);
    setShowPanicModal(true);
  };

  const savePanicBalance = () => {
    setPanicBalance(tempPanicBalance);
    setPanicBalanceEnabled(true);
    setShowPanicModal(false);
  };

  const formatCurrency = (value: string) => {
    return value.replace(/[^0-9.]/g, '');
  };

  return (
    <Box flex={1} style={{ backgroundColor: '#1a1a1a' }}>
      {/* Header */}
      <Box
        style={{
          paddingTop: 50,
          paddingBottom: 20,
          paddingHorizontal: 20,
          backgroundColor: '#1a1a1a',
        }}
      >
        <Box flexDirection={'row'} alignItems={'center'}>
          <Pressable onPress={handleNavigation}>
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
              Security
            </CustomText>
          </Box>

          <Box width={45} />
        </Box>
      </Box>

      {/* Settings List */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 20 }}>
        {/* Hide Balance */}
        <Box
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          style={{
            paddingVertical: 20,
            borderBottomWidth: 1,
            borderBottomColor: '#2a2a2a',
          }}
        >
          <CustomText variant={'body'} fontSize={16} fontWeight={'500'} color={'white'}>
            Hide Balance
          </CustomText>
          <Switch
            value={hideBalance}
            onValueChange={setHideBalance}
            trackColor={{ false: '#4a4a4a', true: '#ffffff' }}
            thumbColor={hideBalance ? '#30b06a' : '#f4f3f4'}
            ios_backgroundColor="#4a4a4a"
          />
        </Box>

        {/* Panic Balance */}
        <Pressable onPress={openPanicBalanceModal}>
          <Box
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            style={{
              paddingVertical: 20,
              borderBottomWidth: 1,
              borderBottomColor: '#2a2a2a',
            }}
          >
            <CustomText variant={'body'} fontSize={16} fontWeight={'500'} color={'white'}>
              Panic Balance
            </CustomText>
            <Box flexDirection={'row'} alignItems={'center'}>
              <CustomText variant={'body'} fontSize={16} style={{ color: '#666', marginRight: 8 }}>
                {panicBalanceEnabled ? 'On' : 'Off'}
              </CustomText>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </Box>
          </Box>
        </Pressable>
      </ScrollView>

      {/* Panic Balance Modal */}
      <Modal
        visible={showPanicModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowPanicModal(false)}
      >
        <Box flex={1} style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }} justifyContent={'flex-end'}>
          <Box
            style={{
              backgroundColor: '#1a1a1a',
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              paddingBottom: 40,
              minHeight: '60%',
            }}
          >
            {/* Modal Header */}
            <Box
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
              style={{
                paddingTop: 30,
                paddingBottom: 20,
                paddingHorizontal: 20,
                borderBottomWidth: 1,
                borderBottomColor: '#2a2a2a',
              }}
            >
              <Pressable onPress={() => setShowPanicModal(false)}>
                <Ionicons name="chevron-back" size={24} color="white" />
              </Pressable>

              <CustomText variant={'body'} fontSize={20} fontWeight={'600'} color={'white'}>
                Panic Balance
              </CustomText>

              <Switch
                value={panicBalanceEnabled}
                onValueChange={handlePanicBalanceToggle}
                trackColor={{ false: '#4a4a4a', true: '#ffffff' }}
                thumbColor={panicBalanceEnabled ? '#30b06a' : '#f4f3f4'}
                ios_backgroundColor="#4a4a4a"
              />
            </Box>

            {/* Modal Body */}
            <Box style={{ paddingHorizontal: 20, paddingTop: 30 }}>
              <CustomText
                variant={'body'}
                fontSize={15}
                style={{ color: '#999', lineHeight: 22, marginBottom: 30 }}
              >
                This will display a dummy balance when you shake your phone. You can edit your dummy balance at any time.
              </CustomText>

              <CustomText
                variant={'body'}
                fontSize={14}
                fontWeight={'500'}
                color={'white'}
                style={{ marginBottom: 12 }}
              >
                NGN Panic Balance
              </CustomText>

              <TextInput
                value={tempPanicBalance}
                onChangeText={(text) => setTempPanicBalance(formatCurrency(text))}
                placeholder="0.0"
                placeholderTextColor="#666"
                keyboardType="decimal-pad"
                style={{
                  backgroundColor: '#2a2a2a',
                  borderRadius: 12,
                  paddingHorizontal: 16,
                  paddingVertical: 18,
                  fontSize: 16,
                  color: 'white',
                  marginBottom: 30,
                }}
              />

              <Pressable onPress={savePanicBalance}>
                <Box
                  style={{
                    backgroundColor: '#8b5cf6',
                    paddingVertical: 18,
                    borderRadius: 12,
                    alignItems: 'center',
                  }}
                >
                  <CustomText variant={'body'} fontSize={16} fontWeight={'600'} color={'white'}>
                    Save
                  </CustomText>
                </Box>
              </Pressable>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}