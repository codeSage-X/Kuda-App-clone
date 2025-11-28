
import React from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import { Ionicons } from '@expo/vector-icons'
import { Pressable, TextInput, TouchableOpacity, View } from 'react-native'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'
const kudalogo = require('../../../../assets/images/kuda.png');
const save = require('../../../../assets/images/save.png');

const features = [
  { name: 'Airtime', icon: 'call-sharp' as 'call-sharp', color: '#ffe255' },
  { name: 'Internet', icon: 'wifi-sharp' as 'wifi-sharp', color: '#ff7263' },
  { name: 'TV', icon: 'tv' as 'tv', color: '#12d67e' },
  { name: 'Electricity', icon: 'bulb-sharp' as 'bulb-sharp', color: '#ff7263' },
  { name: 'Solar', icon: 'sunny-sharp' as 'sunny-sharp', color: '#ffe255' },
];
const cardPayment = [
  { name: 'Pay ID', icon: 'call-sharp' as 'call-sharp', color: '#00aae8' },
  { name: 'USSD', icon: 'wifi-sharp' as 'wifi-sharp', color: '#ff7263' },
  { name: 'POS', icon: 'reader' as 'reader', color: '#ffe255' },
  { name: 'ATM', icon: 'swap-horizontal' as 'swap-horizontal', color: '#12d67e' },
];
const lifeStyle = [
  { name: 'Betting', icon: 'game-controller-sharp' as 'game-controller-sharp', color: '#00aae8' },
  { name: 'Gift Cards', icon: 'gift' as 'gift', color: '#ffe255' },
  { name: 'Transport', icon: 'car' as 'car', color: '#ff7263' },
  { name: 'Education', icon: 'school' as 'school', color: '#12d67e' },
];

export default function index() {
  return (
   <Box height={'100%'} width={'100%'} style={{ backgroundColor: '#121212' }}>
        <Box height={60}  borderBottomWidth={0.2} style={{ borderColor: '#a1a1a1' }} width={'100%'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} marginTop={'lg'}>
          <Box width={'100%'} justifyContent={'center'} alignItems={'center'} paddingTop={'lg'}>
            <CustomText variant={'body'} color={'white'} fontWeight={'800'}>Pay</CustomText>
          </Box>
        </Box>

      <Box width={'100%'} justifyContent={'center'} alignItems={'center'}>
          <Box width={'90%'} height={'auto'}>
              <Box style={styles.container}>
                <Ionicons name="search" size={20} color="gray" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="Search for anything"
                  placeholderTextColor="gray"
                />
             </Box>

             <Box flexDirection={'row'} justifyContent={'space-between'}>
                <CustomText variant={'body'} color={'white'} fontSize={14} fontWeight={'800'}>Essentials</CustomText>
             </Box>
           <Box height={190} >
            <Box height={80} width={'100%'} flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'}>
                          {features.map((item, index) => (
                            <Pressable key={index} style={{ width: '22%', height: '100%', borderRadius: 20, marginTop: 12 }}>
                              <TouchableOpacity>
                                <Box height={'100%'} style={{ backgroundColor: '#212121', alignItems: 'center', justifyContent: 'center' }}>
                                  <Ionicons name={item.icon} size={16} color={item.color} />
                                  <CustomText variant={'xs'} fontSize={12} color={'white'} fontWeight={'800'} marginTop={'sm'}>
                                    {item.name}
                                  </CustomText>
                                </Box>
                              </TouchableOpacity>
                            </Pressable>
                   ))}
            </Box>
            </Box>
            <Box flexDirection={'row'} justifyContent={'space-between'}>
                <CustomText variant={'body'} color={'white'} fontSize={14} fontWeight={'800'}>Cardless Payments</CustomText>
             </Box>
            <Box height={100}>
            <Box height={80} width={'100%'} marginTop={'xs'} flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'}>
                          {cardPayment.map((item, index) => (
                            <Pressable key={index} style={{ width: '22%', height: '100%', borderRadius: 20, marginTop: 12 }}>
                              <TouchableOpacity>
                                <Box height={'100%'} style={{ backgroundColor: '#212121', alignItems: 'center', justifyContent: 'center' }}>
                                  <Ionicons name={item.icon} size={16} color={item.color} />
                                  <CustomText variant={'xs'} fontSize={12} color={'white'} fontWeight={'800'} marginTop={'sm'}>
                                    {item.name}
                                  </CustomText>
                                </Box>
                              </TouchableOpacity>
                            </Pressable>
                   ))}
            </Box>
            </Box>
            <Box flexDirection={'row'} justifyContent={'space-between'}>
                <CustomText variant={'body'} color={'white'} fontSize={14} fontWeight={'800'}>LifeStyle</CustomText>
             </Box>
            <Box height={100} >
            <Box height={80} width={'100%'} marginTop={'xs'} flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'}>
                          {lifeStyle.map((item, index) => (
                            <Pressable key={index} style={{ width: '22%', height: '100%', borderRadius: 20, marginTop: 12 }}>
                              <TouchableOpacity>
                                <Box height={'100%'} style={{ backgroundColor: '#212121', alignItems: 'center', justifyContent: 'center' }}>
                                  <Ionicons name={item.icon} size={16} color={item.color} />
                                  <CustomText variant={'xs'} fontSize={12} color={'white'} fontWeight={'800'} marginTop={'sm'}>
                                    {item.name}
                                  </CustomText>
                                </Box>
                              </TouchableOpacity>
                            </Pressable>
                   ))}
            </Box>
            </Box>
        </Box>
      </Box>

      

             
        

    </Box>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#292929',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    color: 'gray',
    fontSize: 16,
  },
});