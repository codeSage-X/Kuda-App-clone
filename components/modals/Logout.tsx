import React from 'react'
import CustomText from '@component/general/CustomText'
import Box from '@component/general/Box'
import * as SecureStorage from 'expo-secure-store';
// import { Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { PrimaryButton } from '@component/general/CustomButton'
// import { OutlineButtonColored } from '@component/general/OutlineButtonColored'
import { OutlineButton } from '@component/general/OutlineButton'
import { ErrorButton } from '@component/general/ErrorButton'
// import { Styles } from './styles'

const loader = require('../../assets/images/foreground/loader.svg')
const logo = require('../../assets/images/logo/logo.png')

const LogoutModal = () => {

  function LogOut(){
    async function clearSession() {
      try {
          await SecureStorage.deleteItemAsync("userDetails");
          // console.log("Session cleared");
          // If you need to redirect after clearing the token
          router.replace('/auth/login'); // Redirect to the login page or any other desired destination
      } catch (error) {
          // console.error("Error clearing session:", error);
      }
  }

// Call the clearSession function to clear the stored token
clearSession();
}
  
  return (
    <Box height={'100%'} width={'100%'}
      style={{zIndex:9999, position:'absolute', backgroundColor:'#000000c0'}} 
       flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
        <Box height={'100%'} width={'100%'}>
            <Box width={'100%'} height={'100%'} alignItems={'center'} justifyContent={'flex-end'} style={{ backgroundColor:'#000000c0'}}>
                  <Box width={'95%'} height={'40%'} justifyContent={'center'} alignItems={'center'} marginBottom={'xl'}
                   borderRadius={14} backgroundColor={'secondaryBackgroundColor'} overflow={'hidden'}>
                    <Box width={'100%'} height={'100%'} justifyContent={'center'}>
                      <Box>
                          {/* <Box style={{backgroundColor:'#FFFFFF',  borderColor:'#EAECF0'}} borderRadius={100} borderWidth={1} position={'relative'} height={100} width={100} alignItems={'center'} justifyContent={'center'}>  */}
                            {/* <Box style={{backgroundColor:'#FFFFFF', borderColor:'#EAECF0'}} borderRadius={100}  borderWidth={1} position={'relative'} height={75} width={75} alignItems={'center'} justifyContent={'center'}>  */}
                              <Box style={{backgroundColor:'#FFE6E6'}} marginLeft={'md'} borderRadius={100} position={'relative'} height={50} width={50} alignItems={'center'} justifyContent={'center'}>               
                                  <Box height={30} width={30}  style={{backgroundColor:'#FFCCCC'}} borderRadius={100} alignItems={'center'} justifyContent={'center'}>
                                      <Ionicons name='log-out-outline' color={'#D92D20'} size={20}/>                               
                                  </Box>
                              </Box>
                            {/* </Box> */}
                          {/* </Box> */}
                      </Box>
                      <Box flexDirection={'row'} justifyContent={'center'} marginBottom={'md'}>
                          <Box width={'90%'}>
                              <Box marginTop={'sm'}>
                                <CustomText variant='body' fontWeight={'800'}>Log Out</CustomText>
                              </Box>
                              <Box marginTop={'sm'}>
                                <CustomText variant={'xs'} style={{color:'grey'}}>Are you sure you want to log out?</CustomText>
                              </Box>
                                <TouchableOpacity>
                                  <Box marginTop={'md'}>
                                    <ErrorButton onPress={()=>LogOut()} label={'Yes, Continue'} width={''}/>
                                  </Box>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                  <Box marginTop={'md'}>
                                    <OutlineButton onPress={()=>router.replace('/dashboard/tabs/more/')} label={'Cancel'} width={''}/>
                                  </Box>
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

export default LogoutModal;
