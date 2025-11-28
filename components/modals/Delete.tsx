import React from 'react'
import CustomText from '@component/general/CustomText'
import Box from '@component/general/Box'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { OutlineButton } from '@component/general/OutlineButton'
import { ErrorButton } from '@component/general/ErrorButton'


const DeleteModal = ({mutateDel, setModal}:any) => {

const handleDelete = () => {

}
  
  return (
    <Box height={'100%'} width={'100%'}
  
      style={{zIndex:9999, position:'absolute', backgroundColor:'transparent'}} 
       flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
        <Box height={'100%'} width={'100%'}>
            <Box width={'100%'} height={'100%'} alignItems={'center'} justifyContent={'center'} style={{ backgroundColor:'#000000c0'}}>
                  <Box width={'80%'} height={'30%'} justifyContent={'center'} alignItems={'center'} marginBottom={'xl'}
                   borderRadius={14} backgroundColor={'secondaryBackgroundColor'} overflow={'hidden'}>
                    <Box width={'100%'} height={'100%'} justifyContent={'center'}>         
                      <Box flexDirection={'row'} justifyContent={'center'} marginBottom={'md'}>
                          <Box width={'90%'}>
                              <Box marginTop={'sm'}>
                                {/* <CustomText variant='body' fontWeight={'800'}>Log Out</CustomText> */}
                              </Box>
                              <Box marginTop={'sm'} alignItems={'center'}>
                                <CustomText variant={'xs'} style={{color:'grey'}}>Are you sure?</CustomText>
                              </Box>
                              <Box flexDirection={'row'} width={'100%'} justifyContent={'space-between'}>
                           
                                  <Box marginTop={'md'} width={'45%'}>
                                    <TouchableOpacity>
                                      <ErrorButton onPress={()=>mutateDel()} label={'Yes'} width={''}/>
                                    </TouchableOpacity>
                                  </Box>
                                
                                <Box marginTop={'md'} width={'45%'}>
                                   <TouchableOpacity>
                                    <OutlineButton onPress={()=>setModal(false)} label={'Cancel'} width={''}/>
                                    </TouchableOpacity >
                                  </Box>
                                
                              </Box>
                                
                              </Box>
                          </Box>
                      </Box>
                  </Box>   
            </Box>
          </Box>
    </Box>
  )
}

export default DeleteModal;
