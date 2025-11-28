import React, { useState } from 'react';
import Box from '@component/general/Box';
import CustomText from '@component/general/CustomText';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, ScrollView, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();
  const [showComposer, setShowComposer] = useState(false);
  const [message, setMessage] = useState('');

  const handleBack = () => {
    if (showComposer) {
      setShowComposer(false);
    } else {
      router.back();
    }
  };

  const handleClose = () => {
    router.back();
  };

  const handleSendMessage = () => {
    setShowComposer(true);
  };

  const handleSend = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
      // Optionally close composer after sending
      // setShowComposer(false);
    }
  };

  return (
    <KeyboardAvoidingView
    
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, backgroundColor: '#f5f5f5',  }}
    >
      <Box flex={1} style={{ backgroundColor: '#f5f5f5' }}>
        {/* Header */}
        <Box
          style={{
            backgroundColor: 'white',
            paddingTop: 50,
            paddingBottom: 15,
            paddingHorizontal: 20,
            borderBottomWidth: 1,
            borderBottomColor: '#e0e0e0',
          }}
        >
          <Box flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Pressable onPress={handleBack}>
              <Ionicons name={showComposer ? 'chevron-back' : 'chevron-back'} size={28} color="black" />
            </Pressable>

            <CustomText variant={'body'} fontSize={18} fontWeight={'700'} color={'black'}>
              {showComposer ? 'Kuda' : 'Messages'}
            </CustomText>

            <Box flexDirection={'row'} alignItems={'center'}>
              {!showComposer && (
                <Pressable style={{ marginRight: 20 }}>
                  <Ionicons name="create-outline" size={24} color="black" />
                </Pressable>
              )}
              <Pressable onPress={handleClose}>
                <Ionicons name="close" size={28} color="black" />
              </Pressable>
            </Box>
          </Box>
        </Box>

        {/* Content Area */}
        {!showComposer ? (
          // Empty State
          <Box flex={1} justifyContent={'center'} alignItems={'center'} style={{ paddingHorizontal: 40 }}>
            {/* Message Icon */}
            <Box style={{ marginBottom: 30 }}>
              <Ionicons name="chatbubble" size={80} color="black" />
            </Box>

            {/* No messages text */}
            <CustomText
              variant={'body'}
              fontSize={24}
              fontWeight={'700'}
              color={'black'}
              textAlign={'center'}
              style={{ marginBottom: 15 }}
            >
              No messages
            </CustomText>

            {/* Subtitle */}
            <CustomText
              variant={'body'}
              fontSize={16}
              // color={'#666'}
              textAlign={'center'}
              style={{ marginBottom: 40,color:'#666' }}
            >
              Messages from the team will be shown here
            </CustomText>

            {/* Send us a message button */}
            <Pressable onPress={handleSendMessage}>
              <Box
                style={{
                  backgroundColor: '#6b4a9e',
                  borderRadius: 30,
                  paddingVertical: 16,
                  paddingHorizontal: 35,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <CustomText
                  variant={'body'}
                  fontSize={16}
                  fontWeight={'700'}
                  color={'white'}
                  style={{ marginRight: 10 }}
                >
                  Send us a message
                </CustomText>
                <Ionicons name="send" size={20} color="white" />
              </Box>
            </Pressable>
          </Box>
        ) : (
          // Composer State
          <Box flex={1}>
            <ScrollView
              style={{ flex: 1 }}
              contentContainerStyle={{ paddingTop: 30, paddingHorizontal: 20 }}
            >
              {/* Support Team Avatars */}
              <Box
                flexDirection={'row'}
                justifyContent={'center'}
                alignItems={'center'}
                style={{ marginBottom: 20 }}
              >
                <Box
                  width={80}
                  height={80}
                  style={{ backgroundColor: '#e0e0e0', borderRadius: 40, marginHorizontal: 5 }}
                />
                <Box
                  width={80}
                  height={80}
                  style={{ backgroundColor: '#e0e0e0', borderRadius: 40, marginHorizontal: 5 }}
                />
                <Box
                  width={80}
                  height={80}
                  style={{ backgroundColor: '#e0e0e0', borderRadius: 40, marginHorizontal: 5 }}
                />
              </Box>

              {/* Response Time Text */}
              <Box alignItems={'center'} style={{ marginBottom: 20,  }}>
                <CustomText variant={'body'} fontSize={16} style={{color:'#999'}}
                // color={'#999'} 
                textAlign={'center'}>
                  We type.who reply in a few seconds
                </CustomText>
                <CustomText
                  variant={'body'}
                  fontSize={14}
                  
                  // color={'#bbb'}
                  textAlign={'center'}
                  style={{ marginTop: 5, color:'#bbb' }}
                >
                  You can usually expect a response soon
                </CustomText>
              </Box>
            </ScrollView>

            {/* Message Input Area */}
            <Box
              style={{
                backgroundColor: 'white',
                borderTopWidth: 1,
                borderTopColor: '#e0e0e0',
                paddingHorizontal: 15,
                paddingVertical: 10,
              }}
            >
              {/* Input hint */}
              {message.length === 0 && (
                <Box style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
                  <CustomText variant={'body'} fontSize={14}  style={{color:'#999'}}
                  // color={'#999'}
                  >
                    You can type
                  </CustomText>
                </Box>
              )}

              <Box flexDirection={'row'} alignItems={'center'}>
                {/* Attachment Icons */}
                <Pressable style={{ marginRight: 15 }}>
                  <Ionicons name="camera-outline" size={26} color="#666" />
                </Pressable>
                <Pressable style={{ marginRight: 15 }}>
                  <Ionicons name="image-outline" size={26} color="#666" />
                </Pressable>
                <Pressable style={{ marginRight: 15 }}>
                  <CustomText fontSize={20} style={{color:'#666'}}
                  // color={'#666'}
                  >
                    GIF
                  </CustomText>
                </Pressable>

                {/* Text Input */}
                <Box flex={1}>
                  <TextInput
                    value={message}
                    onChangeText={setMessage}
                    placeholder="Message..."
                    placeholderTextColor="#999"
                    style={{
                      fontSize: 16,
                      color: 'black',
                      paddingVertical: 10,
                      paddingHorizontal: 10,
                    }}
                    multiline
                  />
                </Box>

                {/* Send Button */}
                <Pressable onPress={handleSend} disabled={!message.trim()}>
                  <CustomText
                    variant={'body'}
                    fontSize={16}
                    fontWeight={'600'}
                    style={{ color: message.trim() ? '#6b4a9e' : '#ccc' }}
                  >
                    Send
                  </CustomText>
                </Pressable>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </KeyboardAvoidingView>
  );
}