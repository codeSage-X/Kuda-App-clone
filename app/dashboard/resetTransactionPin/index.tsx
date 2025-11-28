import React, { useState, useEffect } from 'react';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, TextInput, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

type VerificationMethod = 'initial' | 'sms' | 'email';

export default function Index() {
  const router = useRouter();
  const [currentState, setCurrentState] = useState<VerificationMethod>('initial');
  const [verificationCode, setVerificationCode] = useState('');
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);

  // Countdown timer
  useEffect(() => {
    if (currentState !== 'initial' && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [currentState, countdown]);

  const handleBack = () => {
    if (currentState !== 'initial') {
      // Go back to initial state
      setCurrentState('initial');
      setVerificationCode('');
      setCountdown(60);
      setCanResend(false);
    } else {
      // Go back to security page
      router.back();
    }
  };

  const handleSendViaSMS = () => {
    setCurrentState('sms');
    setCountdown(60);
    setCanResend(false);
    // Here you would trigger SMS sending
    console.log('Sending SMS code...');
  };

  const handleSendViaEmail = () => {
    setCurrentState('email');
    setCountdown(60);
    setCanResend(false);
    // Here you would trigger Email sending
    console.log('Sending Email code...');
  };

  const handleResendCode = () => {
    setCountdown(60);
    setCanResend(false);
    if (currentState === 'sms') {
      console.log('Resending SMS code...');
    } else {
      console.log('Resending Email code...');
    }
  };

  const handleNext = () => {
    if (verificationCode.length === 8) {
      // Validate code and proceed
      console.log('Verifying code:', verificationCode);
      // Navigate to next step or show success
    }
  };

  const handleCodeChange = (text: string) => {
    // Only allow numbers and limit to 8 characters
    const numericText = text.replace(/[^0-9]/g, '');
    setVerificationCode(numericText);
  };

  return (
    <Box flex={1} style={{ backgroundColor: '#121212' }}>
      {/* Header */}
      <Box
        style={{
          paddingTop: 50,
          paddingBottom: 20,
          paddingHorizontal: 20,
        }}
      >
        <Box flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Pressable onPress={handleBack}>
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

          <CustomText variant={'body'} fontSize={18} fontWeight={'700'} color={'white'}>
            Reset Transaction PIN
          </CustomText>

          {currentState !== 'initial' ? (
            <Pressable onPress={handleNext} disabled={verificationCode.length !== 8}>
              <Box
                style={{
                  backgroundColor: verificationCode.length === 8 ? '#6a3de8' : '#2a2a2a',
                  borderRadius: 8,
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                }}
              >
                <CustomText
                  variant={'body'}
                  fontSize={14}
                  fontWeight={'700'}
                  
                   style={{color:verificationCode.length === 8 ? 'white' : '#666'}}
                >
                  Next
                </CustomText>
              </Box>
            </Pressable>
          ) : (
            <Box width={70} />
          )}
        </Box>
      </Box>

      <ScrollView style={{ flex: 1 }}>
        {/* Initial State - Choose Method */}
        {currentState === 'initial' && (
          <Box style={{ paddingHorizontal: 20, marginTop: 20 }}>
            <CustomText variant={'body'} fontSize={15}  style={{ marginBottom: 20, color:'#999' }}>
              We'll send a code through WhatsApp to confirm that it's yours.
            </CustomText>

            <CustomText variant={'body'} fontSize={15} color={'white'} style={{ marginBottom: 20 }}>
              Choose how you want to get the code.
            </CustomText>

            {/* Send via SMS */}
            <Pressable onPress={handleSendViaSMS}>
              <Box
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                style={{
                  backgroundColor: '#2a2a2a',
                  borderRadius: 12,
                  padding: 18,
                  marginBottom: 15,
                }}
              >
                <Box flexDirection={'row'} alignItems={'center'}>
                  <Ionicons name="chatbubble" size={24} color="#30b06a" style={{ marginRight: 15 }} />
                  <CustomText variant={'body'} fontSize={16} fontWeight={'700'} color={'white'}>
                    Send via SMS
                  </CustomText>
                </Box>
                <Ionicons name="chevron-forward" size={24} color="#666" />
              </Box>
            </Pressable>

            {/* Send via Email */}
            <Pressable onPress={handleSendViaEmail}>
              <Box
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                style={{
                  backgroundColor: '#2a2a2a',
                  borderRadius: 12,
                  padding: 18,
                }}
              >
                <Box flexDirection={'row'} alignItems={'center'}>
                  <Ionicons name="mail" size={24} color="#25c1de" style={{ marginRight: 15 }} />
                  <CustomText variant={'body'} fontSize={16} fontWeight={'700'} color={'white'}>
                    Send via Email
                  </CustomText>
                </Box>
                <Ionicons name="chevron-forward" size={24} color="#666" />
              </Box>
            </Pressable>
          </Box>
        )}

        {/* SMS Verification State */}
        {currentState === 'sms' && (
          <Box style={{ paddingHorizontal: 20, marginTop: 20 }}>
            <CustomText variant={'body'} fontSize={15} style={{ marginBottom: 30, color:'#999' }}>
              We'll send a code through WhatsApp to confirm that it's yours.
            </CustomText>

            {/* Verification Code Input */}
            <Box style={{ marginBottom: 30 }}>
              <CustomText variant={'body'} fontSize={14} color={'white'} style={{ marginBottom: 10 }}>
                Verification Code
              </CustomText>
              <Box
                style={{
                  backgroundColor: '#2a2a2a',
                  borderRadius: 8,
                  borderWidth: 2,
                  borderColor: verificationCode.length > 0 ? '#6a3de8' : '#2a2a2a',
                  paddingHorizontal: 15,
                  paddingVertical: 15,
                }}
              >
                <TextInput
                  value={verificationCode}
                  onChangeText={handleCodeChange}
                  placeholder="••••••••"
                  placeholderTextColor="#666"
                  keyboardType="numeric"
                  maxLength={8}
                  style={{
                    fontSize: 18,
                    color: 'white',
                    letterSpacing: 4,
                  }}
                />
              </Box>
            </Box>

            {/* Didn't receive code */}
            <Box alignItems={'center'} style={{ marginBottom: 20 }}>
              <CustomText variant={'body'} fontSize={15}  style={{ marginBottom: 10, color:'#999' }}>
                Didn't receive code?
              </CustomText>
              {canResend ? (
                <Pressable onPress={handleResendCode}>
                  <CustomText variant={'body'} fontSize={15} fontWeight={'700'} style={{ color:'#30b06a'}}>
                    Resend code
                  </CustomText>
                </Pressable>
              ) : (
                <CustomText variant={'body'} fontSize={15}  style={{ color:'#999'}}>
                  Resending in{' '}
                  <CustomText fontWeight={'700'} style={{ color:'#30b06a'}}>
                    {countdown} seconds
                  </CustomText>
                </CustomText>
              )}
            </Box>
          </Box>
        )}

        {/* Email Verification State */}
        {currentState === 'email' && (
          <Box style={{ paddingHorizontal: 20, marginTop: 20 }}>
            <CustomText variant={'body'} fontSize={15} style={{ marginBottom: 30, color:'#999'}}>
              To reset your transaction PIN, you'll need to verify with a verification code sent to your email
            </CustomText>

            {/* Verification Code Input */}
            <Box style={{ marginBottom: 30 }}>
              <CustomText variant={'body'} fontSize={14} color={'white'} style={{ marginBottom: 10 }}>
                Verification Code
              </CustomText>
              <Box
                style={{
                  backgroundColor: '#2a2a2a',
                  borderRadius: 8,
                  borderWidth: 2,
                  borderColor: verificationCode.length > 0 ? '#6a3de8' : '#2a2a2a',
                  paddingHorizontal: 15,
                  paddingVertical: 15,
                }}
              >
                <TextInput
                  value={verificationCode}
                  onChangeText={handleCodeChange}
                  placeholder="••••••••"
                  placeholderTextColor="#666"
                  keyboardType="numeric"
                  maxLength={8}
                  style={{
                    fontSize: 18,
                    color: 'white',
                    letterSpacing: 4,
                  }}
                />
              </Box>
            </Box>

            {/* Didn't receive code */}
            <Box alignItems={'center'} style={{ marginBottom: 20 }}>
              <CustomText variant={'body'} fontSize={15}  style={{ marginBottom: 10, color:'#999' }}>
                Didn't receive code?
              </CustomText>
              {canResend ? (
                <Pressable onPress={handleResendCode}>
                  <CustomText variant={'body'} fontSize={15} fontWeight={'700'} style={{ color:'#30b06a'}}>
                    Resend code
                  </CustomText>
                </Pressable>
              ) : (
                <CustomText variant={'body'} fontSize={15} style={{ color:'#999'}}>
                  Resending in{' '}
                  <CustomText fontWeight={'700'} style={{ color:'#30b06a'}}>
                    {countdown} seconds
                  </CustomText>
                </CustomText>
              )}
            </Box>
          </Box>
        )}
      </ScrollView>
    </Box>
  );
}