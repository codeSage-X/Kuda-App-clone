import React, { useState } from 'react';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, SafeAreaView, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper'
import Save from './save';
import Borrow from './borrow';
import Invest from './invest';
import { Link, router } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';

const logo = require('../../../../assets/images/placeholder.jpeg');
const ngn = require('../../../../assets/images/ngn.png');
const bankLogo = require('../../../../assets/images/opay.jpg');
const gtb = require('../../../../assets/images/gt.png');
const access = require('../../../../assets/images/accessB.png');
const stamp2 = require('../../../../assets/images/stamp2.png');
const opay = require('../../../../assets/images/opay.jpg');
const jaiz = require('../../../../assets/images/jaiz.png');
const uba = require('../../../../assets/images/uba.jpg');
const fcmb = require('../../../../assets/images/fcmb.png');
const ptb = require('../../../../assets/images/ptb.png');
const sterling = require('../../../../assets/images/sterling.png');

const items = ['Spend', 'Save', 'Borrow', 'Invest'];

const options = [
  {
    title: 'Transfer',
    icon: 'arrow-up-circle-sharp' as 'arrow-up-circle-sharp',
    link: '/dashboard/tabs/send/'
  },
  {
    title: 'Add money',
    icon: 'add-circle-sharp' as 'add-circle-sharp',
    link: '/dashboard/addMoney/'
  }
];

const images = [
  { id: 1, uri: 'https://res.cloudinary.com/xenxei46/image/upload/v1725382735/WhatsApp_Image_2024-09-03_at_17.49.18_o2osip.jpg', },
  { id: 2, uri: 'https://res.cloudinary.com/xenxei46/image/upload/v1725382711/slide1_xngk36.jpg', },
  { id: 3, uri: 'https://res.cloudinary.com/xenxei46/image/upload/v1725382736/WhatsApp_Image_2024-09-03_at_17.49.18_1_y6qs3s.jpg', },
  { id: 4, uri: 'https://res.cloudinary.com/xenxei46/image/upload/v1725382735/WhatsApp_Image_2024-09-03_at_17.49.16_mu2wsm.jpg', }
];

const images2 = [
  { id: 1, uri: 'https://res.cloudinary.com/xenxei46/image/upload/v1725382736/WhatsApp_Image_2024-09-03_at_17.49.20_nh1cgs.jpg', title: 'Happy kuda Anniversary' },
  { id: 2, uri: 'https://res.cloudinary.com/xenxei46/image/upload/v1725382736/WhatsApp_Image_2024-09-03_at_17.49.19_1_piaadv.jpg', title: 'Cardless Payment Through Seerbit', },
  { id: 3, uri: 'https://res.cloudinary.com/xenxei46/image/upload/v1725382735/WhatsApp_Image_2024-09-03_at_17.49.19_tnco1d.jpg', title: 'We Updated Account Tiers', },
];

const features = [
  { name: 'Airtime', icon: 'call-sharp' as 'call-sharp', color: '#ffe255' },
  { name: 'Internet', icon: 'wifi-sharp' as 'wifi-sharp', color: '#ff7263' },
  { name: 'Solar', icon: 'sunny-sharp' as 'sunny-sharp', color: '#ffe255' },
  { name: 'Electricity', icon: 'bulb-sharp' as 'bulb-sharp', color: '#ff7263' },
];

// Recent transactions array
const recentTransactions = [
  {
    id: 1,
    sender: 'Jeff Ade',
    time: '03:50pm',
    date: '07 Nov 2025',
    amount: '+₦9,000.00',
    icon: jaiz,
    isPositive: true,
    borderColor: '#ffffff',
    bgColor: '#ffffff'
  },
  {
    id: 2,
    sender: 'Stamp Duty On Electronic Funds',
    time: '03:50pm',
    date: '07 Nov 2025',
    amount: '-₦50.00',
    icon: stamp2,
    isPositive: false,
    borderColor: '#3a1817',
    bgColor: '#411211'
  },
  {
    id: 3,
    sender: 'Chike Smith',
    time: '02:16pm',
    date: '06 Nov 2025',
    amount: '+₦100,000.00',
    icon: jaiz,
    isPositive: true,
    borderColor: '#ffffff',
    bgColor: '#ffffff'
  }
];

const Dot = ({ active }: any) => (
  <View
    style={{
      width: active ? 10 : 8,
      height: active ? 10 : 8,
      borderRadius: 5,
      backgroundColor: active ? '#FFFFFF' : 'black',
      borderWidth: active ? 2 : 2,
      borderColor: active ? '#FFFFFF' : '#a1a1a1',
      marginHorizontal: 3,
    }}
  />
);

