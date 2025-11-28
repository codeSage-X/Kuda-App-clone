import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Box from '@component/general/Box'
import CustomHeader from '@component/general/CustomHeader'
import CustomText from '@component/general/CustomText'
import { Feather } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'
import { TouchableOpacity } from 'react-native-ui-lib'
import { useTheme } from '@shopify/restyle'
import { Theme } from '@theme/themes'

const length = 30;
const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
const timeDay = ['9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM'];

const Appointments = () => {
    const [active, setActive] = React.useState(1);
    // const [array, _] = React.useState(Array.from({length}, (_, i) => i+1));

    const theme = useTheme<Theme>()
  return (
    <Box flex={1} bg='white' padding='md'>
        <CustomHeader title='Appointments' />

        <Box width={'100%'} marginTop={'md'} flexDirection={'row'} alignItems={'center'}>
            <CustomText>November 3</CustomText>
            <Feather name='chevron-down' size={20} color='black' style={{ marginLeft: 20 }} />
        </Box>

       <Box width={'100%'} height={100}>
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }} horizontal>
                {array.map((item, index) => (
                    <Pressable style={{ width: 70, height: 70, borderRadius: 15, justifyContent: 'center', alignItems: 'center', backgroundColor: item === active ? theme.colors.primaryColor: '#F2F4F7', marginRight: 20 }} onPress={() => setActive(item)} key={index.toString()}>
                            <CustomText variant={'subheader'} fontSize={22} color={item === active ? 'white': 'black'}>{item}</CustomText>
                    </Pressable>
                ))}
            </ScrollView>
            <CustomText variant={'subheader'} fontSize={16} color={'black'}>3 activities upcoming on November 21st, 2023</CustomText>
       </Box>

       <Box width={'100%'} height={'60%'} marginTop={'md'} borderRadius={20} flexDirection={'row'} style={{ backgroundColor: '#F9FAFB' }}>
        <Box width={'20%'} height={'100%'} borderRightWidth={0.3} borderRightColor={'lightGrey'} alignItems={'center'} paddingVertical={'lg'}>
            <CustomText variant={'subheader'}>TUE</CustomText>
            <CustomText variant={'body'}>{active}</CustomText>
            <ScrollView>
                {timeDay.map((item, index) => (
                    <Box key={index.toString()} width={'100%'} height={80} justifyContent={'center'} alignItems={'center'}>
                        <CustomText variant={'subheader'} fontSize={18}>{item}</CustomText>
                    </Box>
                ))}
            </ScrollView>
        </Box>

        <Box flex={1}>
            <ScrollView>
            {array.map((item, index) => (
                    <Box key={index.toString()} borderBottomWidth={0.4} borderBottomColor={'black'} width={'100%'} height={80} justifyContent={'center'} alignItems={'flex-start'} paddingHorizontal={'md'}>
                       {index % 2 === 0 && (
                        <>
                            <CustomText variant={'subheader'} fontSize={18} color={'primaryColor'}>Land inspection</CustomText>
                            <CustomText variant={'body'} fontSize={14}>Emerson Baptist Area</CustomText>
                        </>
                       )}
                    </Box>
                ))}
            </ScrollView>
        </Box>
       </Box>
    </Box>
  )
}

export default Appointments