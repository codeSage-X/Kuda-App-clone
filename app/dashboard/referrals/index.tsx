import React, { useState, useRef } from 'react';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import { Ionicons } from '@expo/vector-icons';
import { View, Image, Pressable, ScrollView, Dimensions, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function Index() {
  const router = useRouter();
  const [activeSlide, setActiveSlide] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleNavigation = () => {
    router.replace('./tabs/more');
  };

  const slides = [
    {
      id: 1,
      backgroundColor: '#d4e4f7',
      image: require('../../../assets/images/ui.png'),
      text: 'Customise your Kuda app themes and icon anytime when you unlock Kuda premium',
    },
    {
      id: 2,
      backgroundColor: '#f5f0e1',
      image: require('../../../assets/images/chart.png'),
      text: 'Budgeting helps you categorise your spending so you can see where your money is going',
    },
    {
      id: 3,
      backgroundColor: '#f5e1e8',
      image: require('../../../assets/images/ui.png'),
      text: 'Create your Kuda avatar and update your profile picture anytime.',
    },
  ];

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setActiveSlide(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const renderSlide = ({ item }: any) => {
    const circleSize = SCREEN_WIDTH * 0.8;
    
    return (
      <Box width={SCREEN_WIDTH} alignItems={'center'} style={{ paddingHorizontal: 20 }}>
        {/* Circular Image Container */}
        <View
          style={{
            width: circleSize,
            height: circleSize,
            borderRadius: circleSize / 2,
            backgroundColor: item.backgroundColor,
            overflow: 'hidden',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            source={item.image}
            style={{
              width: circleSize,
              height: circleSize,
              resizeMode: 'cover',
            }}
          />
        </View>

        {/* Description Text */}
        <Box width={'90%'} alignItems={'center'} style={{ marginTop: 40 }}>
          <CustomText
            variant={'body'}
            fontSize={15}
            textAlign={'center'}
            color={'white'}
            style={{ lineHeight: 22 }}
          >
            {item.text}
          </CustomText>
        </Box>
      </Box>
    );
  };

  return (
    <Box flex={1} style={{ backgroundColor: '#121212' }}>
      {/* Header with Close Button */}
      <Box style={{ marginTop: 50, marginLeft: 20, marginBottom: 20 }}>
        <Pressable onPress={() => handleNavigation()}>
          <Ionicons name="close" size={32} color="white" />
        </Pressable>
      </Box>

      {/* Title Section */}
      <Box alignItems={'center'} style={{ marginBottom: 30 }}>
        <CustomText
          variant={'body'}
          fontSize={24}
          fontWeight={'800'}
          color={'white'}
          textAlign={'center'}
          style={{ marginBottom: 10 }}
        >
          Be part of Kuda Rewards
        </CustomText>
        <CustomText
          variant={'body'}
          fontSize={14}
          textAlign={'center'}
          color={'white'}
          style={{ opacity: 0.7, paddingHorizontal: 30 }}
        >
          Upgrade to Plus to unlock all Kuda rewards features
        </CustomText>
      </Box>

      {/* Swiper */}
      <Box flex={1} justifyContent={'center'}>
        <FlatList
          ref={flatListRef}
          data={slides}
          renderItem={renderSlide}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />
      </Box>

      {/* Pagination Dots */}
      <Box
        flexDirection={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        style={{ marginBottom: 30 }}
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            width={10}
            height={10}
            style={{
              borderRadius: 5,
              backgroundColor: activeSlide === index ? '#30b06a' : '#4a4a4a',
              marginHorizontal: 5,
            }}
          />
        ))}
      </Box>

      {/* Upgrade Button */}
      <Box width={'100%'} alignItems={'center'} style={{ marginBottom: 40, paddingHorizontal: 20 }}>
        <Pressable
          style={{
            width: '100%',
            backgroundColor: '#6a3de8',
            borderRadius: 8,
            paddingVertical: 18,
            alignItems: 'center',
          }}
          onPress={() => console.log('Upgrade to Plus')}
        >
          <CustomText variant={'body'} fontSize={16} fontWeight={'800'} color={'white'}>
            Upgrade to Plus
          </CustomText>
        </Pressable>
      </Box>
    </Box>
  );
}