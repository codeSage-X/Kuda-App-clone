import React from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import { Ionicons } from '@expo/vector-icons'
import { Pressable, ScrollView, TextInput, View } from 'react-native'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'
import { router } from 'expo-router'

const stamp2 = require('../../../assets/images/stamp.png');
const gtb = require('../../../assets/images/gt.png');
const uba = require('../../../assets/images/uba.jpg');
const access = require('../../../assets/images/accessB.png');
const jaiz = require('../../../assets/images/jaiz.png');
const fcmb = require('../../../assets/images/fcmb.png');
const opay = require('../../../assets/images/opay.jpg');
const ibtc = require('../../../assets/images/ibtc.png');
const fmb = require('../../../assets/images/fmb.png');
const monie = require('../../../assets/images/monie.jpg');
const ptb = require('../../../assets/images/ptb.png');
const sterling = require('../../../assets/images/sterling.png');
const paga = require('../../../assets/images/paga.jpg');

const transactions = [
  { date: '07 Nov 2025', sender: 'Oluwaseun Adebayo Okafor', time: '03:50pm', amount: '+₦15,000.00', icon: opay },
  { date: '07 Nov 2025', sender: 'Stamp Duty On Electronic Funds', time: '03:50pm', amount: '-₦50.00', icon: stamp2 },
  { date: '06 Nov 2025', sender: 'Chukwuemeka Ifeanyi Ibrahim', time: '02:16pm', amount: '+₦28,000.00', icon: gtb },
  { date: '06 Nov 2025', sender: 'Stamp Duty On Electronic Funds', time: '02:16pm', amount: '-₦50.00', icon: stamp2 },
  { date: '04 Nov 2025', sender: 'Aisha Mohammed', time: '04:52am', amount: '+₦12,000.00', icon: access },
  { date: '04 Nov 2025', sender: 'Stamp Duty On Electronic Funds', time: '04:52am', amount: '-₦50.00', icon: stamp2 },
  { date: '03 Nov 2025', sender: 'Fatima Nkechi Hassan', time: '09:12pm', amount: '+₦35,000.00', icon: uba },
  { date: '03 Nov 2025', sender: 'Stamp Duty On Electronic Funds', time: '09:12pm', amount: '-₦50.00', icon: stamp2 },
  { date: '20 Oct 2025', sender: 'Tunde Adeleke', time: '11:10am', amount: '+₦22,000.00', icon: fcmb },
  { date: '20 Oct 2025', sender: 'Stamp Duty On Electronic Funds', time: '11:10am', amount: '-₦50.00', icon: stamp2 },
  { date: '15 Oct 2025', sender: 'Ngozi Chibuike Ogunleye', time: '09:44pm', amount: '+₦18,000.00', icon: sterling },
  { date: '15 Oct 2025', sender: 'Stamp Duty On Electronic Funds', time: '09:44pm', amount: '-₦50.00', icon: stamp2 },
  { date: '12 Oct 2025', sender: 'Emeka Eze', time: '10:17pm', amount: '+₦41,000.00', icon: jaiz },
  { date: '12 Oct 2025', sender: 'Stamp Duty On Electronic Funds', time: '10:17pm', amount: '-₦50.00', icon: stamp2 },
  { date: '04 Oct 2025', sender: 'Amina Olumide Bello', time: '10:27pm', amount: '+₦9,000.00', icon: ibtc },
  { date: '04 Oct 2025', sender: 'Stamp Duty On Electronic Funds', time: '10:27pm', amount: '-₦50.00', icon: stamp2 },
  { date: '01 Oct 2025', sender: 'Adebayo Okeke', time: '02:10am', amount: '+₦33,000.00', icon: fmb },
  { date: '01 Oct 2025', sender: 'Stamp Duty On Electronic Funds', time: '02:10am', amount: '-₦50.00', icon: stamp2 },
  { date: '30 Sep 2025', sender: 'Chioma Chukwudi Abubakar', time: '10:01pm', amount: '+₦27,000.00', icon: monie },
  { date: '30 Sep 2025', sender: 'Stamp Duty On Electronic Funds', time: '10:01pm', amount: '-₦50.00', icon: stamp2 },
  { date: '16 Sep 2025', sender: 'Ibrahim Oluwaseyi', time: '09:27am', amount: '+₦14,000.00', icon: ptb },
  { date: '16 Sep 2025', sender: 'Stamp Duty On Electronic Funds', time: '09:27am', amount: '-₦50.00', icon: stamp2 },
  { date: '16 Sep 2025', sender: 'Zainab Adebisi Chukwu', time: '09:33am', amount: '+₦19,000.00', icon: paga },
  { date: '16 Sep 2025', sender: 'Stamp Duty On Electronic Funds', time: '09:33am', amount: '-₦50.00', icon: stamp2 },
  { date: '01 Sep 2025', sender: 'Kehinde Abdullahi', time: '09:47pm', amount: '+₦46,000.00', icon: opay },
  { date: '01 Sep 2025', sender: 'Stamp Duty On Electronic Funds', time: '09:47pm', amount: '-₦50.00', icon: stamp2 },
  { date: '10 Aug 2025', sender: 'Blessing Oni', time: '10:45pm', amount: '+₦31,000.00', icon: gtb },
  { date: '10 Aug 2025', sender: 'Stamp Duty On Electronic Funds', time: '10:45pm', amount: '-₦50.00', icon: stamp2 },
  { date: '31 Jul 2025', sender: 'Mohammed Kayode Nnamdi', time: '11:28am', amount: '+₦24,000.00', icon: access },
  { date: '31 Jul 2025', sender: 'Stamp Duty On Electronic Funds', time: '11:28am', amount: '-₦50.00', icon: stamp2 },
  { date: '18 Jul 2025', sender: 'Chiamaka Umar', time: '12:25pm', amount: '+₦38,000.00', icon: uba },
  { date: '18 Jul 2025', sender: 'Stamp Duty On Electronic Funds', time: '12:25pm', amount: '-₦50.00', icon: stamp2 },
  { date: '11 Jul 2025', sender: 'Babatunde Chinedu Adekunle', time: '05:53pm', amount: '+₦17,000.00', icon: fcmb },
  { date: '11 Jul 2025', sender: 'Stamp Duty On Electronic Funds', time: '05:53pm', amount: '-₦50.00', icon: stamp2 },
  { date: '27 Jun 2025', sender: 'Ifeoma Obi', time: '03:25pm', amount: '+₦29,000.00', icon: sterling },
  { date: '27 Jun 2025', sender: 'Stamp Duty On Electronic Funds', time: '03:25pm', amount: '-₦50.00', icon: stamp2 },
  { date: '27 Jun 2025', sender: 'Musa Sanusi', time: '03:24pm', amount: '+₦11,000.00', icon: jaiz },
  { date: '27 Jun 2025', sender: 'Stamp Duty On Electronic Funds', time: '03:24pm', amount: '-₦50.00', icon: stamp2 },
  { date: '19 Jun 2025', sender: 'Hadiza Temitope Afolabi', time: '05:57pm', amount: '+₦43,000.00', icon: ibtc },
  { date: '19 Jun 2025', sender: 'Stamp Duty On Electronic Funds', time: '05:57pm', amount: '-₦50.00', icon: stamp2 },
  { date: '31 May 2025', sender: 'Taiwo Onyeka', time: '05:12am', amount: '+₦8,000.00', icon: fmb },
  { date: '31 May 2025', sender: 'Stamp Duty On Electronic Funds', time: '05:12am', amount: '-₦50.00', icon: stamp2 },
  { date: '30 May 2025', sender: 'Nneka Yusuf', time: '06:25pm', amount: '+₦36,000.00', icon: monie },
  { date: '30 May 2025', sender: 'Stamp Duty On Electronic Funds', time: '06:25pm', amount: '-₦50.00', icon: stamp2 },
  { date: '30 May 2025', sender: 'Yusuf Olayinka Lawal', time: '06:36pm', amount: '+₦21,000.00', icon: ptb },
  { date: '30 May 2025', sender: 'Stamp Duty On Electronic Funds', time: '06:36pm', amount: '-₦50.00', icon: stamp2 },
  { date: '23 May 2025', sender: 'Hauwa Ojo', time: '03:04pm', amount: '+₦13,000.00', icon: paga },
  { date: '23 May 2025', sender: 'Stamp Duty On Electronic Funds', time: '03:04pm', amount: '-₦50.00', icon: stamp2 },
  { date: '22 May 2025', sender: 'Adeola Egwu', time: '01:10am', amount: '+₦47,000.00', icon: opay },
  { date: '22 May 2025', sender: 'Stamp Duty On Electronic Funds', time: '01:10am', amount: '-₦50.00', icon: stamp2 },
  { date: '13 May 2025', sender: 'Chidi Nnenna Danjuma', time: '03:36pm', amount: '+₦25,000.00', icon: gtb },
  { date: '13 May 2025', sender: 'Stamp Duty On Electronic Funds', time: '03:36pm', amount: '-₦50.00', icon: stamp2 },
  { date: '11 May 2025', sender: 'Usman Oyebanji', time: '09:42am', amount: '+₦32,000.00', icon: access },
  { date: '11 May 2025', sender: 'Stamp Duty On Electronic Funds', time: '09:42am', amount: '-₦50.00', icon: stamp2 },
  { date: '6 May 2025', sender: 'Khadija Udoka', time: '2:35pm', amount: '+₦16,000.00', icon: uba },
  { date: '6 May 2025', sender: 'Stamp Duty On Electronic Funds', time: '2:35pm', amount: '-₦50.00', icon: stamp2 },
  { date: '2 May 2025', sender: 'Femi Chimamanda Suleiman', time: '2:48pm', amount: '+₦39,000.00', icon: fcmb },
  { date: '2 May 2025', sender: 'Stamp Duty On Electronic Funds', time: '2:48pm', amount: '-₦50.00', icon: stamp2 },
  { date: '1 May 2025', sender: 'Chidinma Olamide', time: '03:14am', amount: '+₦23,000.00', icon: sterling },
  { date: '1 May 2025', sender: 'Stamp Duty On Electronic Funds', time: '03:14am', amount: '-₦50.00', icon: stamp2 },
  { date: '30 Apr 2025', sender: 'Aliyu Kalu', time: '11:07am', amount: '+₦7,000.00', icon: jaiz },
  { date: '30 Apr 2025', sender: 'Stamp Duty On Electronic Funds', time: '11:07am', amount: '-₦50.00', icon: stamp2 },
  { date: '30 Apr 2025', sender: 'Zara Tijani', time: '10:58am', amount: '+₦44,000.00', icon: ibtc },
  { date: '30 Apr 2025', sender: 'Stamp Duty On Electronic Funds', time: '10:58am', amount: '-₦50.00', icon: stamp2 },
  { date: '21 Apr 2025', sender: 'Kunle Adebowale Nwankwo', time: '12:17pm', amount: '+₦20,000.00', icon: fmb },
  { date: '21 Apr 2025', sender: 'Stamp Duty On Electronic Funds', time: '12:17pm', amount: '-₦50.00', icon: stamp2 },
  { date: '6 Apr 2025', sender: 'Amarachi Garba', time: '01:51pm', amount: '+₦34,000.00', icon: monie },
  { date: '6 Apr 2025', sender: 'Stamp Duty On Electronic Funds', time: '01:51pm', amount: '-₦50.00', icon: stamp2 },
  { date: '2 Apr 2025', sender: 'Abdullahi Nwosu', time: '09:23pm', amount: '+₦10,000.00', icon: ptb },
  { date: '2 Apr 2025', sender: 'Stamp Duty On Electronic Funds', time: '09:23pm', amount: '-₦50.00', icon: stamp2 },
  { date: '19 Mar 2025', sender: 'Mariam Chukwuma Hassan', time: '09:04pm', amount: '+₦48,000.00', icon: paga },
  { date: '19 Mar 2025', sender: 'Stamp Duty On Electronic Funds', time: '09:04pm', amount: '-₦50.00', icon: stamp2 },
  { date: '3 Mar 2025', sender: 'Gbenga Obiageli', time: '00:54am', amount: '+₦26,000.00', icon: opay },
  { date: '3 Mar 2025', sender: 'Stamp Duty On Electronic Funds', time: '00:54am', amount: '-₦50.00', icon: stamp2 },
  { date: '2 Mar 2025', sender: 'Adaeze Bello', time: '00:58am', amount: '+₦37,000.00', icon: gtb },
  { date: '2 Mar 2025', sender: 'Stamp Duty On Electronic Funds', time: '00:58am', amount: '-₦50.00', icon: stamp2 },
  { date: '1 Mar 2025', sender: 'Sani Obinna Mohammed', time: '07:32am', amount: '+₦30,000.00', icon: access },
  { date: '1 Mar 2025', sender: 'Stamp Duty On Electronic Funds', time: '07:32am', amount: '-₦50.00', icon: stamp2 },
  { date: '1 Mar 2025', sender: 'Asmau Adeleke', time: '5:42pm', amount: '+₦6,000.00', icon: uba },
  { date: '1 Mar 2025', sender: 'Stamp Duty On Electronic Funds', time: '5:42pm', amount: '-₦50.00', icon: stamp2 },
  { date: '18 Feb 2025', sender: 'Oluwaseun Tokunbo Okafor', time: '11:53pm', amount: '+₦42,000.00', icon: fcmb },
  { date: '18 Feb 2025', sender: 'Stamp Duty On Electronic Funds', time: '11:53am', amount: '-₦50.00', icon: stamp2 },
  { date: '13 Feb 2025', sender: 'Chukwuemeka Ibrahim', time: '14:54pm', amount: '+₦5,000.00', icon: sterling },
  { date: '13 Feb 2025', sender: 'Stamp Duty On Electronic Funds', time: '14:54pm', amount: '-₦50.00', icon: stamp2 },
  { date: '31 Jan 2025', sender: 'Aisha Oluwatoyin Nwosu', time: '12:39pm', amount: '+₦45,000.00', icon: jaiz },
  { date: '31 Jan 2025', sender: 'Stamp Duty On Electronic Funds', time: '12:39pm', amount: '-₦50.00', icon: stamp2 },
  { date: '31 Jan 2025', sender: 'Fatima Hassan', time: '00:38am', amount: '+₦4,000.00', icon: ibtc },
  { date: '31 Jan 2025', sender: 'Stamp Duty On Electronic Funds', time: '00:38am', amount: '-₦50.00', icon: stamp2 },
  { date: '29 Jan 2025', sender: 'Tunde Adedayo Ogunleye', time: '11:59am', amount: '+₦50,000.00', icon: fmb },
  { date: '29 Jan 2025', sender: 'Stamp Duty On Electronic Funds', time: '11:59am', amount: '-₦50.00', icon: stamp2 },
  { date: '17 Jan 2025', sender: 'Ngozi Eze', time: '12:44pm', amount: '+₦2,000.00', icon: monie },
  { date: '17 Jan 2025', sender: 'Stamp Duty On Electronic Funds', time: '12:44pm', amount: '-₦50.00', icon: stamp2 },
  { date: '15 Jan 2025', sender: 'Emeka Olufemi Bello', time: '16:17pm', amount: '+₦40,000.00', icon: ptb },
  { date: '15 Jan 2025', sender: 'Stamp Duty On Electronic Funds', time: '16:17pm', amount: '-₦50.00', icon: stamp2 },
  { date: '09 Jan 2025', sender: 'Amina Okeke', time: '15:59pm', amount: '+₦3,000.00', icon: paga },
  { date: '09 Jan 2025', sender: 'Stamp Duty On Electronic Funds', time: '15:59pm', amount: '-₦50.00', icon: stamp2 },
  { date: '1 Dec 2024', sender: 'Adebayo Abubakar', time: '23:18pm', amount: '+₦49,000.00', icon: opay },
  { date: '1 Dec 2024', sender: 'Stamp Duty On Electronic Funds', time: '23:18pm', amount: '-₦50.00', icon: stamp2 },
  { date: '28 Nov 2024', sender: 'Chioma Ikenna Chukwu', time: '09:29am', amount: '+₦1,000.00', icon: gtb },
  { date: '28 Nov 2024', sender: 'Stamp Duty On Electronic Funds', time: '9:29am', amount: '-₦50.00', icon: stamp2 },
];

