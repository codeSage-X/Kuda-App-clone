
import React from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import { Ionicons } from '@expo/vector-icons'
import { Pressable, ScrollView, TextInput, View } from 'react-native'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'
const kudalogo = require('../../../../assets/images/kuda.png');
const gtb = require('../../../../assets/images/gt.png');
const nobank = require('../../../../assets/images/nobank.png');
const opay = require('../../../../assets/images/opay.jpg');
const save = require('../../../../assets/images/save.png');

export default function index() {
  return (
   <Box height={'100%'} width={'100%'} style={{ backgroundColor: '#121212' }}>
        <Box height={60}  borderBottomWidth={0.2} style={{ borderColor: '#a1a1a1' }} width={'100%'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} marginTop={'lg'}>
          <Box width={'100%'} justifyContent={'center'} alignItems={'center'} marginTop={'lg'}>
            <CustomText variant={'body'} color={'white'}  fontWeight={'800'}>Send Money</CustomText>
          </Box>
        </Box>
<ScrollView>
        <Box width={'100%'} justifyContent={'center'} alignItems={'center'}>
          <Box width={'90%'}>
              <Box style={styles.container}>
              <Ionicons name="search" size={20} color="gray" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Search for anything"
                placeholderTextColor="gray"
              />
             </Box>

             <Box flexDirection={'row'} justifyContent={'space-between'}>
              <CustomText variant={'body'} color={'white'} fontSize={14} fontWeight={'800'}>Beneficiaries</CustomText>
              <CustomText variant={'body'} style={{color:'#43bd7f'}} fontSize={14}  fontWeight={'800'}>View All</CustomText>
             </Box>

             <Box paddingTop={'xs'} paddingBottom={'xs'}>
              <Box width={'20%'} justifyContent={'center'} alignItems={'center'}> 
                <Box height={50} width={50} borderRadius={200} marginTop={'xs'} marginBottom={'xs'} justifyContent={'center'} alignItems={'center'} style={{backgroundColor:'#68ccdeff'}}>
                    <CustomText variant={'xs'} color={'white'} fontWeight={'400'}>A</CustomText>
                </Box>
               </Box>
               <Box width={'20%'} justifyContent={'center'} alignItems={'center'}> 
                  <CustomText variant={'xs'} color={'white'} fontSize={12} >Abel</CustomText>
                  <CustomText variant={'xs'} color={'white'} fontSize={12} >Radi</CustomText>
               </Box>
             </Box>

             <Box marginTop={'md'}flexDirection={'row'} alignItems={'center'}>
              <Box>
                <CustomText variant={'xs'} color={'white'} fontSize={12} > Free monthly tranfers to other banks  </CustomText>
              </Box>
              <Box>
               <CustomText color={'white'} fontSize={12}  fontWeight={'800'}>12</CustomText>
              </Box>
             </Box>

             <Box flexDirection={'row'} marginTop={'md'}>
                <Box width={'10%'} justifyContent={'center'} alignItems={'center'}>
                <Image source={kudalogo} style={{width:30, height:30}} />
                </Box>
                <Box width={'80%'} paddingLeft={'sm'}>
                  <CustomText variant={'body'} fontSize={14}  fontWeight={'800'} color={'white'}>Send to @Username</CustomText>
                  <CustomText variant={'xs'} fontSize={12} color={'white'} >Send to any kuda account for free</CustomText>
                </Box>
                <Box width={'10%'} justifyContent={'center'} alignItems={'flex-end'}>
                  <Ionicons name="chevron-forward-sharp" size={20} color="gray" />
                </Box>
             </Box>

             <Box flexDirection={'row'} marginTop={'lg'}>
                <Box width={'10%'} justifyContent={'center'} alignItems={'center'}>
                  <Box height={30} width={30} style={{ backgroundColor: '#212123' }} borderRadius={10} alignItems={'center'} justifyContent={'center'}>
                    <Ionicons name="paper-plane-sharp" size={20} style={{color:'#30b06a'}} />
                  </Box>
                </Box>
                <Box width={'80%'} paddingLeft={'sm'}>
                  <CustomText variant={'body'} fontSize={14}  fontWeight={'800'} color={'white'}>Send To Bank Account</CustomText>
                  <CustomText variant={'xs'} fontSize={12} color={'white'} >Send to a local bank account</CustomText>
                </Box>
                <Box width={'10%'} justifyContent={'center'} alignItems={'flex-end'}>
                  <Ionicons name="chevron-forward-sharp" size={20} color="gray" />
                </Box>
             </Box>
             <Box flexDirection={'row'} marginTop={'lg'}>
                <Box width={'10%'} justifyContent={'center'} alignItems={'center'}>
                  <Box height={30} width={30} style={{ backgroundColor: '#212123' }} borderRadius={10} alignItems={'center'} justifyContent={'center'}>
                    <Ionicons name="calendar" size={20} style={{color:'#faeb19e4'}} />
                  </Box>
                </Box>
                <Box width={'80%'} paddingLeft={'sm'}>
                  <CustomText variant={'body'} fontSize={14}  fontWeight={'800'} color={'white'}>Scheduled Transfer</CustomText>
                  <CustomText variant={'xs'} fontSize={12} color={'white'} >Schedule one-time and recuring transfer</CustomText>
                </Box>
                <Box width={'10%'} justifyContent={'center'} alignItems={'flex-end'}>
                  <Ionicons name="chevron-forward-sharp" size={20} color="gray" />
                </Box>
             </Box>

           <Box flexDirection={'row'} justifyContent={'space-between'}>
              <CustomText variant={'body'} color={'white'} fontSize={14} fontWeight={'800'}>Recents</CustomText>
              <CustomText variant={'body'} style={{color:'#43bd7f'}} fontSize={14}  fontWeight={'800'}>View All</CustomText>
             </Box>
{/* 
            <Box height={100} width={'100%'} alignItems={'center'} justifyContent={'center'}>
            <Image source={save} style={{width:80, height:80}} />
            </Box>
            
            <Box>
              <CustomText variant={'xs'} color={'white'} fontSize={12}  fontWeight={'800'} textAlign={'center'}>No thing to see yet</CustomText>
            </Box>

            <Box marginTop={'md'}>
              <CustomText variant={'xs'} style={{color:'#868686'}} fontSize={12}  textAlign={'center'} fontWeight={'400'}>Send Some money and we'll show you your recent transactions here</CustomText>
            </Box> */}

                 <Box flexDirection={'row'} marginTop={'md'}>
                 <Box justifyContent={'center'} alignItems={'center'} width={'10%'}>
                  <Box height={40} width={40} style={{ borderRadius: 200, backgroundColor: 'grey', padding: 2,  borderColor:'#f0630b', borderWidth:0 }}>
                  <Image source={nobank} resizeMode='contain' style={{ width: '100%', height: '100%', borderRadius: 200 }}/> 
                  </Box>
              </Box>
                <Box width={'80%'} paddingLeft={'sm'}>
                  <CustomText variant={'body'} fontSize={14}  fontWeight={'800'} color={'white'}>John Vincent</CustomText>
                  <CustomText variant={'xs'} fontSize={12} color={'white'} >You sent ₦20,000 now</CustomText>
                </Box>
                <Box width={'10%'} justifyContent={'center'} alignItems={'flex-end'}>
                  <Ionicons name="chevron-forward-sharp" size={20} color="gray" />
                </Box>
             </Box>

              <Box flexDirection={'row'} marginTop={'md'}>
                 <Box justifyContent={'center'} alignItems={'center'} width={'10%'}>
                  <Box height={40} width={40} style={{ borderRadius: 200, backgroundColor: '#f0610b', padding: 2,  borderColor:'#f0610b', borderWidth:5 }}>
                  <Image source={gtb} resizeMode='contain' style={{ width: '100%', height: '100%', borderRadius: 200 }}/> 
                  </Box>
              </Box>
                <Box width={'80%'} paddingLeft={'sm'}>
                  <CustomText variant={'body'} fontSize={14}  fontWeight={'800'} color={'white'}> Rashid samuel </CustomText>
                  <CustomText variant={'xs'} fontSize={12} color={'white'} >You sent ₦24,800 now</CustomText>
                </Box>
                <Box width={'10%'} justifyContent={'center'} alignItems={'flex-end'}>
                  <Ionicons name="chevron-forward-sharp" size={20} color="gray" />
                </Box>
             </Box>

              <Box flexDirection={'row'} marginTop={'md'} borderRadius={100}>
                 <Box justifyContent={'center'} alignItems={'center'} width={'10%'}>
                    <Box height={40} width={40} style={{ borderRadius: 200, backgroundColor: '#ffffff', padding: 2, borderColor:'#43bd7f', borderWidth:5}}>
                        <Image source={opay} resizeMode='contain' style={{ width: '100%', height: '100%', borderRadius: 200 }}/> 
                          </Box>
                    </Box>
                <Box width={'80%'} paddingLeft={'sm'}>
                  <CustomText variant={'body'} fontSize={14}  fontWeight={'800'} color={'white'}>John Ola</CustomText>
                  <CustomText variant={'xs'} fontSize={12} color={'white'} >You sent ₦20,000 now</CustomText>
                </Box>
                <Box width={'10%'} justifyContent={'center'} alignItems={'flex-end'}>
                  <Ionicons name="chevron-forward-sharp" size={20} color="gray" />
                </Box>
             </Box>

            <Box marginTop={'xl'}>
            <CustomText variant={'xs'} color={'white'} fontSize={14} fontWeight={'800'} textAlign={'left'}>Friends on Kuda</CustomText>
            </Box>

            <Box flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} marginTop={'lg'} style={{backgroundColor:'#212121'}} height={60} borderRadius={10} padding={'sm'}>
                <Box width={'70%'} padding={'sm'} >
                  <CustomText variant={'body'} color={'white'} fontWeight={'800'} fontSize={14}  textAlign={'left'}>Sync your contacts</CustomText>
                  <CustomText variant={'xs'} style={{color:'#868686'}} fontSize={12} fontWeight={'200'} textAlign={'left'}>Make free trabsfers easily</CustomText>
                </Box>
                <Box width={'30%'} justifyContent={'center'} alignItems={'center'}>
                      <Pressable  style={{backgroundColor:'#dfe3ff', padding:15, borderRadius:5, paddingBottom:5, paddingTop:5}} >
                         <CustomText variant={'xs'} style={{color:'#2e145e'}} fontSize={12} fontWeight={'800'} >Connect</CustomText>
                      </Pressable>
                </Box>
            </Box>

          </Box>

       </Box>
       <Box height={50}></Box>
       </ScrollView>
        
        

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