export default function Index() {
  const [activeItem, setActiveItem] = useState('Spend');

  const handlePress = (link: any) => {
    router.push(link);
  };

  return (
    <Box height={'100%'} width={'100%'} style={{ backgroundColor: '#121212' }} justifyContent={'center'} flexDirection={'row'}>
      <Box height={'100%'} width={'90%'} flexDirection={'column'} alignItems={'center'}>
        <Box height={100} width={'100%'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} marginTop={'md'}>
          <Box width={'20%'}>
            <Box height={50} width={50} borderRadius={100} alignItems={'center'} justifyContent={'center'} style={{ backgroundColor: '#2e2c2cff' }}>
              <Image source={logo} resizeMode={'cover'} style={{ width: '100%', height: '100%' }} borderRadius={100} />
            </Box>
          </Box>
          <Box width={'70%'}>
            <CustomText variant={'body'} color={'white'} fontWeight={'800'}>Hi, Wisdom</CustomText>
          </Box>
          <Box width={'10%'} alignItems={'center'} justifyContent={'center'}>
            <Ionicons name="chatbox-ellipses" size={26} color="white" />
          </Box>
        </Box>

        <Box height={30} width={'100%'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
          {items.map((item) => (
            <Pressable
              key={item}
              onPress={() => setActiveItem(item)}
              style={{
                width: '22%',
                height: '100%',
                backgroundColor: '#292929',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <CustomText
                variant={'xs'} fontSize={12}
                style={{ color: activeItem === item ? 'white' : '#a1a1a1' }}
                fontWeight={activeItem === item ? '700' : '500'}
              >
                {item}
              </CustomText>
            </Pressable>
          ))}
        </Box>

        <ScrollView style={{ width: '100%' }}>
          <Box height={'100%'} width={'100%'} flexDirection={'column'} alignItems={'center'}>
            <Box height={'100%'} width={'100%'} alignItems={'center'} justifyContent={'center'}>
              {activeItem === 'Spend' && (
                <>
                  <Box height={'100%'} width={'100%'} >
                    <Box height={25} flexDirection={'row'} alignItems={'center'} marginTop={'md'}>
                      <Image source={ngn} resizeMode={'cover'} style={{ width: 20, height: 20 }} />
                      <CustomText variant={'xs'} fontSize={12} color={'white'} fontWeight={'100'} marginLeft={'xs'}>Nigerian Naira</CustomText>
                    </Box>

                    <Box height={'auto'} flexDirection={'row'} >
                      <Box width={'80%'}>
                        <CustomText variant={'header'} fontSize={24} color={'white'}>₦608,226.22</CustomText>
                      </Box>
                      <Box width={'20%'} alignItems={'flex-end'} justifyContent={'center'}>
                        <Ionicons name="ellipsis-horizontal-circle-sharp" size={18} color="#a1a1a1" />
                      </Box>
                    </Box>

                    <Box height={25} style={{ marginTop: -7 }} flexDirection={'row'}>
                      <CustomText variant={'xs'} fontSize={12} style={{ color: '#a1a1a1' }} fontWeight={'100'} marginLeft={'xs'}>Last updated a few seconds ago</CustomText>
                    </Box>

                    <Box flexDirection={'row'} height={40} width={'100%'} justifyContent={'space-between'}>
                      {options.map((option, index) => (
                        <Pressable
                          key={index}
                          onPress={() => handlePress(option.link)}
                          style={{ width: '48%', backgroundColor: '#212121', height: '100%', borderRadius: 10, }}
                        >
                          <TouchableOpacity>
                            <Box flexDirection={'row'} alignItems={'center'} style={{ height: '100%' }}>
                              <Ionicons name={option.icon} size={24} color="white" style={{ marginLeft: 15 }} />
                              <CustomText variant={'xs'} fontSize={14} color={'white'} fontWeight={'800'} marginLeft={'md'}>
                                {option.title}
                              </CustomText>
                            </Box>
                          </TouchableOpacity>
                        </Pressable>
                      ))}
                    </Box>

                    <Box height={140}>
                      <Box height={'auto'} width={'100%'} flex={1} marginTop={'lg'}>
                        <Swiper
                          dot={<Dot active={false} />}
                          activeDot={<Dot active={true} />}
                          showsPagination={true}
                          height={140}
                        >
                          {images?.map((image) => (
                            <View key={image?.id} style={{
                              flex: 0.6,
                              justifyContent: 'flex-start',
                              alignItems: 'center',
                              backgroundColor: 'transparent',
                            }}>
                              <Image resizeMode='contain' source={{ uri: image?.uri }} style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 8,
                              }} />
                            </View>
                          ))}
                        </Swiper>
                      </Box>
                    </Box>

                    <Box height={'auto'} flexDirection={'row'} justifyContent={'space-between'}>
                      <Box>
                        <CustomText variant={'xs'} style={{ color: '#a1a1a1' }} fontSize={12} fontWeight={'100'} marginLeft={'xs'}>Quick Access</CustomText>
                      </Box>
                      <Box>
                        <CustomText variant={'xs'} color={'white'} fontWeight={'800'} fontSize={12} marginLeft={'xs'}>Edit</CustomText>
                      </Box>
                    </Box>

                    <Box height={80} width={'100%'} marginTop={'lg'} flexDirection={'row'} justifyContent={'space-between'}>
                      {features.map((item, index) => (
                        <Pressable key={index} style={{ width: '22%', height: '100%', borderRadius: 10 }}>
                          <TouchableOpacity>
                            <Box height={'100%'} style={{ backgroundColor: '#212121', alignItems: 'center', justifyContent: 'center' }}>
                              <Ionicons name={item.icon} size={22} color={item.color} />
                              <CustomText variant={'xs'} color={'white'} fontSize={10} fontWeight={'800'} marginTop={'sm'}>
                                {item.name}
                              </CustomText>
                            </Box>
                          </TouchableOpacity>
                        </Pressable>
                      ))}
                    </Box>

                    <Box marginTop={'4xl'} style={{ backgroundColor: '#212121', width: '100%', height: '30%' }} >
                      <Box height={50} width={'100%'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} paddingBottom={'sm'} paddingLeft={'sm'} paddingRight={'sm'}>
                        <CustomText variant={'xs'} color={'white'} fontWeight={'100'} marginLeft={'xs'} fontSize={12} >Transactions</CustomText>
                        <Link href={'/dashboard/transaction/'}>
                          <CustomText variant={'xs'} color={'white'} fontWeight={'600'} fontSize={12} marginLeft={'xs'} marginTop={'sm'} marginRight={'sm'}>View All</CustomText>
                        </Link>
                      </Box>

                      {/* ======================================== Recent transactions ================================== */}
                      {recentTransactions.map((transaction) => (
                        <Box
                          key={transaction.id}
                          height={80}
                          width={'100%'}
                          borderWidth={0.2}
                          style={{ borderColor: transaction.borderColor }}
                          borderLeftWidth={0}
                          borderRightWidth={0}
                          flexDirection={'row'}
                          justifyContent={'space-between'}
                          alignItems={'center'}
                          paddingLeft={'sm'}
                          paddingRight={'sm'}
                        >
                          <Box justifyContent={'center'} alignItems={'center'} width={'10%'}>
                            <Box height={40} width={40} style={{ borderRadius: transaction.isPositive ? 100 : 200, backgroundColor: transaction.bgColor, padding: 2 }}>
                              <Image 
                                source={transaction.icon} 
                                resizeMode={transaction.isPositive ? 'contain' : 'cover'} 
                                style={{ width: '100%', height: '100%', borderRadius: transaction.isPositive ? 100 : 200 }} 
                              />
                            </Box>
                          </Box>
                          <Box width={transaction.isPositive ? '55%' : '70%'} paddingLeft={'sm'}>
                            <CustomText variant={'xs'} fontSize={12} color={'white'} lineHeight={15} fontWeight={'800'} marginLeft={'xs'} marginTop={'sm'} marginRight={'sm'}>
                              {transaction.sender}
                            </CustomText>
                            <CustomText variant={'xs'} fontSize={12} color={'white'} lineHeight={18} marginLeft={'xs'} marginRight={'sm'}>
                              {transaction.time} . {transaction.date}
                            </CustomText>
                          </Box>
                          <Box justifyContent={'center'} alignItems={'center'} paddingBottom={'xl'} width={transaction.isPositive ? '35%' : '20%'}>
                            <CustomText 
                              variant={'xs'} 
                              fontSize={12} 
                              style={{ color: transaction.isPositive ? '#5dcd9b' : 'white' }} 
                              fontWeight={'800'} 
                              marginLeft={'xs'} 
                              marginTop={'sm'} 
                              marginRight={'sm'}
                            >
                              {transaction.amount}
                            </CustomText>
                          </Box>
                        </Box>
                      ))}
                      {/* =============================== Recent transactions closing ================================ */}
                    </Box>

                    <Box height={'auto'} paddingTop={'xl'}>
                      <CustomText variant={'xs'} style={{ color: '#a1a1a1' }} fontSize={12} fontWeight={'100'} marginLeft={'xs'}>You might like also</CustomText>
                    </Box>

                    <Box marginTop={'xl'} height={300} paddingBottom={'2xl'} >
                      <Box height={'auto'} width={'100%'} flex={1} marginTop={'lg'}>
                        <Swiper
                          dot={<Dot active={false} />}
                          activeDot={<Dot active={false} />}
                          showsPagination={false}
                          height={140}
                        >
                          {images2?.map((image) => (
                            <View key={image?.id} style={{
                              flex: 0.5, width: '80%',
                              justifyContent: 'flex-start',
                              alignItems: 'center',
                              backgroundColor: 'transparent',
                            }}>
                              <Box height={50} style={{ backgroundColor: '#212121', width: '100%', borderTopRightRadius: 8, borderTopLeftRadius: 8 }} padding={'sm'} >
                                <CustomText variant={'subheader'} color={'white'} fontSize={14}>{image.title}</CustomText>
                              </Box>
                              <Image resizeMode='cover' source={{ uri: image?.uri }} style={{
                                width: '100%',
                                height: '100%',
                                borderBottomLeftRadius: 8, borderBottomRightRadius: 8,
                              }} />
                            </View>
                          ))}
                        </Swiper>
                      </Box>
                    </Box>
                  </Box>
                </>
              )}
              {activeItem === 'Save' && <Save />}
              {activeItem === 'Borrow' && <Borrow />}
              {activeItem === 'Invest' && <Invest />}
            </Box>
          </Box>
        </ScrollView>
      </Box>
    </Box>
  );
}