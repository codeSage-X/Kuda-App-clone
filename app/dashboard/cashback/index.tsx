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
            <Box width={'60%'} padding={'md'} flexDirection={'row'} justifyContent={'flex-start'}>
              <CustomText variant={'body'} color={'white'} fontWeight={'800'} fontSize={14}>
                Cashback
              </CustomText>
            </Box>
          </Box>
        </Box>

        {/* Cashback Cards */}
        <Box width={'100%'} alignItems={'center'} style={{ marginTop: 20 }}>
          <Box width={'90%'} flexDirection={'row'} justifyContent={'space-between'}>
            {/* Available Card */}
            <Box
              width={'48%'}
              style={{
                backgroundColor: '#1a1a1a',
                borderRadius: 12,
                borderWidth: 1,
                borderColor: '#2a2a2a',
                padding: 20,
              }}
            >
              <CustomText variant={'body'} fontSize={13} style={{ color: '#a1a1a1', marginBottom: 8 }}>
                Available
              </CustomText>
              <CustomText variant={'body'} fontSize={24} fontWeight={'800'} color={'white'}>
                ₦0.00
              </CustomText>
            </Box>

            {/* Redeemed Card */}
            <Box
              width={'48%'}
              style={{
                backgroundColor: '#1a1a1a',
                borderRadius: 12,
                borderWidth: 1,
                borderColor: '#2a2a2a',
                padding: 20,
              }}
            >
              <CustomText variant={'body'} fontSize={13} style={{ color: '#a1a1a1', marginBottom: 8 }}>
                Redeemed
              </CustomText>
              <CustomText variant={'body'} fontSize={24} fontWeight={'800'} color={'white'}>
                ₦0.00
              </CustomText>
            </Box>
          </Box>

          {/* Tasks Section */}
          <Box width={'90%'} style={{ marginTop: 20 }}>
            <Box
              style={{
                backgroundColor: '#2a2a2a',
                borderRadius: 12,
                padding: 20,
              }}
            >
              <CustomText variant={'body'} fontSize={18} fontWeight={'800'} color={'white'} style={{ marginBottom: 20 }}>
                Tasks
              </CustomText>

              {/* Task 1 */}
              <Box flexDirection={'row'} alignItems={'flex-start'} style={{ marginBottom: 20 }}>
                <Box style={{ marginRight: 12, marginTop: 2 }}>
                  <Box
                    width={24}
                    height={24}
                    style={{
                      borderRadius: 12,
                      borderWidth: 2,
                      borderColor: '#6a6a6a',
                      backgroundColor: 'transparent',
                    }}
                  />
                  {/* Dotted line connector */}
                  <Box
                    width={2}
                    height={30}
                    style={{
                      backgroundColor: 'transparent',
                      borderLeftWidth: 2,
                      borderLeftColor: '#6a6a6a',
                      borderStyle: 'dashed',
                      marginLeft: 10,
                      marginTop: 4,
                    }}
                  />
                </Box>
                <CustomText variant={'body'} fontSize={15} color={'white'} style={{ flex: 1, marginTop: 2 }}>
                  Customer must have made 5 transactions
                </CustomText>
              </Box>

              {/* Task 2 */}
              <Box flexDirection={'row'} alignItems={'flex-start'}>
                <Box style={{ marginRight: 12, marginTop: 2 }}>
                  <Box
                    width={24}
                    height={24}
                    style={{
                      borderRadius: 12,
                      borderWidth: 2,
                      borderColor: '#6a6a6a',
                      backgroundColor: 'transparent',
                    }}
                  />
                </Box>
                <CustomText variant={'body'} fontSize={15} color={'white'} style={{ flex: 1, marginTop: 2 }}>
                  Customer account must be Tier 3
                </CustomText>
              </Box>
            </Box>
          </Box>

          {/* Empty State Illustration */}
          <Box width={'100%'} alignItems={'center'} style={{ marginTop: 40 }}>
            <Box
              width={100}
              height={70}
              style={{
                backgroundColor: '#e0e0e0',
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
              }}
            >
              <Ionicons name="wallet-outline" size={40} color="#b0b0b0" />
            </Box>

            <CustomText
              variant={'body'}
              fontSize={15}
              textAlign={'center'}
              color={'white'}
              style={{ opacity: 0.7 }}
            >
              Complete your tasks soon to earn a cashback.
            </CustomText>
          </Box>
        </Box>
      </Box>

      <Box style={{ height: 20, backgroundColor: '#121212' }} />
    </ScrollView>
  );
}