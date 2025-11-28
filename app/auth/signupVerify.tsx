import { Pressable, TextInput, Alert } from 'react-native'
import React, {useRef, useState} from 'react'
import Box from '@component/general/Box'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CustomText from '@component/general/CustomText'
import { Styles } from '../../styles/auth/styles'
import Countdown, { CountdownRef } from '@component/general/Countdown'
import { PrimaryButton } from '@component/general/CustomButton'

import { useMutation } from 'react-query'
import httpService from '../../utils/httpService'
import { router } from 'expo-router'

import Loader from '@component/loader'
import AlertSuccess from '@component/alerts/success'
import AlertFailed from '@component/alerts/failed'
// import { SubmitButton } from '@component/form/CustomButton'


const SignupVerify = ({userEmail, userId, setIsLoading, isLoading, isFailed, isSuccess, setMessage }:any) => {
 
    // OTP form Values
    const [otpInput_1, setOtpInput_1] = useState('');
    const [otpInput_2, setOtpInput_2] = useState('');
    const [otpInput_3, setOtpInput_3] = useState('');
    const [otpInput_4, setOtpInput_4] = useState('');
    const [otpInput_5, setOtpInput_5] = useState('');
    const [otpInput_6, setOtpInput_6] = useState('');

    const countdownRef = useRef<CountdownRef>(null);

    const turnOffAlert = () =>{
      function setFalse(){
        isFailed(false);
        isSuccess(false);
        setIsLoading(false);
       }
      const timeoutId = setTimeout(setFalse, 3000);
    }
    const { isLoading: signupMutationLoading, mutate:verifyMutate } = useMutation({
      mutationFn: (data: any) => httpService.put(`/authentication/user/verify-email`, data),
      onSuccess: (data) => {
        const {message} = data.data;
        console.log(data.data);
        // Alert.alert(message);
        setMessage(message)
        isSuccess(true)
        turnOffAlert()
        setIsLoading(false)
        router.push('/auth/signupSuccess')
      },
      onError: (error: any) => {
        const message = error?.message
        setIsLoading(false)
        setMessage(message)
        isFailed(true)
        turnOffAlert()
      },
    })
    const { isLoading: Loading, mutate:resendMutate } = useMutation({
      mutationFn: (data: any) => httpService.post(`authentication/user/resend-verification-email/`,data),
      onSuccess: (data) => {
        const {message} = data.data;
        console.log(data.data);
        setMessage(message)
        isSuccess(true)
        turnOffAlert()
        handleRestartClick()
        setIsLoading(false)
      },
      onError: (error: any) => {
        const message = error?.message
        setMessage(message)
        isFailed(true)
        turnOffAlert()
      },
    })
  
    const handleVerify = async (data: any) => {
    let otpData = otpInput_1 + otpInput_2 + otpInput_3 + otpInput_4 + otpInput_5 + otpInput_6 ;
    console.log(otpData)
    if(otpData.length < 6){
      setMessage("Enter complete OTP code!!")
      isFailed(true)
      turnOffAlert()
     } else {
      const token = otpData;
      const id = userId
      const data = {
        "token": token,
        "id": id,
      }
      setIsLoading(true)
      console.log(data)
      verifyMutate(data)
     }
    };

    const handleResend = async () => {
      const email = userEmail
      const data = {
        "email": email
      }

      console.log(data)
      resendMutate(data) 

    }

    const handleTimerEnd = () => {
        console.log('Time ended') 
    };

  const handleRestartClick = () => {
    if (countdownRef.current) {
      countdownRef.current.restart();
    }
  };
  
  const handleOtpInput_1Change = (text: any) => {
    // Ensure that the input contains only numbers
    const sanitizedText = text.replace(/[^0-9]/g, '');
    // Limit the input to 5 characters
    if (sanitizedText.length <= 5) {
      setOtpInput_1(sanitizedText);
    }
  };
  const handleOtpInput_2Change = (text: any) => {
    const sanitizedText = text.replace(/[^0-9]/g, '');
    if (sanitizedText.length <= 5) {
      setOtpInput_2(sanitizedText);
    }
  };
  const handleOtpInput_3Change = (text: any) => {
    const sanitizedText = text.replace(/[^0-9]/g, '');
    if (sanitizedText.length <= 5) {
      setOtpInput_3(sanitizedText);
    }
  };
  const handleOtpInput_4Change = (text: any) => {
    const sanitizedText = text.replace(/[^0-9]/g, '');
    if (sanitizedText.length <= 5) {
      setOtpInput_4(sanitizedText);
    }
  };
  const handleOtpInput_5Change = (text: any) => {
    const sanitizedText = text.replace(/[^0-9]/g, '');
    if (sanitizedText.length <= 5) {
      setOtpInput_5(sanitizedText);
    }
  };
  const handleOtpInput_6Change = (text: any) => {
    const sanitizedText = text.replace(/[^0-9]/g, '');
    if (sanitizedText.length <= 5) {
      setOtpInput_6(sanitizedText);
    }
  };
  
  return (
    <>
    <Box>
       <Box >        
              <CustomText variant={'subheader'} marginTop={'xl'}>Verify your Email
              </CustomText>
               <CustomText variant={'xs'}  marginTop={'xs'}>
                     Please enter the OTP code sent to {userEmail}
               </CustomText>

                <Box marginTop={'lg'} marginBottom={'lg'}>
                <Box style={Styles.container}>
                  <Box paddingRight={'xs'}>
                    <TextInput
                      style={Styles.input}
                      keyboardType="numeric"
                      maxLength={1}
                      value={otpInput_1}
                      onChangeText={handleOtpInput_1Change}
                    />
                  </Box>
                  <Box paddingRight={'xs'}>
                    <TextInput
                      style={Styles.input}
                      keyboardType="numeric"
                      maxLength={1}
                      value={otpInput_2}
                      onChangeText={handleOtpInput_2Change}
                    />
                  </Box>
                  <Box paddingRight={'xs'}>
                    <TextInput
                      style={Styles.input}
                      keyboardType="numeric"
                      maxLength={1}
                      value={otpInput_3}
                      onChangeText={handleOtpInput_3Change}
                    />
                  </Box>
                  <Box paddingRight={'xs'}>
                    <TextInput
                      style={Styles.input}
                      keyboardType="numeric"
                      maxLength={1}
                      value={otpInput_4}
                      onChangeText={handleOtpInput_4Change}
                    />
                  </Box>
                  <Box paddingRight={'xs'}>
                    <TextInput
                      style={Styles.input}
                      keyboardType="numeric"
                      maxLength={1}
                      value={otpInput_5}
                      onChangeText={handleOtpInput_5Change}
                    />
                  </Box>
                  <Box paddingRight={'xs'}>
                    <TextInput
                      style={Styles.input}
                      keyboardType="numeric"
                      maxLength={1}
                      value={otpInput_6}
                      onChangeText={handleOtpInput_6Change}
                    />
                  </Box>
                </Box>
                </Box>
                <TouchableOpacity>
                    <Box width='100%' marginTop={'xl'} height={50} justifyContent={'center'} alignItems={'center'}>
                    {/* <SubmitButton label='Verify' width='100%' onSubmit={(data) => handleVerify(data)} isLoading={isLoading} /> */}
                    <PrimaryButton label='Verify' width='100%' onPress={(data:any) => handleVerify(data)} isLoading={isLoading}/>
                    </Box>
                </TouchableOpacity>
                <Box width='100%' marginTop={'xs'} flexDirection={'row'} height={50} justifyContent={'center'} alignItems={'center'}>
                  <CustomText variant={'xs'} marginRight={'xs'}>Didn’t get a code?</CustomText>
                  <TouchableOpacity>
                    <Pressable onPress={handleResend}>
                        <CustomText variant={'xs'} style={{color:'#2D66DD', fontWeight:'800'}}>Resend</CustomText>
                    </Pressable>
                  </TouchableOpacity>
                  <CustomText>
                    <Countdown ref={countdownRef} initialTime={60} onTimerEnd={handleTimerEnd} />
                  </CustomText>
                  {/* <Button title="Restart" onPress={handleRestartClick} /> */}
                  {/* <Text>(0:05s)</Text> */}
                </Box>
                <Box height={'55%'} flexDirection={'row'} alignItems={'flex-end'}>
                <Box height={5} width={'100%'}  flexDirection={'row'} justifyContent={'center'} >
                    <Box height={5} width={'30%'} backgroundColor={'black'} borderRadius={10}>
                        <CustomText>Hello</CustomText>
                    </Box>
                </Box>
        </Box>
       </Box>

    </Box>
    
  </>
  )
}

export default SignupVerify;