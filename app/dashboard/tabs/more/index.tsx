import React from 'react';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import { Ionicons } from '@expo/vector-icons';
import { View, Image, Pressable, ScrollView } from 'react-native';
import { Href, useRouter } from 'expo-router';
import { Linking } from 'react-native';

const dp = require('../../../../assets/images/placeholder.jpeg');
const kudalogo = require('../../../../assets/images/kuda.png');

export default function Index() {
  const router = useRouter();

  const menuItems = [
    {
      id: 'business',
      title: 'Get Kuda Business',
      subtitle: null,
      icon: kudalogo,
      iconType: 'image' as const,
      link: 'https://play.google.com/store/apps/details?id=com.kuda.business&hl=en',
      isExternalLink: true,
    },
    {
      id: 'statements',
      title: 'Statements & Reports',
      subtitle: 'Get a statement for your Spend account or Pocket',
      icon: 'document-text-outline',
      iconType: 'ionicon' as const,
      iconColor: '#30b06a',
      link: '../statements',
      isExternalLink: false,
    },
    {
      id: 'cards',
      title: 'Saved Cards',
      subtitle: 'Manage connected cards',
      icon: 'card',
      iconType: 'ionicon' as const,
      iconColor: '#25c1de',
      link: '../savedCards',
      isExternalLink: false,
    },
    {
      id: 'help',
      title: 'Get Help',
      subtitle: 'Get support or send feedback',
      icon: 'help-circle-outline',
      iconType: 'ionicon' as const,
      iconColor: '#fb265d',
      link: '../getHelp',
      isExternalLink: false,
    },
    {
      id: 'linkedAccounts',
      title: 'Linked Accounts',
      subtitle: 'Automate your bill payments.',
      icon: 'person-circle',
      iconType: 'ionicon' as const,
      iconColor: '#ffd700',
      link: '../linkedAccounts',
      isExternalLink: false,
    },
    {
      id: 'security',
      title: 'Security',
      subtitle: 'Protect yourself from intruders',
      icon: 'lock-closed',
      iconType: 'ionicon' as const,
      iconColor: '#ffff00',
      link: '../security',
      isExternalLink: false,
    },
    {
      id: 'cashback',
      title: 'Cashback',
      subtitle: "See how much you've earned.",
      icon: 'wallet',
      iconType: 'ionicon' as const,
      iconColor: '#30b06a',
      link: '../cashback',
      isExternalLink: false,
    },
    {
      id: 'appThemes',
      title: 'App Themes',
      subtitle: 'Choose how your app looks.',
      icon: 'color-palette',
      iconType: 'ionicon' as const,
      iconColor: '#25c1de',
      link: '../appThemes',
      isExternalLink: false,
    },
    {
      id: 'referrals',
      title: 'Referrals',
      subtitle: 'Get paid when your friends join Kuda',
      icon: 'gift',
      iconType: 'ionicon' as const,
      iconColor: '#30b06a',
      link: '../appThemes',
      isExternalLink: false,
    },
    {
      id: 'accountLimits',
      title: 'Account Limits',
      subtitle: 'How much you can spend and receive',
      icon: 'analytics',
      iconType: 'ionicon' as const,
      iconColor: '#25c1de',
      link: '../accountLimits',
      isExternalLink: false,
    },
    {
      id: 'legal',
      title: 'Legal',
      subtitle: 'About our contract with you',
      icon: 'document-text',
      iconType: 'ionicon' as const,
      iconColor: '#fb265d',
      link: '../legal',
      isExternalLink: false,
    },
  ];

  const handlePress = (item: typeof menuItems[0]) => {
    if (item.isExternalLink) {
      Linking.openURL(item.link);
    } else {
      router.push(item.link as any);
    }
  };

  const handleSignOut = () => {
    // Add sign out logic here
    console.log('Sign out pressed');
  };

  return (
    <ScrollView style={{ backgroundColor: '#121212' }}>
      <Box height={'100%'} width={'100%'} style={{ backgroundColor: '#121212' }}>
        {/* Header */}
        <Box
          height={60}
          paddingTop={'lg'}
          borderBottomWidth={0.2}
          style={{ borderColor: '#a1a1a1' }}
          width={'100%'}
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'center'}
          marginTop={'lg'}
        >
          <Box
            width={'100%'}
            height={50}
            justifyContent={'space-between'}
            alignItems={'center'}
            flexDirection={'row'}
          >
            <Box width={'50%'} padding={'md'} flexDirection={'row'} justifyContent={'flex-end'}>
              <CustomText variant={'body'} color={'white'} fontWeight={'800'} fontSize={14}>
                More
              </CustomText>
            </Box>
            <Box flexDirection={'row'} width={'50%'} padding={'md'} justifyContent={'flex-end'}>
              <Ionicons name="notifications-sharp" size={20} color="white" />
            </Box>
          </Box>
        </Box>

        {/* Profile */}
        <Box width={'100%'} alignItems={'center'}>
          <Box width={'90%'} alignItems={'center'}>
            <Box
              height={100}
              width={'100%'}
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'center'}
              marginTop={'md'}
            >
              <Box width={'20%'}>
                <Box
                  height={50}
                  width={50}
                  style={{backgroundColor:'#3b3a3aff'}}
                  borderRadius={100}
                  alignItems={'center'}
                  justifyContent={'center'}
                >
                  <Image
                    source={dp}
                    resizeMode={'cover'}
                    style={{ width: '100%', height: '100%' }}
                    borderRadius={100}
                  />
                </Box>
              </Box>
              <Box width={'70%'}>
                <CustomText variant={'body'} color={'white'} fontWeight={'800'} fontSize={16}>
                  Hi, Wisdom John
                </CustomText>
              </Box>
              <Box width={'10%'} alignItems={'center'} justifyContent={'center'}>
                <Ionicons name="chevron-forward-sharp" size={20} color="gray" />
              </Box>
            </Box>

            {/* Menu Items */}
            {menuItems.map((item, index) => (
              <Pressable key={item.id} onPress={() => handlePress(item)}>
                <Box flexDirection={'row'} marginTop={index === 0 ? 'md' : 'lg'}>
                  <Box width={'10%'} justifyContent={'center'} alignItems={'center'}>
                    {item.iconType === 'image' ? (
                      <Image source={item.icon} style={{ width: 30, height: 30 }} />
                    ) : (
                      <Box
                        height={30}
                        width={30}
                        style={{ backgroundColor: '#212123' }}
                        borderRadius={10}
                        alignItems={'center'}
                        justifyContent={'center'}
                      >
                        <Ionicons
                          name={item.icon as any}
                          size={item.icon === 'lock-closed' ? 18 : 20}
                          style={{ color: item.iconColor }}
                        />
                      </Box>
                    )}
                  </Box>

                  <Box width={'80%'} paddingLeft={'sm'}>
                    <CustomText variant={'body'} fontSize={14} fontWeight={'800'} color={'white'}>
                      {item.title}
                    </CustomText>
                    {item.subtitle && (
                      <CustomText variant={'xs'} fontSize={12} style={{ color: '#a1a1a1' }}>
                        {item.subtitle}
                      </CustomText>
                    )}
                  </Box>

                  <Box width={'10%'} justifyContent={'center'} alignItems={'flex-end'}>
                    <Ionicons name="chevron-forward-sharp" size={20} color="gray" />
                  </Box>
                </Box>
              </Pressable>
            ))}

            {/* Sign Out Button */}
            <Pressable onPress={handleSignOut}>
              <Box width={'100%'} alignItems={'center'} marginTop={'xl'} style={{ marginTop: 40 }}>
                <CustomText variant={'body'} fontSize={16} fontWeight={'800'} style={{ color: '#fb265d' }}>
                  Sign Out
                </CustomText>
              </Box>
            </Pressable>

            {/* Version Number */}
            <Box width={'100%'} alignItems={'center'} style={{ marginTop: 20, marginBottom: 30 }}>
              <CustomText variant={'xs'} fontSize={13} style={{ color: '#6a6a6a' }}>
                2.002381
              </CustomText>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box style={{ height: 20, backgroundColor: '#121212' }} />
    </ScrollView>
  );
}