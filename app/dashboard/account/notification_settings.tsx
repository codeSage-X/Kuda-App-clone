import { View, Text } from 'react-native'
import React from 'react'
import Box from '@component/general/Box'
import CustomHeader from '@component/general/CustomHeader'
import CustomText from '@component/general/CustomText'
import { Checkbox } from 'tamagui'
import { ScrollView } from 'react-native-gesture-handler'
import { Switch } from 'react-native-ui-lib'

interface IProps {
    title: string;
    subTitle: string;
    isChecked: boolean
}

const NotificationSettingsCard = ({ title, subTitle, isChecked }: IProps ) => {
    return (
        <Box width='100%' flexDirection={'row'} height={80} justifyContent={'space-between'} alignItems={'center'} marginBottom={'md'} >
            <Box width={'70%'} height={'100%'} flexWrap={'wrap'} justifyContent={'center'} >
                <CustomText variant={'subheader'} fontSize={18} color='black'>{title}</CustomText>
                <CustomText style={{ width: '100%', lineHeight: 20 }} variant={'medium'} fontSize={14} color='lightGrey'>{subTitle}</CustomText>
            </Box>

            <Switch value={isChecked} />
        </Box>
    )
}

const NotificationSettings = () => {
  return (
   <Box flex={1} bg='white' padding='md'>
    <CustomHeader title='Notification Settings' />
    <CustomText variant='xs'>Select Alerts for a personalized experience</CustomText>
    
    <ScrollView style={{ flex: 1, marginTop: 30  }}>
        <NotificationSettingsCard title='Property Update' subTitle='Get updates on properties, Prices, Promotions.' isChecked />
        <NotificationSettingsCard title='Market Trends' subTitle='Alerts on significant change in property value.' isChecked />
        <NotificationSettingsCard title='Account and Security' subTitle='Security alert on login attempt, Account activities.' isChecked />
        <NotificationSettingsCard title='Communication Alert' subTitle='Message from agents or interested parties.' isChecked />
    </ScrollView>
   </Box>
  )
}

export default NotificationSettings