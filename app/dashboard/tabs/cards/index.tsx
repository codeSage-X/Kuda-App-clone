
import React from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import { Ionicons } from '@expo/vector-icons'
import { Pressable, TextInput, View } from 'react-native'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'
const card = require('../../../../assets/images/card.png');

export default function index() {
  return (
   <Box height={'100%'} width={'100%'} style={{ backgroundColor: '#121212' }}>
        <Box height={60} paddingTop={'lg'}  borderBottomWidth={0.2} style={{ borderColor: '#a1a1a1' }} width={'100%'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} marginTop={'lg'}>
          <Box width={'100%'} height={50} justifyContent={'space-between'} alignItems={'center'} flexDirection={'row'}>
            <Box width={'50%'} padding={'md'} flexDirection={'row'} justifyContent={'flex-end'}>
              <CustomText variant={'body'} color={'white'} fontWeight={'800'}>Cards</CustomText>
            </Box>
              <Box flexDirection={'row'} width={'50%'} padding={'md'} justifyContent={'flex-end'} >
                  <CustomText variant={'body'} color={'white'} fontWeight={'800'}>Get Cards</CustomText>
                  <Box height={26} width={26} borderRadius={200}  justifyContent={'center'} alignItems={'center'} style={{ borderColor: '#40176d', borderWidth: 1, marginLeft: 10 }}>
                    <Ionicons name="add-circle-sharp"  size={20} color="#40176d" />
                  </Box>
              </Box>
           
          </Box>
        </Box>

        <Box width={'100%'}  alignItems={'center'}>
          <Box width={'90%' } alignItems={'center'}>
            <Image source={card} resizeMode={'contain'} style={{ width:300, height:300, marginTop: 20 }}  />

            <Box flexDirection={'row'} marginTop={'md'}>
                <Box height={30} width={30} style={{ backgroundColor: '#212123' }} borderRadius={10} alignItems={'center'} justifyContent={'center'}>
                    <Ionicons name="document-text-outline" size={20} style={{color:'#30b06a'}} />
                  </Box>
                <Box width={'80%'} paddingLeft={'sm'}>
                  <CustomText variant={'body'} fontSize={14} fontWeight={'800'} color={'white'}>Request A Card</CustomText>
                  <CustomText variant={'xs'} fontSize={12} style={{color:'#a1a1a1'}} >We will send it to you whereever you are</CustomText>
                </Box>
                <Box width={'10%'} justifyContent={'center'} alignItems={'flex-end'}>
                  <Ionicons name="chevron-forward-sharp" size={20} color="gray" />
                </Box>
             </Box>

             <Box flexDirection={'row'} marginTop={'lg'}>
                <Box width={'10%'} justifyContent={'center'} alignItems={'center'}>
                  <Box height={30} width={30} style={{ backgroundColor: '#212123' }} borderRadius={10} alignItems={'center'} justifyContent={'center'}>
                    <Ionicons name="help-circle-outline" size={20} style={{color:'#25c1de'}} />
                  </Box>
                </Box>
                <Box width={'80%'} paddingLeft={'sm'}>
                  <CustomText variant={'body'} fontSize={14} fontWeight={'800'} color={'white'}>Card FAQs</CustomText>
                  <CustomText variant={'xs'} fontSize={12} style={{color:'#a1a1a1'}} >Learn more about kuda cards</CustomText>
                </Box>
                <Box width={'10%'} justifyContent={'center'} alignItems={'flex-end'}>
                  <Ionicons name="chevron-forward-sharp" size={20} color="gray" />
                </Box>
             </Box>


          </Box>

       </Box>
        
        

    </Box>
  )
}

