import React, { useState } from 'react';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import { Ionicons } from '@expo/vector-icons';
import { View, Pressable, ScrollView, TextInput, Clipboard, Alert } from 'react-native';
import { useRouter } from 'expo-router';

interface Dispute {
  id: string;
  amount: string;
  date: string;
  time: string;
  status: string;
  statusColor: string;
  statusMessage: string;
  accountName: string;
  accountNumber: string;
  bank: string;
  paymentMethod: string;
  transactionReference: string;
  issueDescription: string;
}

export default function Index() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDispute, setSelectedDispute] = useState<Dispute | null>(null);

  const handleNavigation = () => {
    if (selectedDispute) {
      setSelectedDispute(null);
    } else {
      router.back();
    }
  };

  const handleDisputePress = (dispute: Dispute) => {
    setSelectedDispute(dispute);
  };

  const handleCopy = (text: string, label: string) => {
    Clipboard.setString(text);
    Alert.alert('Copied', `${label} copied to clipboard`);
  };

  // Sample disputes data
  const disputes: Dispute[] = [
    {
      id: 'SP-2419052',
      amount: '-₦50,000.00',
      date: 'July 6, 2025',
      time: '12:00 AM',
      status: 'Received',
      statusColor: '#d4a843',
      statusMessage: 'The CX team is reviewing this transaction.',
      accountName: 'Sulaiman Olawole Rasaq',
      accountNumber: '7037935375',
      bank: 'Palmpay',
      paymentMethod: 'ErroneousTransfer',
      transactionReference: '09026725070613080700376107641ZPP',
      issueDescription: 'This Is The Correct Beneficiary Details',
    },
  ];

  const filteredDisputes = disputes.filter(
    (dispute) =>
      dispute.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dispute.amount.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dispute.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (selectedDispute) {
    // Dispute Details View
    return (
      <Box flex={1} style={{ backgroundColor: '#1a1a1a' }}>
        {/* Header */}
        <Box
          style={{
            paddingTop: 50,
            paddingBottom: 20,
            paddingHorizontal: 20,
            backgroundColor: '#1a1a1a',
          }}
        >
          <Box flexDirection={'row'} alignItems={'center'}>
            <Pressable onPress={handleNavigation}>
              <Box
                width={45}
                height={45}
                style={{ backgroundColor: '#2a2a2a', borderRadius: 22.5 }}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Ionicons name="chevron-back" size={24} color="white" />
              </Box>
            </Pressable>

            <Box flex={1} alignItems={'center'}>
              <CustomText variant={'body'} fontSize={18} fontWeight={'700'} color={'white'}>
                Dispute History
              </CustomText>
            </Box>

            <Box width={45} />
          </Box>
        </Box>

        {/* Dispute Details Content */}
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 40, paddingTop:0 }}>
          {/* Amount and Date */}
          <Box alignItems={'center'} style={{ marginBottom: 30 }}>
            <CustomText variant={'body'} fontSize={25} fontWeight={'800'} color={'white'} style={{ marginBottom: 0 }}>
              {selectedDispute.amount}
            </CustomText>
            <CustomText variant={'body'} fontSize={14} style={{color:'#999' }}>
              On {selectedDispute.date} at {selectedDispute.time}
            </CustomText>
          </Box>

          {/* Status */}
          <Box
            flexDirection={'row'}
            alignItems={'center'}
            style={{
              backgroundColor: '#2a2a2a',
              borderRadius: 12,
              padding: 18,
              marginBottom: 30,
            }}
          >
            <Box
              width={40}
              height={40}
              style={{ backgroundColor: selectedDispute.statusColor, borderRadius: 20, marginRight: 15 }}
            />
            <Box flex={1}>
              <CustomText variant={'body'} fontSize={16} fontWeight={'700'} color={'white'} style={{ marginBottom: 5 }}>
                {selectedDispute.status}
              </CustomText>
              <CustomText variant={'body'} fontSize={14} style={{color:'#999' }}>
                {selectedDispute.statusMessage}
              </CustomText>
            </Box>
          </Box>

          {/* Issue Description */}
          <Box style={{ marginBottom: 20 }}>
            <CustomText variant={'body'} fontSize={13}  style={{ marginBottom: 8, color:'#999'  }}>
              What's wrong with this transaction?
            </CustomText>
            <CustomText variant={'body'} fontSize={16} fontWeight={'700'} color={'white'}>
              {selectedDispute.issueDescription}
            </CustomText>
          </Box>

          {/* Beneficiary Details */}
          <Box style={{ marginBottom: 20 }}>
            <CustomText variant={'body'} fontSize={15} fontWeight={'700'} color={'white'} style={{ marginBottom: 12 }}>
              Account Name: {selectedDispute.accountName}
            </CustomText>
            <CustomText variant={'body'} fontSize={15} fontWeight={'700'} color={'white'} style={{ marginBottom: 12 }}>
              Account Number: {selectedDispute.accountNumber}
            </CustomText>
            <CustomText variant={'body'} fontSize={15} fontWeight={'700'} color={'white'}>
              Bank: {selectedDispute.bank}
            </CustomText>
          </Box>

          {/* Dispute ID */}
          <Box
            style={{
              borderTopWidth: 1,
              borderTopColor: '#2a2a2a',
              paddingTop: 20,
              paddingBottom: 20,
              borderBottomWidth: 1,
              borderBottomColor: '#2a2a2a',
            }}
          >
            <CustomText variant={'body'} fontSize={13}  style={{ marginBottom: 8 , color:'#999' }}>
              Dispute ID
            </CustomText>
            <Box flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <CustomText variant={'body'} fontSize={16} fontWeight={'700'} color={'white'}>
                {selectedDispute.id}
              </CustomText>
              <Pressable onPress={() => handleCopy(selectedDispute.id, 'Dispute ID')}>
                <Ionicons name="copy" size={24} color="#30b06a" />
              </Pressable>
            </Box>
          </Box>

          {/* Payment Method */}
          <Box
            style={{
              paddingTop: 20,
              paddingBottom: 20,
              borderBottomWidth: 1,
              borderBottomColor: '#2a2a2a',
            }}
          >
            <CustomText variant={'body'} fontSize={13}  style={{ marginBottom: 8 , color:'#999' }}>
              Payment Method
            </CustomText>
            <CustomText variant={'body'} fontSize={16} fontWeight={'700'} color={'white'}>
              {selectedDispute.paymentMethod}
            </CustomText>
          </Box>

          {/* Transaction Reference */}
          <Box style={{ paddingTop: 20 }}>
            <CustomText variant={'body'} fontSize={13}  style={{ marginBottom: 8,color:'#999' }}>
              Transaction Reference
            </CustomText>
            <Box flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <CustomText variant={'body'} fontSize={16} fontWeight={'700'} color={'white'} style={{ flex: 1, marginRight: 10 }}>
                {selectedDispute.transactionReference}
              </CustomText>
              <Pressable onPress={() => handleCopy(selectedDispute.transactionReference, 'Transaction Reference')}>
                <Ionicons name="copy" size={24} color="#30b06a" />
              </Pressable>
            </Box>
          </Box>
        </ScrollView>
      </Box>
    );
  }

  // Dispute History List View
  return (
    <Box flex={1} style={{ backgroundColor: '#1a1a1a' }}>
      {/* Header */}
      <Box
        style={{
          paddingTop: 50,
          paddingBottom: 20,
          paddingHorizontal: 20,
          backgroundColor: '#1a1a1a',
        }}
      >
        <Box flexDirection={'row'} alignItems={'center'} style={{ marginBottom: 25 }}>
          <Pressable onPress={handleNavigation}>
            <Box
              width={45}
              height={45}
              style={{ backgroundColor: '#2a2a2a', borderRadius: 22.5 }}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Ionicons name="chevron-back" size={24} color="white" />
            </Box>
          </Pressable>

          <Box flex={1} alignItems={'center'}>
            <CustomText variant={'body'} fontSize={18} fontWeight={'700'} color={'white'}>
              Dispute History
            </CustomText>
          </Box>

          <Box width={45} />
        </Box>

        {/* Search Bar */}
        <Box
          flexDirection={'row'}
          alignItems={'center'}
          style={{
            backgroundColor: '#2a2a2a',
            borderRadius: 12,
            paddingHorizontal: 15,
            paddingVertical: 12,
          }}
        >
          <Ionicons name="search" size={20} color="#666" style={{ marginRight: 10 }} />
          <TextInput
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search Dispute ID, Amount, Status"
            placeholderTextColor="#666"
            style={{
              flex: 1,
              fontSize: 15,
              color: 'white',
            }}
          />
        </Box>
      </Box>

      {/* Disputes List */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingHorizontal: 20 }}>
        {filteredDisputes.length > 0 ? (
          filteredDisputes.map((dispute) => (
            <Pressable key={dispute.id} onPress={() => handleDisputePress(dispute)}>
              <Box
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                style={{
                  backgroundColor: '#2a2a2a',
                  borderRadius: 12,
                  padding: 18,
                  marginBottom: 15,
                }}
              >
                {/* Left side - ID, Amount, Date */}
                <Box flex={1}>
                  <CustomText
                    variant={'body'}
                    fontSize={16}
                    fontWeight={'700'}
                    color={'white'}
                    style={{ marginBottom: 6 }}
                  >
                    {dispute.id}
                  </CustomText>
                  <Box flexDirection={'row'} alignItems={'center'}>
                    <CustomText variant={'body'} fontSize={14} style={{color:'#999'}}>
                      {dispute.amount}
                    </CustomText>
                    <Box
                      width={4}
                      height={4}
                      style={{
                        backgroundColor: '#999',
                        borderRadius: 2,
                        marginHorizontal: 8,
                      }}
                    />
                    <CustomText variant={'body'} fontSize={14} style={{color:'#999'}}>
                      {dispute.date.split(',')[0]}
                    </CustomText>
                  </Box>
                </Box>

                {/* Right side - Status Badge and Chevron */}
                <Box flexDirection={'row'} alignItems={'center'}>
                  <Box
                    style={{
                      backgroundColor: dispute.statusColor,
                      borderRadius: 6,
                      paddingHorizontal: 12,
                      paddingVertical: 6,
                      marginRight: 12,
                    }}
                  >
                    <CustomText variant={'body'} fontSize={13} fontWeight={'700'} color={'black'}>
                      {dispute.status}
                    </CustomText>
                  </Box>
                  <Ionicons name="chevron-forward" size={20} color="#666" />
                </Box>
              </Box>
            </Pressable>
          ))
        ) : (
          // Empty State
          <Box flex={1} justifyContent={'center'} alignItems={'center'} style={{ marginTop: 100 }}>
            <Box
              width={80}
              height={80}
              style={{ backgroundColor: '#2a2a2a', borderRadius: 40, marginBottom: 20 }}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Ionicons name="document-text-outline" size={40} color="#666" />
            </Box>
            <CustomText variant={'body'} fontSize={18} fontWeight={'700'} color={'white'} textAlign={'center'}>
              No disputes found
            </CustomText>
            <CustomText
              variant={'body'}
              fontSize={14}
              
              textAlign={'center'}
              style={{ marginTop: 10, color:'#999' }}
            >
              Your transaction disputes will appear here
            </CustomText>
          </Box>
        )}
      </ScrollView>
    </Box>
  );
}