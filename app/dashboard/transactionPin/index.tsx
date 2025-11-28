import React, { useState } from 'react';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, TextInput, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();
  const [pin, setPin] = useState('');
  const [showPin, setShowPin] = useState(false);
  const [error, setError] = useState(false);

  const handleBack = () => {
    router.back();
  };

  const handleActivate = () => {
    if (pin === '1234') {
      // Correct PIN
      Alert.alert('Success', 'Face ID has been enabled successfully!', [
        {
          text: 'OK',
          onPress: () => router.back(),
        },
      ]);
    } else {
      // Incorrect PIN
      setError(true);
      setPin('');
    }
  };

  const handlePinChange = (text: string) => {
    setPin(text);
    setError(false);
  };

  return (
    <Box flex={1} style={{ backgroundColor: '#121212' }}>
      {/* Header */}
      <Box
        style={{
          paddingTop: 50,
          paddingBottom: 20,
          paddingHorizontal: 20,
        }}
      >
        <Box flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
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

          <CustomText variant={'body'} fontSize={18} fontWeight={'700'} color={'white'}>
            Transaction PIN
          </CustomText>

          <Pressable onPress={handleActivate} disabled={pin.length !== 4}>
            <Box
              style={{
                backgroundColor: pin.length === 4 ? '#6a3de8' : '#2a2a2a',
                borderRadius: 8,
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}
            >
              <CustomText
                variant={'body'}
                fontSize={14}
                fontWeight={'700'}
                style={{ color: pin.length === 4 ? 'white' : '#666' }}
              >
                Activate
              </CustomText>
            </Box>
          </Pressable>
        </Box>
      </Box>

      {/* Content */}
      <Box style={{ paddingHorizontal: 20, marginTop: 20 }}>
        {/* Instruction */}
        <CustomText variant={'body'} fontSize={15}  style={{ marginBottom: 30, color:'#999'}}>
          Enter your transaction PIN to activate Face ID.
        </CustomText>

        {/* PIN Input */}
        <Box>
          <CustomText variant={'body'} fontSize={14} color={'white'} style={{ marginBottom: 10 }}>
            Transaction PIN
          </CustomText>
          <Box
            flexDirection={'row'}
            alignItems={'center'}
            style={{
              backgroundColor: error ? '#4a2a2a' : '#2a2a2a',
              borderRadius: 8,
              borderWidth: error ? 2 : 0,
              borderColor: error ? '#ff4444' : 'transparent',
              paddingHorizontal: 15,
              paddingVertical: 15,
            }}
          >
            <TextInput
              value={pin}
              onChangeText={handlePinChange}
              placeholder="••••"
              placeholderTextColor="#666"
              secureTextEntry={!showPin}
              keyboardType="numeric"
              maxLength={4}
              style={{
                flex: 1,
                fontSize: 18,
                color: 'white',
                letterSpacing: 8,
              }}
            />
            <Pressable onPress={() => setShowPin(!showPin)}>
              <Ionicons name={showPin ? 'eye' : 'eye-off'} size={24} color="#666" />
            </Pressable>
          </Box>

          {/* Error Message */}
          {error && (
            <CustomText
              variant={'body'}
              fontSize={13}
              style={{ color: '#ff4444', marginTop: 10 }}
            >
              Sorry, that's not your transaction PIN. Please, check and try again.
            </CustomText>
          )}
        </Box>
      </Box>
    </Box>
  );
}