// Helper function to group transactions by date
const groupTransactionsByDate = (transactions: any[]) => {
  const grouped: Record<string, any[]> = {};
  transactions.forEach((transaction: any) => {
    if (!grouped[transaction.date]) {
      grouped[transaction.date] = [];
    }
    grouped[transaction.date].push(transaction);
  });
  return grouped;
};

// Helper to format date header (e.g., "07 Nov 25")
const formatDateHeader = (date: string) => {
  const parts = date.split(' ');
  return `${parts[0]} ${parts[1]} ${parts[2].slice(2)}`;
};

export default function index() {
  const groupedTransactions = groupTransactionsByDate(transactions);

  return (
    <Box flex={1} style={{ backgroundColor: '#000', paddingTop: 50 }}>
      {/* Header */}
      <Box style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
        <Box flexDirection='row' alignItems='center' justifyContent='space-between'>
          <Pressable onPress={() => router.push('/dashboard/tabs/home/')}>
            <Ionicons name='arrow-back' size={24} color='white' />
          </Pressable>
          <CustomText fontSize={18} fontWeight='700' color='white'>
            Transaction History
          </CustomText>
          <View style={{ width: 24 }} />
        </Box>
      </Box>

      {/* Search Bar */}
      <Box style={{ paddingHorizontal: 20, marginTop: 10, marginBottom: 20 }}>
        <Box 
          flexDirection='row' 
          alignItems='center' 
          style={{
            backgroundColor: '#2A2A2A',
            borderRadius: 12,
            paddingHorizontal: 15,
            height: 50
          }}
        >
          <Ionicons name='search' size={20} color='#666' />
          <TextInput
            placeholder='Search'
            placeholderTextColor='#666'
            style={{
              flex: 1,
              color: '#fff',
              fontSize: 16,
              marginLeft: 10
            }}
          />
          <Ionicons name='calendar-outline' size={22} color='#fff' />
        </Box>
      </Box>

      <ScrollView style={{ flex: 1 }}>
        {Object.entries(groupedTransactions).map(([date, dateTransactions]) => (
          <View key={date}>
            {/* Date Header */}
            <Box style={{ 
              paddingHorizontal: 20, 
              paddingVertical: 12,
              backgroundColor: '#000',
              borderBottomWidth: 1,
              borderBottomColor: '#1A1A1A'
            }}>
              <CustomText fontSize={13} fontWeight='400' style={{ color: '#888' }}>
                {formatDateHeader(date)}
              </CustomText>
            </Box>

            {/* Transactions for this date */}
            {dateTransactions.map((transaction, index) => (
              <Pressable key={`${date}-${index}`}>
                <Box
                  style={{
                    paddingHorizontal: 20,
                    paddingVertical: 16,
                    backgroundColor: '#000',
                    borderBottomWidth: 1,
                    borderBottomColor: '#1A1A1A'
                  }}
                  flexDirection='row'
                  alignItems='center'
                  justifyContent='space-between'
                >
                  {/* Left side - Icon and details */}
                  <Box flexDirection='row' alignItems='center' flex={1}>
                    <Image
                      source={transaction.icon}
                      style={{ 
                        width: 45, 
                        height: 45, 
                        borderRadius: 22.5,
                        marginRight: 12 
                      }}
                    />
                    <Box flex={1}>
                      <CustomText 
                        fontSize={15} 
                        fontWeight='600' 
                        style={{ color: '#fff' }}
                        numberOfLines={1}
                      >
                        {transaction.sender}
                      </CustomText>
                      <CustomText 
                        fontSize={13} 
                        style={{ color: '#888', marginTop: 4 }}
                      >
                        {transaction.time} . {transaction.date}
                      </CustomText>
                    </Box>
                  </Box>

                  {/* Right side - Amount */}
                  <CustomText
                    fontSize={16}
                    fontWeight='700'
                    style={{ 
                      color: transaction.amount.startsWith('+') ? '#00D9A5' : '#FF4444'
                    }}
                  >
                    {transaction.amount}
                  </CustomText>
                </Box>
              </Pressable>
            ))}
          </View>
        ))}
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#292929',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: '90%',
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