import React, { useEffect, useState } from 'react';
import { View, Image, Pressable, Alert } from 'react-native';
import { Styles } from '../../styles/splash/styles';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { router } from 'expo-router';

const logo = require('../../assets/images/placeholder.jpeg');
const correctPassword = '123456';

const LandingPage = () => {
  const items = [
    { key: 1, text: '1' },
    { key: 2, text: '2' },
    { key: 3, text: '3' },
    { key: 4, text: '4' },
    { key: 5, text: '5' },
    { key: 6, text: '6' },
    { key: 7, text: '7' },
    { key: 8, text: '8' },
    { key: 9, text: '9' },
    { key: 10, text: 'Sign out', customStyle: { color: '#61d29a', variant: 'body', fontWeight: '600' } },
    { key: 11, text: '0' },
    { key: 12, text: 'Delete', customStyle: { color: '#61d29a', variant: 'body', fontWeight: '600' }, hideText: true }
  ];

  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [inputPassword, setInputPassword] = useState('');
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const circleCount = 6;
  const [circles, setCircles] = useState(Array(circleCount).fill('#cacaca'));

  const handleItemClick = (text:any) => {
    console.log(text);
    if (text === 'Sign out') {
      Alert.alert('Sign out');
      // Add navigation logic here if necessary
    } else if (text === 'Delete') {
      if (clickCount > 0) {
        const updatedCount = clickCount - 1;
        setClickCount(updatedCount);
        setInputPassword(inputPassword.slice(0, -1));
        const updatedCircles = circles.slice();
        updatedCircles[updatedCount] = '#cacaca';
        setCircles(updatedCircles);
      }
    } else {
      const updatedCount = clickCount + 1;
      setClickCount(updatedCount);
      setShowDeleteButton(true);
      setInputPassword(prevPassword => prevPassword + text);

      if (updatedCount <= circleCount) {
        const updatedCircles = circles.slice();
        updatedCircles[updatedCount - 1] = '#49d286';
        setCircles(updatedCircles);

        if (updatedCount === circleCount) {
          if (inputPassword + text === correctPassword) {
            router.replace("/dashboard/tabs/home/");
          } else {
            setIncorrectPassword(true);
            setTimeout(() => {
              setIncorrectPassword(false);
            }, 1000); // Hide the incorrect password message after 1 second
            setClickCount(0);
            setInputPassword('');
            setCircles(Array(circleCount).fill('#cacaca'));
          }
        }
      }
    }
  };

  return (
    <Box height={'100%'} width={'100%'} style={{ backgroundColor: '#121212' }} justifyContent={'center'} alignItems={'center'} >
      <Box height={'90%'} width={'90%'} flexDirection={'column'} alignItems={'center'} marginTop={'2xl'}>
        <Box height={100} width={100} borderRadius={100} style={{ backgroundColor: '#2e2b2bff' }} marginTop={'3xl'}>
          <Image source={logo} resizeMode={'cover'} style={{ width: '100%', height: '100%' }} borderRadius={100} />
        </Box>

        <Box marginTop={'2xl'}></Box>
        <CustomText color={'white'} variant={'subheader'}>Welcome Back</CustomText>
        <CustomText color={'white'} variant={'body'}>HI, Wisdom John Ikoi</CustomText>

        <Box flexDirection={'row'} style={{ marginTop: 30 }}>
          <Ionicons name='lock-closed' size={14} style={{ color: '#49d286', marginRight: 5 }} />
          <CustomText style={{ color: 'grey' }} variant={'xs'}>Password</CustomText>
        </Box>

        {
          incorrectPassword && (
            <CustomText variant={'body'} style={{ marginTop: 5, color: 'grey' }}>Pin Incorrect</CustomText>
          )
        }

        <Box width={'60%'} height={40} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} style={{ marginTop: 10 }}>
          {circles.map((color, index) => (
            <Box key={index} height={16} width={16} borderRadius={100} style={{ backgroundColor: color }} />
          ))}
        </Box>
        <Box height={500} width={'100%'} flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'} >
          {items.map((item, index) => (
            <Pressable
              key={item.key}
              onPress={() => handleItemClick(item.text)}
              style={{ width: '33%', height: '15%', marginTop: index < 3 ? 30 : 5 }}
            >
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: '90%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 100,
                }}
              >
                <CustomText
                  variant={item.customStyle ?  'body' : 'header'}
                  fontWeight={item.customStyle ? '600' : '600'}
                  style={{ color: item.customStyle?.color || 'white' }}
                >
                  {item.hideText && !showDeleteButton ? '' : item.text}
                </CustomText>
              </TouchableOpacity>
            </Pressable>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;