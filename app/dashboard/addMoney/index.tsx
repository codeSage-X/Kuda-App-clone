import React from 'react';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import { Ionicons } from '@expo/vector-icons';
import { View, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Link } from 'expo-router';

const dp = require('../../../assets/images/placeholder.jpeg');
const kudalogo = require('../../../assets/images/kuda.png');
const  opay = require('../../../assets/images/opay.jpg');

export default function index() {
  return (
    <ScrollView style={{ backgroundColor: '#121212' }}>
    <Box height={'100%'} width={'100%'} style={{ backgroundColor: '#121212' }}>
      <Box
        height={60}
        paddingTop={'lg'}
        borderBottomWidth={0}
        style={{ borderColor: '#a1a1a1' }}
        width={'100%'}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'center'}
        marginTop={'xl'}
      >
        <Box
          width={'100%'}
          height={50}
          justifyContent={'space-between'}
          alignItems={'center'}
          flexDirection={'row'}
        >
           <Box flexDirection={'row'} width={'10%'} padding={'md'} justifyContent={'flex-start'}>
            <TouchableOpacity>
              <Link href={'/dashboard/tabs/home/'}>
                <Ionicons 
                name="arrow-back-outline"
                size={25}
                color={'#ffffff'}
                />
                </Link>
              </TouchableOpacity> 
          </Box>
          <Box width={'65%'} padding={'sm'} flexDirection={'row'} justifyContent={'flex-start'}>
            <CustomText variant={'body'} color={'white'} fontWeight={'800'} fontSize={14}>
              Add Money 🇳🇬
            </CustomText>
          </Box>
         
        </Box>
      </Box>

      <Box width={'100%'} alignItems={'center'}>
        <Box width={'90%'} alignItems={'center'}>
       
      
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
                 <Ionicons name="at" size={20} style={{ color: '#25c1de' }} />
              </Box>
            </Box>
            <Box width={'80%'} paddingLeft={'sm'}>
              <CustomText variant={'body'} fontSize={14} fontWeight={'800'} color={'white'}>
                Share Your @username
              </CustomText>
              <CustomText variant={'xs'} fontSize={12} style={{ color: '#a1a1a1' }}>
                Receive money from other kuda users using your unique username
              </CustomText>
            </Box>
            <Box width={'10%'} justifyContent={'center'} alignItems={'flex-end'}>
              <Ionicons name="chevron-forward-sharp" size={20} color="gray" />
            </Box>
          </Box>

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
                <Ionicons name="send" size={20} style={{ color: '#30b06a' }} />
              </Box>
            </Box>
            <Box width={'80%'} paddingLeft={'sm'}>
              <CustomText variant={'body'} fontSize={14} fontWeight={'800'} color={'white'}>
                Bank Transfer
              </CustomText>
              <CustomText variant={'xs'} fontSize={12} style={{ color: '#a1a1a1' }}>
                From Bank App to internet banking
              </CustomText>
            </Box>
            <Box width={'10%'} justifyContent={'center'} alignItems={'flex-end'}>
              <Ionicons name="chevron-forward-sharp" size={20} color="gray" />
            </Box>
          </Box>

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
                <CustomText fontSize={20} style={{ color: '#25c1de' }} >#</CustomText>
              </Box>
            </Box>
            <Box width={'80%'} paddingLeft={'sm'}>
              <CustomText variant={'body'} fontSize={14} fontWeight={'800'} color={'white'}>
              USSD
              </CustomText>
              <CustomText variant={'xs'} fontSize={12} style={{ color: '#a1a1a1' }}>
                Use your bank's USSD code 
              </CustomText>
            </Box>
            <Box width={'10%'} justifyContent={'center'} alignItems={'flex-end'}>
              <Ionicons name="chevron-forward-sharp" size={20} color="gray" />
            </Box>
          </Box>

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
                <Ionicons name="card" size={18} style={{ color: '#e7e751f8' }} />
              </Box>
            </Box>
            <Box width={'80%'} paddingLeft={'sm'}>
              <CustomText variant={'body'} fontSize={14} fontWeight={'800'} color={'white'}>
                Card
              </CustomText>
              <CustomText variant={'xs'} fontSize={12} style={{ color: '#a1a1a1' }}>
                Add Money with your Debit Card
              </CustomText>
            </Box>
            <Box width={'10%'} justifyContent={'center'} alignItems={'flex-end'}>
              <Ionicons name="chevron-forward-sharp" size={20} color="gray" />
            </Box>
          </Box>

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
                <Ionicons name="cash" size={20} style={{ color: '#30b06a' }} />
              </Box>
            </Box>
            <Box width={'80%'} paddingLeft={'sm'}>
              <CustomText variant={'body'} fontSize={14} fontWeight={'800'} color={'white'}>
                Cash Depot
              </CustomText>
              <CustomText variant={'xs'} fontSize={12} style={{ color: '#a1a1a1' }}>
                Deposit cash at any of our partners bank
              </CustomText>
            </Box>
            <Box width={'10%'} justifyContent={'center'} alignItems={'flex-end'}>
              <Ionicons name="chevron-forward-sharp" size={20} color="gray" />
            </Box>
          </Box>

    

        
         
        </Box>
      </Box>
    </Box>
    <Box style={{ height: 20, backgroundColor: '#121212'  }} ></Box>
    </ScrollView>
  );
}
