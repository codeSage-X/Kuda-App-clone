import React from 'react';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import { Ionicons } from '@expo/vector-icons';
import { View, Image, Pressable, ScrollView } from 'react-native';
import { Href, useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();
 const handleNavigation = () => {
    
    router.back()
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
            <Box width={'70%'} padding={'md'} flexDirection={'row'} justifyContent={'flex-start'}>
              <CustomText variant={'body'} color={'white'} fontWeight={'800'} fontSize={14}>
                Linked Accounts
              </CustomText>
            </Box>
          </Box>
        </Box>

        {/* Empty State Content */}
        <Box width={'100%'} alignItems={'center'} style={{ marginTop: 80, paddingTop: 40 }}>
          <Box width={'90%'} alignItems={'center'} style={{ marginTop: 40, paddingTop: 40 }}>
            {/* Profile Icon */}
            <Box style={{ marginBottom: 40, marginTop: 40 }}>
              <Box
                width={120}
                height={120}
                style={{ backgroundColor: '#2a2a2a', borderRadius: 60 }}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Ionicons name="person" size={50} color="white" />
              </Box>
            </Box>

            {/* Empty State Text */}
            <Box width={'90%'} alignItems={'center'}>
              <CustomText
                variant={'body'}
                color={'white'}
                fontSize={18}
                fontWeight={'700'}
                textAlign={'center'}
                style={{ marginBottom: 15 }}
              >
                You haven't linked your account.
              </CustomText>
              <CustomText
                variant={'body'}
                color={'white'}
                fontSize={15}
                textAlign={'center'}
                style={{ opacity: 0.7 }}
              >
                Link your account to other platforms to automate payments.
              </CustomText>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box style={{ height: 20, backgroundColor: '#121212' }} />
    </ScrollView>
  );
}