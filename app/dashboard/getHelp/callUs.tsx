import React from 'react';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import { Ionicons } from '@expo/vector-icons';
import { View, Image, Pressable, ScrollView, Linking } from 'react-native';
import { useRouter } from 'expo-router';

const supportAvatar = require('../../../assets/images/profile.jpg'); // Replace with your avatar image

export default function CallUS() {
  const router = useRouter();

  const handleNavigation = () => {
    router.back()
  };


  const handleCallPress = () => {
    const phoneNumber = 'tel:07000225558'; // Replace with actual number (07000CALLKUDA)
    Linking.openURL(phoneNumber);
  };

  return (
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
                Get Help
              </CustomText>
            </Box>
          </Box>
        </Box>

        {/* Content */}
        <Box width={'100%'} alignItems={'center'} style={{ marginTop: 60 }}>
          <Box width={'90%'} alignItems={'center'}>
            {/* Avatar Circle */}
            <Box style={{ marginBottom: 40 }}>
              <Box
                width={200}
                height={200}
                style={{
                  backgroundColor: '#52d6a3',
                  borderRadius: 100,
                  overflow: 'hidden',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Replace with your actual support avatar image */}
                <Image
                  source={supportAvatar}
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                  }}
                />
              </Box>
            </Box>

            {/* Heading */}
            <CustomText
              variant={'body'}
              fontSize={24}
              fontWeight={'800'}
              color={'white'}
              textAlign={'center'}
              style={{ marginBottom: 30 }}
            >
              Hi, let's help you today.
            </CustomText>

            {/* Phone Hours Info */}
            <Box width={'90%'} alignItems={'center'} style={{ marginBottom: 10 }}>
              <CustomText
                variant={'body'}
                fontSize={15}
                textAlign={'center'}
                color={'white'}
                style={{ lineHeight: 22 }}
              >
                Phone lines are available between{' '}
                <CustomText fontWeight={'700'} fontSize={15} color={'white'}>
                  8:00 AM
                </CustomText>{' '}
                and{' '}
                <CustomText fontWeight={'700'} fontSize={15} color={'white'}>
                  5:00 PM
                </CustomText>{' '}
                and on weekdays.
              </CustomText>
            </Box>

            {/* Tap to Call Instruction */}
            <Box style={{ marginBottom: 30, marginTop: 10 }}>
              <CustomText variant={'body'} fontSize={15} textAlign={'center'} color={'white'}>
                Tap the number to call.
              </CustomText>
            </Box>

            {/* Call Button/Number */}
            <Pressable onPress={handleCallPress}>
              <CustomText
                variant={'body'}
                fontSize={22}
                fontWeight={'800'}
                style={{ color: '#52d6a3' }}
                textAlign={'center'}
              >
                07000CALLKUDA
              </CustomText>
            </Pressable>
          </Box>
        </Box>
      </Box>

      <Box style={{ height: 40, backgroundColor: '#121212' }} />
    </ScrollView>
  );
}