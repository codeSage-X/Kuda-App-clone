import React from 'react';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import { Ionicons } from '@expo/vector-icons';
import { View, Image, Pressable, ScrollView, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const kudaLogo = require('../../../assets/images/kuda.png');

export default function Index() {
  const router = useRouter();
  const userName = 'Sulaiman Olawole';

  const handleNavigation = () => {
    router.back();
  };

  const handleMessagesPress = () => {
    router.push('./messages');
  };

  const handleHelpPress = () => {
    const url = 'https://help.kuda.com';
    Linking.openURL(url);
  };

  const handleSystemStatusPress = () => {
    const url = 'https://status.kuda.com';
    Linking.openURL(url);
  };

  const handleSendMessagePress = () => {
   router.push('./messages');
  };

  const handleSearchHelpPress = () => {
    const url = 'https://help.kuda.com';
    Linking.openURL(url);
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 3);
  };

  const initials = getInitials(userName).split('');

  return (
    <Box flex={1} style={{ backgroundColor: '#f5f5f5' }}>
      {/* Background with gradient */}
      <LinearGradient
        colors={['#6b4a9e', '#7a5aae', '#8d6fbe', '#f5f5f5']}
        locations={[0, 0.3, 0.5, 1]}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 500,
        }}
      />

      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {/* Header Content */}
        <Box style={{ paddingTop: 50, paddingHorizontal: 20 }}>
          {/* Top Bar */}
          <Box
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            style={{ marginBottom: 40 }}
          >
            {/* Kuda Logo */}
            <Box
              width={60}
              height={60}
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)', borderRadius: 10 }}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Image source={kudaLogo} style={{ width: 45, height: 35 }} resizeMode="contain" />
            </Box>

            {/* User Initials and Close Button */}
            <Box flexDirection={'row'} alignItems={'center'}>
              {initials.map((initial, index) => (
                <Box
                  key={index}
                  width={45}
                  height={45}
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.15)',
                    borderRadius: 22.5,
                    marginLeft: 8,
                  }}
                  alignItems={'center'}
                  justifyContent={'center'}
                >
                  <CustomText variant={'body'} fontSize={16} fontWeight={'700'} color={'white'}>
                    {initial}
                  </CustomText>
                </Box>
              ))}
              <Pressable onPress={handleNavigation}>
                <Box
                  width={45}
                  height={45}
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.15)',
                    borderRadius: 22.5,
                    marginLeft: 8,
                  }}
                  alignItems={'center'}
                  justifyContent={'center'}
                >
                  <Ionicons name="close" size={26} color="white" />
                </Box>
              </Pressable>
            </Box>
          </Box>

          {/* Greeting */}
          <Box style={{ marginBottom: 30 }}>
           <Box height={30}>
            <CustomText
              variant={'body'}
              fontSize={22}
              fontWeight={'800'}
              color={'white'}
              >
              Hi {userName} 👋
            </CustomText>
           </Box>
            <CustomText variant={'body'} fontSize={25} fontWeight={'800'} color={'white'}>
              How can we help?
            </CustomText>
          </Box>
        </Box>

        {/* Cards Section - Overlapping the gradient */}
        <Box width={'100%'} alignItems={'center'}>
          <Box width={'90%'}>
            {/* Messages and Help Card */}
            <Box
              style={{
                backgroundColor: 'white',
                borderRadius: 16,
                padding: 18,
                marginBottom: 15,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 8,
                elevation: 3,
              }}
            >
              {/* Messages */}
              <Pressable onPress={handleMessagesPress}>
                <Box
                  flexDirection={'row'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  style={{ paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#efefef' }}
                >
                  <CustomText variant={'body'} fontSize={18} fontWeight={'700'} color={'black'}>
                    Messages
                  </CustomText>
                  <Ionicons name="chatbubble" size={24} color="#6b4a9e" />
                </Box>
              </Pressable>

              {/* Help */}
              <Pressable onPress={handleHelpPress}>
                <Box
                  flexDirection={'row'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  style={{ paddingVertical: 12 }}
                >
                  <CustomText variant={'body'} fontSize={18} fontWeight={'700'} color={'black'}>
                    Help
                  </CustomText>
                  <Ionicons name="help-circle" size={24} color="#6b4a9e" />
                </Box>
              </Pressable>
            </Box>

            {/* System Status Card */}
            <Pressable onPress={handleSystemStatusPress}>
              <Box
                style={{
                  backgroundColor: 'white',
                  borderRadius: 16,
                  padding: 18,
                  marginBottom: 15,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 8,
                  elevation: 3,
                }}
              >
                <Box flexDirection={'row'} alignItems={'center'}>
                  <Box
                    width={45}
                    height={45}
                    style={{ backgroundColor: '#30b06a', borderRadius: 22.5, marginRight: 15 }}
                    alignItems={'center'}
                    justifyContent={'center'}
                  >
                    <Ionicons name="checkmark" size={30} color="white" />
                  </Box>
                  <Box flex={1}>
                    <CustomText variant={'body'} fontSize={17} fontWeight={'700'} color={'black'}>
                      Status: All Systems Operational
                    </CustomText>
                    <CustomText
                      variant={'body'}
                      fontSize={13}
                      style={{ color: '#999', marginTop: 4 }}
                    >
                      Updated Nov 24, 21:41 CET
                    </CustomText>
                  </Box>
                </Box>
              </Box>
            </Pressable>

            {/* Send us a message Card */}
            <Pressable onPress={handleSendMessagePress}>
              <Box
                style={{
                  backgroundColor: 'white',
                  borderRadius: 16,
                  padding: 18,
                  marginBottom: 15,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 8,
                  elevation: 3,
                }}
              >
                <Box flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                  <Box flex={1}>
                    <CustomText variant={'body'} fontSize={17} fontWeight={'700'} color={'black'}>
                      Send us a message
                    </CustomText>
                    <CustomText
                      variant={'body'}
                      fontSize={14}
                      style={{ color: '#999', marginTop: 4 }}
                    >
                      We typically reply in a few minutes
                    </CustomText>
                  </Box>
                  <Ionicons name="send" size={24} color="#6b4a9e" />
                </Box>
              </Box>
            </Pressable>

            {/* Search for help Card */}
            <Pressable onPress={handleSearchHelpPress}>
              <Box
                style={{
                  backgroundColor: 'white',
                  borderRadius: 16,
                  padding: 18,
                  marginBottom: 40,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 8,
                  elevation: 3,
                }}
              >
                <Box flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                  <CustomText variant={'body'} fontSize={17} fontWeight={'700'} color={'black'}>
                    Search for help
                  </CustomText>
                  <Ionicons name="search" size={24} color="#6b4a9e" />
                </Box>
              </Box>
            </Pressable>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
}