import React from 'react';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import { Ionicons } from '@expo/vector-icons';
import { View, Image, Pressable, ScrollView, Linking } from 'react-native';
import { Href, useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  const navigationMap = {
    statement: '../statement',
    more: './tabs/more/',
  } as const;

  const handleNavigation = () => {

    router.back()
  };

  const helpMenuItems = [
    {
      id: 'call',
      title: 'Call Us',
      subtitle: 'Contact Call Center',
      icon: 'call',
      iconColor: '#30b06a',
      backgroundColor: '#1a3d2b',
      link: './callUs', // Replace with actual phone number
      isExternalLink: false,
    },
    {
      id: 'chat',
      title: 'Chat With Us',
      subtitle: 'Send an in-app chat',
      icon: 'chatbubble-ellipses',
      iconColor: '#25c1de',
      backgroundColor: '#1a3840',
      link: './chat',
      isExternalLink: false,
    },
    {
      id: 'dispute',
      title: 'Dispute Status',
      subtitle: 'Track your transaction disputes.',
      icon: 'receipt',
      iconColor: '#fb265d',
      backgroundColor: '#3d1a24',
      link: '../dispute',
      isExternalLink: false,
    },
    {
      id: 'faqs',
      title: 'FAQs',
      subtitle: 'Frequently Asked Questions',
      icon: 'help-circle',
      iconColor: '#ffd700',
      backgroundColor: '#3d3a1a',
      link: 'https://help.kuda.com/en/collections/8357623-faqs',
      isExternalLink: true,
    },
  ];

  const handlePress = (item: typeof helpMenuItems[0]) => {
    if (item.isExternalLink) {
      // Handle external links like phone calls
      // console.log('External link:', item.link);
       const url = item.link;
          Linking.openURL(url);

    } else {
      router.replace(item.link as any);
    }
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

        {/* Help Menu Items */}
        <Box width={'100%'} alignItems={'center'}>
          <Box width={'90%'} alignItems={'center'}>
            {helpMenuItems.map((item, index) => (
              <Pressable key={item.id} onPress={() => handlePress(item)}>
                <Box flexDirection={'row'} style={{ marginTop: index === 0 ? 30 : 20 }}>
                  <Box width={'10%'} justifyContent={'center'} alignItems={'center'}>
                    <Box
                      height={40}
                      width={35}
                      style={{ backgroundColor: item.backgroundColor, borderRadius: 10 }}
                      alignItems={'center'}
                      justifyContent={'center'}
                    >
                      <Ionicons name={item.icon as any} size={24} style={{ color: item.iconColor }} />
                    </Box>
                  </Box>

                  <Box width={'80%'} paddingLeft={'lg'} justifyContent={'center'}>
                    <CustomText variant={'body'} fontSize={16} fontWeight={'800'} color={'white'}>
                      {item.title}
                    </CustomText>
                    <CustomText variant={'xs'} fontSize={13} style={{ color: '#a1a1a1', marginTop: 2 }}>
                      {item.subtitle}
                    </CustomText>
                  </Box>

                  <Box width={'10%'} justifyContent={'center'} alignItems={'flex-end'}>
                    <Ionicons name="chevron-forward-sharp" size={20} color="gray" />
                  </Box>
                </Box>
              </Pressable>
            ))}
          </Box>
        </Box>
      </Box>

      <Box style={{ height: 20, backgroundColor: '#121212' }} />
    </ScrollView>
  );
}