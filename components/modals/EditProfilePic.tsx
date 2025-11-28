import React from 'react'
import CustomText from '@component/general/CustomText'
import Box from '@component/general/Box'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Pressable } from 'react-native'


const loader = require('../../assets/images/foreground/loader.svg')
const logo = require('../../assets/images/logo/logo.png')


  
const handleCamera = () => {
  console.log('Rate Us');
};

const handleGalllery= () => {
  console.log('Rate Us');
};




const EditProfilePic = ({setChangePhoto, pickImage}:any) => {
  
  return (
    <Box height={'100%'} width={'100%'}
      style={{zIndex:9999, position:'absolute', backgroundColor:'#000000c0'}} 
       flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
        <Box height={'100%'} width={'100%'}>
            <Box width={'100%'} height={'100%'} alignItems={'center'} justifyContent={'flex-end'} style={{ backgroundColor:'#000000c0'}}>
                  <Box width={'100%'} height={'25%'} justifyContent={'center'} backgroundColor={'secondaryBackgroundColor'} overflow={'hidden'}  borderTopLeftRadius={14} borderTopRightRadius={14}>
                    <Box flexDirection={'row'} justifyContent={'center'} height={'20%'}>
                        <Box width={'80%'} justifyContent={'center'} alignItems={'center'}>
                          <CustomText variant={'subheader'}>Change Profile</CustomText>
                        </Box>
                        <Box width={'20%'} justifyContent={'center'} alignItems={'center'}>
                          <TouchableOpacity>
                            <Pressable onPress={()=>setChangePhoto(false)}>
                                <Ionicons name='close-outline' size={30}/>
                            </Pressable>
                          </TouchableOpacity>
                        </Box>
                    </Box>
                    <Box flexDirection={'row'} alignItems={'center'} justifyContent={'center'} height={'70%'} >
                        <Box height={'80%'} width={'100%'} flexDirection={'row'} justifyContent={'center'}>
                          <Box width={'90%'}>
                              <TouchableOpacity>
                                <Pressable>
                                  <Box flexDirection={'row'}>
                                    <Box backgroundColor={'textInputBorderColor'} height={50} width={50} borderRadius={100} alignItems={'center'} justifyContent={'center'}>
                                        <Ionicons name='camera-outline' size={25}/>
                                    </Box>
                                    <Box justifyContent={'center'} alignItems={'center'} marginLeft={'xl'}>
                                      <CustomText variant={'body'}>Take Photo</CustomText>
                                    </Box>
                                  </Box>
                                </Pressable>
                              </TouchableOpacity>
                              <TouchableOpacity>
                                <Pressable onPress={()=>pickImage()}>
                                    <Box flexDirection={'row'} paddingTop={'md'}>
                                      <Box backgroundColor={'textInputBorderColor'} height={50} width={50} borderRadius={100} alignItems={'center'} justifyContent={'center'}>
                                          <Ionicons name='image-outline' size={25}/>
                                      </Box>
                                      <Box justifyContent={'center'} alignItems={'center'} marginLeft={'xl'}>
                                        <CustomText variant={'body'}>Add from gallery</CustomText>
                                      </Box>
                                    </Box>
                               </Pressable>
                               </TouchableOpacity>
                          </Box>
                        </Box>
                    </Box>
                  </Box>   
            </Box>
          </Box>
    </Box>
  )

  }
export default EditProfilePic;
