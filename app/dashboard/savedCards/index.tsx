import React from 'react';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import { Ionicons } from '@expo/vector-icons';
import { View, Image, Pressable, ScrollView } from 'react-native';
import { Href, useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  const navigationMap = {
    more: '../tabs/more/',
  } as const;

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
            <Box width={'65%'} padding={'md'} flexDirection={'row'} justifyContent={'flex-start'}>
              <CustomText variant={'body'} color={'white'} fontWeight={'800'} fontSize={14}>
                Saved Cards
              </CustomText>
            </Box>
          </Box>
        </Box>

        {/* Empty State Content */}
        <Box width={'100%'} alignItems={'center'} style={{ marginTop: 40, paddingTop: 40 }}>
          <Box width={'90%'} alignItems={'center'} style={{ marginTop: 40, paddingTop: 40 }}>
            {/* Card Icon */}
            <Box style={{ marginBottom: 40, marginTop: 40 }}>
              <Box
                width={120}
                height={90}
                style={{ backgroundColor: '#2a2a2a', borderRadius: 12, position: 'relative' }}
                alignItems={'center'}
                justifyContent={'center'}
              >
                {/* Front Card */}
                <Box
                  width={100}
                  height={70}
                  style={{
                    backgroundColor: '#e0e0e0',
                    borderRadius: 8,
                    position: 'absolute',
                    top: 10,
                    left: 10,
                  }}
                >
                  {/* Card stripe */}
                  <Box width={'100%'} height={12} style={{ backgroundColor: '#c0c0c0', marginTop: 8 }} />
                </Box>

                {/* Back Card */}
                <Box
                  width={100}
                  height={70}
                  style={{
                    backgroundColor: '#f5f5f5',
                    borderRadius: 8,
                    position: 'absolute',
                    top: 20,
                    left: 20,
                  }}
                >
                  {/* Card stripe */}
                  <Box width={'100%'} height={12} style={{ backgroundColor: '#d5d5d5', marginTop: 8 }} />
                </Box>
              </Box>
            </Box>

            {/* Empty State Text */}
            <Box width={'85%'} alignItems={'center'}>
              <CustomText
                variant={'body'}
                color={'white'}
                fontSize={15}
                textAlign={'center'}
                style={{ opacity: 0.8 }}
              >
                You have no saved cards. You'll see your cards here after you add money to your
                account with a card.
              </CustomText>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box style={{ height: 20, backgroundColor: '#121212' }} />
    </ScrollView>
  );
}