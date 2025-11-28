import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText';
import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { Image, Pressable, TouchableOpacity } from 'react-native';
const  ngn = require('../../../../assets/images/ngn.png');
const  kuda = require('../../../../assets/images/gKuda.png');

const options = [
    {
      title: 'Add Pocket',
      icon: 'add-circle-sharp' as 'add-circle-sharp'
    },
  ];

export default function Save() {
    function handlePress(title: string): void {
        throw new Error('Function not implemented.');
    }

  return (
    <Box height={'100%'} width={'100%'} style={{ backgroundColor: '#121212' }}>
      <Box height={30} flexDirection={'row'} marginTop={'lg'}>
        <Image source={ngn} resizeMode={'cover'} style={{ width: 20, height: 20 }}  />
        <CustomText variant={'xs'} color={'white'} fontSize={12} fontWeight={'100'} marginLeft={'xs'}>NGN Savings</CustomText>
      </Box>
     
      <Box height={'auto'} flexDirection={'row'} >
        <Box width={'80%'}>
            <CustomText variant={'header'} fontSize={24}  style={{color:'#46d48c'}}>608,818,226.22</CustomText>
        </Box>
        <Box width={'20%'} alignItems={'flex-end'} justifyContent={'center' }>
            <Ionicons name="ellipsis-horizontal-circle-sharp" size={18} color="#a1a1a1" />
        </Box>
        
      </Box>

      <Box flexDirection={'row'} height={40} width={'100%'} justifyContent={'space-between'} marginTop={'xl'}>
                      {options.map((option, index) => (
                        <Pressable
                          key={index}
                          onPress={() => handlePress(option.title)}
                          style={{ width: '48%', backgroundColor: '#212121', height: '100%', borderRadius:10, }}
                        >
                          <TouchableOpacity>
                            <Box flexDirection={'row'} alignItems={'center'} style={{ height: '100%' }}>
                              <Ionicons name={option.icon} size={26} color="#46d48c" style={{ marginLeft: 15 }} />
                              <CustomText variant={'xs'}  style={{color:'#46d48c'}}  fontSize={16} fontWeight={'800'} marginLeft={'md'}>
                                {option.title}
                              </CustomText>
                            </Box>
                          </TouchableOpacity>
                        </Pressable>
                      ))}
                
       </Box>
       <Box marginTop={'lg'}>
        <CustomText variant={'body'} color={'white'} fontWeight={'800'}>Your Pockets</CustomText>
       </Box>
       <Box height={60} width={'100%'} borderWidth={0.2} style={{ borderColor: '#4f4f4f' }} borderLeftWidth={0} borderRightWidth={0} flexDirection={'row'} marginTop={'lg'} justifyContent={'space-between'} alignItems={'center'} paddingLeft={'sm'} paddingRight={'sm'}>
                    <Box>
                        <Box alignItems={'center'} flexDirection={'row'}>
                            <Ionicons name='lock-closed' size={18} style={{ color: '#49d286', marginRight: 5 }} />
                             <Box height={40}></Box>
                            <CustomText lineHeight={25} fontSize={12} color={'white'}>₦208,818,226.22</CustomText>
                        </Box>
                        <Box style={{ marginTop: -8 }}>
                        <CustomText color={'white'} fontSize={12} >Locked Until 0ct 30 2027</CustomText>
                        </Box>

                    </Box>

                    <Box justifyContent={'flex-end'} alignItems={'center'} width={100} height={'100%'} borderRadius={5} paddingBottom={'sm'} style={{ backgroundColor: '#212121' }} flexDirection={'row'}>
                        <Image source={kuda} resizeMode='contain' style={{ width:100, height: 42, borderRadius: 5, marginTop:5}}/> 
                     </Box>
    </Box>

      
   </Box>
  )
}