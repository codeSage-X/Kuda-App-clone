import React from 'react';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleCreatePasskey = () => {
    // Trigger device biometric authentication
    Alert.alert(
      'Create Passkey',
      'This will trigger your device biometric authentication (Face ID/Touch ID)',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Continue',
          onPress: () => {
            // Here you would integrate with device biometrics
            console.log('Creating passkey...');
            Alert.alert('Success', 'Passkey created successfully!', [
              {
                text: 'OK',
                onPress: () => router.back(),
              },
            ]);
          },
        },
      ]
    );
  };

  const benefits = [
    {
      icon: 'finger-print',
      iconColor: '#25c1de',
      title: 'No Password or Passcode Needed',
      subtitle: 'No need to remember or type anything.',
    },
    {
      icon: 'lock-closed',
      iconColor: '#30b06a',
      title: 'Increased Security',
      subtitle: 'Add phishing-resistant technology to your account',
    },
    {
      icon: 'eye-off',
      iconColor: '#fb265d',
      title: 'Sign In Privately',
      subtitle: 'Your Face ID, Touch ID, Biometrics or Passcode data stays on your device.',
    },
  ];

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

          <Box flex={1} />
        </Box>
      </Box>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 40 }}>
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
        <Box style={{ paddingHorizontal: 20, marginBottom: 40 }}>
          <CustomText
            variant={'body'}
            fontSize={28}
            fontWeight={'800'}
            color={'white'}
            textAlign={'center'}
          >
            Create A Passkey
          </CustomText>
        </Box>

        {/* Benefits List */}
        <Box style={{ paddingHorizontal: 20 }}>
          {benefits.map((benefit, index) => (
            <Box
              key={index}
              flexDirection={'row'}
              style={{
                backgroundColor: '#2a2a2a',
                borderRadius: 12,
                padding: 20,
                marginBottom: 15,
              }}
            >
              <Box
                width={60}
                height={60}
                style={{ backgroundColor: '#1a1a1a', borderRadius: 10, marginRight: 15 }}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Ionicons name={benefit.icon as any} size={32} color={benefit.iconColor} />
              </Box>

              <Box flex={1} justifyContent={'center'}>
                <CustomText
                  variant={'body'}
                  fontSize={16}
                  fontWeight={'700'}
                  color={'white'}
                  style={{ marginBottom: 5 }}
                >
                  {benefit.title}
                </CustomText>
                <CustomText variant={'body'} fontSize={13} style={{color:'#999'}}>
                  {benefit.subtitle}
                </CustomText>
              </Box>
            </Box>
          ))}
        </Box>
      </ScrollView>

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
  );
}