import React from 'react';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import { Ionicons } from '@expo/vector-icons';
import { View, Image, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  const handleNavigation = () => {
    router.back()
  };

  const handleManageLimit = () => {
    console.log('Manage Daily Limit pressed');
  };

  const handleUpgradeAccount = () => {
    console.log('Upgrade Account pressed');
  };

  return (
    <Box flex={1} style={{ backgroundColor: '#121212' }}>
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
              Account Limits 🇳🇬
            </CustomText>
          </Box>
        </Box>
      </Box>

      <ScrollView style={{ flex: 1 }}>
        <Box width={'100%'} alignItems={'center'}>
          <Box width={'90%'}>
            {/* KUDA TO OTHER BANKS Section */}
            <Box style={{ marginTop: 30 }}>
              <CustomText
                variant={'body'}
                fontSize={13}
                fontWeight={'700'}
                style={{ color: '#6a6a6a', marginBottom: 20 }}
              >
                KUDA TO OTHER BANKS
              </CustomText>

              {/* Sending */}
              <Box
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                style={{ paddingVertical: 16, borderBottomWidth: 0.5, borderBottomColor: '#2a2a2a' }}
              >
                <CustomText variant={'body'} fontSize={15} color={'white'}>
                  Sending (Per Transaction)
                </CustomText>
                <CustomText variant={'body'} fontSize={15} fontWeight={'700'} color={'white'}>
                  ₦2,000,000
                </CustomText>
              </Box>

              {/* Receiving */}
              <Box
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                style={{ paddingVertical: 16, borderBottomWidth: 0.5, borderBottomColor: '#2a2a2a' }}
              >
                <CustomText variant={'body'} fontSize={15} color={'white'}>
                  Receiving (Per Transaction)
                </CustomText>
                <CustomText variant={'body'} fontSize={15} fontWeight={'700'} color={'white'}>
                  ₦100,000
                </CustomText>
              </Box>

              {/* Daily Transfer Limit */}
              <Box
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                style={{ paddingVertical: 16 }}
              >
                <CustomText variant={'body'} fontSize={15} color={'white'}>
                  Daily Transfer Limit
                </CustomText>
                <CustomText variant={'body'} fontSize={15} fontWeight={'700'} color={'white'}>
                  ₦10,000,000 per day
                </CustomText>
              </Box>

              {/* Manage Daily Limit Card */}
              <Pressable onPress={handleManageLimit}>
                <Box
                  flexDirection={'row'}
                  alignItems={'center'}
                  style={{
                    backgroundColor: '#1a1a1a',
                    borderRadius: 12,
                    padding: 20,
                    marginTop: 15,
                  }}
                >
                  <Box
                    width={40}
                    height={40}
                    style={{ backgroundColor: '#25c1de', borderRadius: 20, marginRight: 15 }}
                    alignItems={'center'}
                    justifyContent={'center'}
                  >
                    <Ionicons name="swap-horizontal" size={24} color="white" />
                  </Box>
                  <Box flex={1}>
                    <CustomText variant={'body'} fontSize={16} fontWeight={'700'} color={'white'}>
                      Manage Daily Limit
                    </CustomText>
                    <CustomText
                      variant={'body'}
                      fontSize={13}
                      style={{ color: '#8a8a8a', marginTop: 4 }}
                    >
                      Increase or decrease your daily transfer limit to other banks.
                    </CustomText>
                  </Box>
                  <Ionicons name="chevron-forward-sharp" size={22} color="#8a8a8a" />
                </Box>
              </Pressable>
            </Box>

            {/* Free Transfers */}
            <Box
              flexDirection={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
              style={{
                paddingVertical: 20,
                marginTop: 30,
                borderBottomWidth: 0.5,
                borderBottomColor: '#2a2a2a',
              }}
            >
              <CustomText variant={'body'} fontSize={15} color={'white'}>
                Free Transfers
              </CustomText>
              <CustomText variant={'body'} fontSize={15} fontWeight={'700'} color={'white'}>
                9 left this month
              </CustomText>
            </Box>

            {/* KUDA TO KUDA Section */}
            <Box style={{ marginTop: 30 }}>
              <CustomText
                variant={'body'}
                fontSize={13}
                fontWeight={'700'}
                style={{ color: '#6a6a6a', marginBottom: 20 }}
              >
                KUDA TO KUDA
              </CustomText>

              {/* Sending */}
              <Box
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                style={{ paddingVertical: 16, borderBottomWidth: 0.5, borderBottomColor: '#2a2a2a' }}
              >
                <CustomText variant={'body'} fontSize={15} color={'white'}>
                  Sending (Per Transaction)
                </CustomText>
                <CustomText variant={'body'} fontSize={15} fontWeight={'700'} color={'white'}>
                  ₦2,000,000
                </CustomText>
              </Box>

              {/* Receiving */}
              <Box
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                style={{ paddingVertical: 16, borderBottomWidth: 0.5, borderBottomColor: '#2a2a2a' }}
              >
                <CustomText variant={'body'} fontSize={15} color={'white'}>
                  Receiving (Per Transaction)
                </CustomText>
                <CustomText variant={'body'} fontSize={15} fontWeight={'700'} color={'white'}>
                  ₦100,000
                </CustomText>
              </Box>

              {/* Daily Transfer Limit */}
              <Box
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                style={{ paddingVertical: 16 }}
              >
                <CustomText variant={'body'} fontSize={15} color={'white'}>
                  Daily Transfer Limit
                </CustomText>
                <CustomText variant={'body'} fontSize={15} fontWeight={'700'} color={'white'}>
                  ₦1,000,000 per day
                </CustomText>
              </Box>
            </Box>

            {/* ACCOUNT BALANCE Section */}
            <Box style={{ marginTop: 30 }}>
              <CustomText
                variant={'body'}
                fontSize={13}
                fontWeight={'700'}
                style={{ color: '#6a6a6a', marginBottom: 20 }}
              >
                ACCOUNT BALANCE
              </CustomText>

              <Box
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                style={{ paddingVertical: 16 }}
              >
                <CustomText variant={'body'} fontSize={15} color={'white'}>
                  Maximum Balance
                </CustomText>
                <CustomText variant={'body'} fontSize={15} fontWeight={'700'} color={'white'}>
                  ₦500,000
                </CustomText>
              </Box>
            </Box>

            {/* ATM WITHDRAWALS Section */}
            <Box style={{ marginTop: 30 }}>
              <CustomText
                variant={'body'}
                fontSize={13}
                fontWeight={'700'}
                style={{ color: '#6a6a6a', marginBottom: 20 }}
              >
                ATM WITHDRAWALS
              </CustomText>

              {/* Single Withdrawal */}
              <Box
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                style={{ paddingVertical: 16, borderBottomWidth: 0.5, borderBottomColor: '#2a2a2a' }}
              >
                <CustomText variant={'body'} fontSize={15} color={'white'}>
                  Single Withdrawal
                </CustomText>
                <CustomText variant={'body'} fontSize={15} fontWeight={'700'} color={'white'}>
                  ₦20,000
                </CustomText>
              </Box>

              {/* Withdrawals Per Day */}
              <Box
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                style={{ paddingVertical: 16 }}
              >
                <CustomText variant={'body'} fontSize={15} color={'white'}>
                  Withdrawals Per Day
                </CustomText>
                <CustomText variant={'body'} fontSize={15} fontWeight={'700'} color={'white'}>
                  ₦50,000
                </CustomText>
              </Box>
            </Box>

            {/* POS PAYMENTS Section */}
            <Box style={{ marginTop: 30, marginBottom: 30 }}>
              <CustomText
                variant={'body'}
                fontSize={13}
                fontWeight={'700'}
                style={{ color: '#6a6a6a', marginBottom: 20 }}
              >
                POS PAYMENTS
              </CustomText>

              <Box
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                style={{ paddingVertical: 16 }}
              >
                <CustomText variant={'body'} fontSize={15} color={'white'}>
                  Single Payment
                </CustomText>
                <CustomText variant={'body'} fontSize={15} fontWeight={'700'} color={'white'}>
                  ₦100,000
                </CustomText>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Upgrade Account Button */}
        <Box width={'100%'} alignItems={'center'} style={{ marginBottom: 40, paddingHorizontal: 20 }}>
          <Pressable
            style={{
              width: '90%',
              backgroundColor: '#ff5757',
              borderRadius: 8,
              paddingVertical: 16,
              alignItems: 'center',
            }}
            onPress={handleUpgradeAccount}
          >
            <CustomText variant={'body'} fontSize={16} fontWeight={'800'} color={'white'}>
              Upgrade Account
            </CustomText>
          </Pressable>
        </Box>

        <Box style={{ height: 20 }} />
      </ScrollView>
    </Box>
  );
}