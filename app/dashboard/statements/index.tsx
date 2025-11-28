import React from 'react';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import { Ionicons } from '@expo/vector-icons';
import { View, Image, Pressable, ScrollView } from 'react-native';
import { Href, useRouter } from 'expo-router';


const dp = require('../../../assets/images/placeholder.jpeg');
const kudalogo = require('../../../assets/images/kuda.png');

export default function Index() {
  const router = useRouter();

  
const navigationMap = {

  statement: '../statement',
  more: '../tabs/more/',

} as const;

const handleNavigation = (key: keyof typeof navigationMap) => {
  const route = navigationMap[key];
  router.replace(route as any);
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
        <Box flexDirection={'row'} width={'10%'} padding={'md'} justifyContent={'flex-end'}>
            <Pressable onPress={() => handleNavigation('more')}>
        <Ionicons name="chevron-back" size={20} color="white" />
      </Pressable>

            </Box>
            <Box width={'70%'} padding={'md'} flexDirection={'row'} justifyContent={'flex-start'}>
              <CustomText variant={'body'} color={'white'} fontWeight={'800'} fontSize={14}>
               Statement & Reports
              </CustomText>
            </Box>
          
          </Box>
        </Box>

        {/* Profile */}
        <Box width={'100%'} alignItems={'center'}>
          <Box width={'90%'} alignItems={'center'}>
       
        
            {/* Statements & Reports */}
            <Pressable onPress={() => handleNavigation('statement')}>
              <Box flexDirection={'row'} marginTop={'lg'}>
                <Box width={'10%'} justifyContent={'center'} alignItems={'center'}>
                  <Box
                    height={30}
                    width={30}
                    style={{ backgroundColor: '#212123' }}
                    borderRadius={10}
                    alignItems={'center'}
                    justifyContent={'center'}
                  >
                    <Ionicons name="document-text-outline" size={20} style={{ color: '#30b06a' }} />
                  </Box>
                </Box>

                <Box width={'80%'} paddingLeft={'sm'}>
                  <CustomText variant={'body'} fontSize={14} fontWeight={'800'} color={'white'}>
                  Request Statement
                  </CustomText>
                  
                </Box>

                <Box width={'10%'} justifyContent={'center'} alignItems={'flex-end'}>
                  <Ionicons name="chevron-forward-sharp" size={20} color="gray" />
                </Box>
              </Box>
            </Pressable>

  
          </Box>
        </Box>
      </Box>

      <Box style={{ height: 20, backgroundColor: '#121212' }} />
    </ScrollView>
  );
}
