import React, { useState } from 'react';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, ScrollView, TextInput, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import ModalWrapper from '@component/modals/ModalWarpper';
import FullScreenSuccessModal from '@component/modals/FullScreenSuccessModal';
import DateTimePicker from '@react-native-community/datetimepicker';

const accountOptions = [
  'Spend Account Only',
  'Savings Pocket Only',
  'Spend Account and Savings Pocket',
];

export default function Index() {
  const router = useRouter();
  
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  
  const [selectedAccount, setSelectedAccount] = useState('Choose One');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedFormat, setSelectedFormat] = useState<'PDF' | 'Excel'>('PDF');
  const [email, setEmail] = useState('');

  const handleNavigation = (route: string) => {
    router.push(route as any);
  };

  const handleAccountSelect = (account: string) => {
    setSelectedAccount(account);
    setIsAccountModalOpen(false);
  };

  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleStartDateChange = (event: any, selectedDate?: Date) => {
    setShowStartDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setStartDate(selectedDate);
    }
  };

  const handleEndDateChange = (event: any, selectedDate?: Date) => {
    setShowEndDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setEndDate(selectedDate);
    }
  };

  // Email validation
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Check if form is valid
  const isFormValid = () => {
    return selectedAccount !== 'Choose One' && email.trim() !== '' && isValidEmail(email);
  };

  const handleGetStatement = () => {
    // Validate email
    if (!email.trim()) {
      alert('Please enter an email address');
      return;
    }
    
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    // Show success modal
    setIsSuccessModalOpen(true);
  };

  const handleSuccessModalClose = () => {
    setIsSuccessModalOpen(false);
    // handleNavigation('./tabs/more');
    router.back()
  };

  return (
    <ScrollView style={{ backgroundColor: '#121212' }}>
      <Box height={'100%'} width={'100%'} style={{ backgroundColor: '#121212' }}>
        {/* Header */}
        <Box
          height={60}
          paddingTop={'lg'}
          borderBottomWidth={0.2}
          style={{ borderColor: '#a1a1a1' }}
          width={'100%'}
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'center'}
          marginTop={'lg'}
        >
          <Box
            width={'100%'}
            height={50}
            justifyContent={'space-between'}
            alignItems={'center'}
            flexDirection={'row'}
          >
            <Box flexDirection={'row'} width={'10%'} padding={'md'} justifyContent={'flex-end'}>
              <Pressable onPress={() => handleNavigation('../statements')}>
                <Ionicons name="chevron-back" size={20} color="white" />
              </Pressable>
            </Box>
            <Box width={'70%'} padding={'md'} flexDirection={'row'} justifyContent={'flex-start'}>
              <CustomText variant={'body'} color={'white'} fontWeight={'800'} fontSize={14}>
                NGN Statement
              </CustomText>
            </Box>
            <Box width={'20%'} padding={'md'} flexDirection={'row'} justifyContent={'flex-end'}>
              <Pressable 
                onPress={handleGetStatement}
                disabled={!isFormValid()}
              >
                <CustomText 
                  variant={'body'} 
                  style={{ color: isFormValid() ? '#5e2e91' : '#666' }} 
                  fontWeight={'600'} 
                  fontSize={14}
                >
                  Get
                </CustomText>
              </Pressable>
            </Box>
          </Box>
        </Box>

        {/* Instructions */}
        <Box width={'100%'} alignItems={'center'}>
          <Box width={'90%'} alignItems={'center'} marginTop={'lg'}>
            <CustomText variant={'xs'} fontSize={12} style={{ color: '#a1a1a1' }}>
              Choose what you want the statement for and how you'd like to receive it
            </CustomText>
          </Box>

          {/* Account Selection */}
          <Box width={'90%'} marginTop={'lg'}>
            <CustomText variant={'xs'} fontSize={12} style={{ color: '#a1a1a1' }}>
              What would you like a statement for?
            </CustomText>
            
            <Pressable onPress={() => setIsAccountModalOpen(true)}>
              <Box
                height={50}
                width={'100%'}
                borderWidth={0.2}
                style={{ backgroundColor: '#2c2a2aff', borderRadius: 5, borderColor: '#404040' }}
                flexDirection={'row'}
                marginTop={'sm'}
                justifyContent={'space-between'}
                alignItems={'center'}
                paddingLeft={'sm'}
                paddingRight={'sm'}
              >
                <CustomText color={'white'} fontSize={14}>
                  {selectedAccount}
                </CustomText>
                <Ionicons name="chevron-down" size={20} color="white" />
              </Box>
            </Pressable>
          </Box>

          {/* Start Date */}
          {selectedAccount !== 'Choose One' && (
            <>
              <Box width={'90%'} marginTop={'lg'}>
                <CustomText variant={'xs'} fontSize={12} style={{ color: '#a1a1a1' }}>
                  Start Date
                </CustomText>
                <Pressable onPress={() => setShowStartDatePicker(true)}>
                  <Box
                    height={50}
                    width={'100%'}
                    borderWidth={0.2}
                    style={{ backgroundColor: '#2c2a2aff', borderRadius: 5, borderColor: '#404040' }}
                    marginTop={'sm'}
                    justifyContent={'space-between'}
                    flexDirection={'row'}
                    alignItems={'center'}
                    paddingLeft={'sm'}
                    paddingRight={'sm'}
                  >
                    <CustomText color={'white'} fontSize={14}>
                      {formatDate(startDate)}
                    </CustomText>
                    <Ionicons name="calendar-outline" size={20} color="#a1a1a1" />
                  </Box>
                </Pressable>
              </Box>

              {/* End Date */}
              <Box width={'90%'} marginTop={'lg'}>
                <CustomText variant={'xs'} fontSize={12} style={{ color: '#a1a1a1' }}>
                  End Date
                </CustomText>
                <Pressable onPress={() => setShowEndDatePicker(true)}>
                  <Box
                    height={50}
                    width={'100%'}
                    borderWidth={0.2}
                    style={{ backgroundColor: '#2c2a2aff', borderRadius: 5, borderColor: '#404040' }}
                    marginTop={'sm'}
                    justifyContent={'space-between'}
                    flexDirection={'row'}
                    alignItems={'center'}
                    paddingLeft={'sm'}
                    paddingRight={'sm'}
                  >
                    <CustomText color={'white'} fontSize={14}>
                      {formatDate(endDate)}
                    </CustomText>
                    <Ionicons name="calendar-outline" size={20} color="#a1a1a1" />
                  </Box>
                </Pressable>
              </Box>

              {/* Date Pickers */}
              {showStartDatePicker && (
                <DateTimePicker
                  value={startDate}
                  mode="date"
                  display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                  onChange={handleStartDateChange}
                  maximumDate={endDate}
                  themeVariant="dark"
                />
              )}

              {showEndDatePicker && (
                <DateTimePicker
                  value={endDate}
                  mode="date"
                  display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                  onChange={handleEndDateChange}
                  minimumDate={startDate}
                  themeVariant="dark"
                />
              )}

              {/* Format Selection */}
              <Box width={'90%'} marginTop={'lg'}>
                <CustomText variant={'xs'} fontSize={12} style={{ color: '#a1a1a1' }}>
                  Format
                </CustomText>
                <Box flexDirection={'row'} gap={'sm'} marginTop={'sm'}>
                  <Pressable 
                    style={{ flex: 1 }}
                    onPress={() => setSelectedFormat('PDF')}
                  >
                    <Box
                      height={50}
                      borderWidth={2}
                      style={{
                        backgroundColor: selectedFormat === 'PDF' ? '#1a472a' : 'transparent',
                        borderColor: selectedFormat === 'PDF' ? '#2e7d32' : '#404040',
                        borderRadius: 5,
                      }}
                      justifyContent={'center'}
                      alignItems={'center'}
                    >
                      <CustomText 
                        style={{ color: selectedFormat === 'PDF' ? '#4caf50' : 'white' }} 
                        fontSize={14}
                        fontWeight={'600'}
                      >
                        PDF
                      </CustomText>
                    </Box>
                  </Pressable>

                  <Pressable 
                    style={{ flex: 1 }}
                    onPress={() => setSelectedFormat('Excel')}
                  >
                    <Box
                      height={50}
                      borderWidth={2}
                      style={{
                        backgroundColor: selectedFormat === 'Excel' ? '#1a472a' : 'transparent',
                        borderColor: selectedFormat === 'Excel' ? '#2e7d32' : '#404040',
                        borderRadius: 5,
                      }}
                      justifyContent={'center'}
                      alignItems={'center'}
                    >
                      <CustomText 
                        style={{ color: selectedFormat === 'Excel' ? '#4caf50' : 'white' }} 
                        fontSize={14}
                        fontWeight={'600'}
                      >
                        Excel
                      </CustomText>
                    </Box>
                  </Pressable>
                </Box>
              </Box>

              {/* Email Input */}
              <Box width={'90%'} marginTop={'lg'}>
                <CustomText variant={'xs'} fontSize={12} style={{ color: '#a1a1a1' }}>
                  Additional Email Address *
                </CustomText>
                <Box
                  height={50}
                  width={'100%'}
                  borderWidth={0.2}
                  style={{ 
                    backgroundColor: '#2c2a2aff', 
                    borderRadius: 5, 
                    borderColor: email && !isValidEmail(email) ? '#d32f2f' : '#404040'
                  }}
                  marginTop={'sm'}
                  justifyContent={'center'}
                  paddingLeft={'sm'}
                >
                  <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="example@gmail.com"
                    placeholderTextColor="#666"
                    style={{ color: 'white', fontSize: 14 }}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </Box>
                {email && !isValidEmail(email) && (
                  <CustomText 
                    variant={'xs'} 
                    fontSize={11} 
                    style={{ color: '#d32f2f', marginTop: 4 }}
                  >
                    Please enter a valid email address
                  </CustomText>
                )}
                <CustomText 
                  variant={'xs'} 
                  fontSize={11} 
                  style={{ color: '#666', marginTop: 8 }}
                >
                  Add another email address you'd like us to send your statement to.
                </CustomText>
              </Box>
            </>
          )}
        </Box>

        <Box style={{ height: 40, backgroundColor: '#121212' }} />
      </Box>

      {/* Account Selection Modal */}
      <ModalWrapper
        isOpen={isAccountModalOpen}
        toggle={() => setIsAccountModalOpen(false)}
        height={300}
      >
        <Box flex={1} padding={'lg'}>
          <Box 
            width={'10%'} 
            height={5} 
            borderRadius={2} 
            style={{backgroundColor: '#ffffffff'}} 
            alignSelf={'center'}
            marginBottom={'lg'}
          />
          
          <Box alignItems={'center'}>
            <CustomText fontSize={18} fontWeight={'700'} marginBottom={'lg'} color={'white'}>
              What would you like a statement for?
            </CustomText>
          </Box>

          {accountOptions.map((option, index) => (
            <Pressable key={index} onPress={() => handleAccountSelect(option)}>
              <Box
                paddingVertical={'md'}
                borderBottomWidth={index < accountOptions.length - 1 ? 0.2 : 0}
                style={{ borderColor: '#4c4c4cff' }}
              >
                <CustomText fontSize={15} color={'white'}>
                  {option}
                </CustomText>
              </Box>
            </Pressable>
          ))}
        </Box>
      </ModalWrapper>

      {/* Success Modal */}
      <FullScreenSuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleSuccessModalClose}
      />
    </ScrollView>
  );
}