import { Image, Alert, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import useForm from '@hooks/useForm'
import { signupSchema } from '@services/validation'
import { Styles } from '../../styles/auth/styles'
import { CustomTextInput } from '@component/form/CustomInput'
import { Link } from 'expo-router';
import { SubmitButton } from '@component/form/CustomButton'
// import { PrimaryButton } from '@component/general/CustomButton'
import { Separator } from 'tamagui'
import { Ionicons } from '@expo/vector-icons'
import { Checkbox } from 'tamagui'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useMutation } from 'react-query'
import httpService from '../../utils/httpService'
import SignupVerify from './signupVerify'

import Loader from '@component/loader'
import AlertSuccess from '@component/alerts/success'
import AlertFailed from '@component/alerts/failed'

const logo = require('../../assets/images/logo/logo.png')

const Signup: React.FC = () => {

  const [step,setStep ] = useState(0);
  const [checked, setChecked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const [success, isSuccess] = React.useState(false)
  const [failed, isFailed] = React.useState(false)
  const [message, setMessage] = React.useState('')

  // store server props
  const [userId, setUserId] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
   
  const { renderForm, formState: { isValid }, values, } = useForm({
    defaultValues: {
      firstName: '',
      lastName:'',
      email: '',
      phone: '',
      password: '',
    },
    validationSchema: signupSchema,
  });
  
  const turnOffAlert = () =>{
    function setFalse(){
      isFailed(false);
      isSuccess(false);
      setIsLoading(false);
     }
    const timeoutId = setTimeout(setFalse, 3000);
  }


  const { isLoading: signupMutationLoading, mutate } = useMutation({
    mutationFn: (data: any) => httpService.post(`/authentication/user/create-account`, data),
    onSuccess: (data) => {
      console.log(data.data);
      const email = data.data.data.email
      const userId = data.data.data.id
      const {message} = data.data
      setMessage(message)
      isSuccess(true)
      // console.log(email)
      // console.log(userId)
      setUserEmail(email);
      setUserId(userId);
      setIsLoading(false)
      setStep(1)
      turnOffAlert()
    },
    onError: (error: any) => {
      // alert(error?.message)
      const message = error?.message
      setMessage(message)
      isFailed(true)
      turnOffAlert()
    },
  })


  const handleSubmit = async (data: any) => {
    if(!checked){
      Alert.alert('You have to accept our term & conditions to continue')
     
    } else{
      mutate(data);
      const formvalues = values()
      console.log(formvalues)
      setIsLoading(true)
    } 
  };

  const back = () => {
    setStep(0);
 }

  return renderForm(
    <>
    <Box style={[Styles.martContainer, Styles.flex]} >
      <Box style={Styles.subContainer}>
        <Box height={'100%'}>
          {
             step === 0? 
            <>
            <Box height={'100%'} width={'100%'}>
                <Image source={logo} resizeMode="cover" style={Styles.logo} />
                  <CustomText variant={'subheader'} textAlign={'left'} marginTop={'sm'} 
                      color={'black'} >Welcome to Property Mart
                  </CustomText>
                  
                  <CustomText variant={'xs'} textAlign={'left'}
                        color={'black'}>Finding your perfect home, one dream at a Time.
                  </CustomText>

                  <Box width={'100%'} flexDirection={'row'} justifyContent={'space-between'} marginTop={'lg'}>
                    <Box width={'45%'}>
                      <CustomTextInput name='firstName' placeholder='First Name' label='First Name' isPassword={false} />
                    </Box>
                    <Box width={'45%'}>
                      <CustomTextInput name='lastName' placeholder='Last Name' label='Last Name' isPassword={false} />
                    </Box>
                  </Box>

                  <Box marginTop={'sm'}>
                      <CustomTextInput name='email' placeholder='Email' label='Email Address' isPassword={false}  />
                        <Box marginBottom={'sm'} />

                      <CustomTextInput name='phone' placeholder='+234' label='Phone Number' />
                        <Box marginBottom={'sm'} />

                      <CustomTextInput name='password' placeholder='Password' label='Password' isPassword  isSignup
                       />
                          
                  </Box>

                  <Box width='100%' marginBottom={'sm'}  height={60} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>

                    <Checkbox onCheckedChange={(checked)=> setChecked(checked as boolean)} checked={checked}>
                      <Checkbox.Indicator>
                        <Ionicons name="checkmark-circle" size={20} color="#2D66DD" />
                      </Checkbox.Indicator>
                    </Checkbox>

                      <CustomText variant={'xs'} >
                          I agree to our  <Link href="/" style={{color:'#2D66DD'}}> Terms of Service & Privacy Policy </Link> 
                      </CustomText>

                  </Box>
                  <TouchableOpacity>
                    <SubmitButton label='Create an Account' width='100%' onSubmit={(data) => handleSubmit(data)} isLoading={isLoading} />
                  </TouchableOpacity>
                  <Box width='100%' flexDirection={'row'} height={60} alignItems={'center'} >
                    <Separator />
                    <CustomText variant={'xs'} fontWeight={'800'} color={'black'}>OR</CustomText>
                    <Separator />
                  </Box>

                  <Box flexDirection={'row'} width='100%' justifyContent={'center'} alignItems={'center'}>
                    <CustomText variant={'xs'} >Already a user?</CustomText>
                    <Link href={'/auth/signup'} style={{ marginLeft: 4 }}>
                    <CustomText variant={'xs'} color={'primaryColor'} marginLeft={'xs'}>Log in</CustomText>
                    </Link>
                  </Box>

                  {/* <Box height={'5%'} flexDirection={'row'} alignItems={'flex-end'}>
                    <Box height={5} width={'100%'}  flexDirection={'row'} justifyContent={'center'} >
                        <Box height={5} width={'30%'} backgroundColor={'black'} borderRadius={10}>
                            <CustomText>Hello</CustomText>
                        </Box>
                    </Box>
                  </Box> */}
            </Box>
            </> 
            : step === 1?
            <>  
            <Box marginTop={'xl'}>
                <TouchableOpacity>
                  <Pressable  onPress={back} >
                  <Ionicons
                    name="arrow-back-outline"
                    size={25}
                    />
                    </Pressable>
                 </TouchableOpacity>
              </Box>   
            <SignupVerify userEmail={userEmail} userId={userId} setIsLoading={setIsLoading} isLoading={isLoading}
             isFailed={isFailed} isSuccess={isSuccess} setMessage={setMessage} />
            </>
            : null
          }
          
        </Box>
      </Box>
    </Box>
    {
      isLoading && (
        <>
          <Loader/>
        </>
      )
    }

    {
      success && (
        <>
         <AlertSuccess message={message}/>
        </>
      )
    }
    {
      failed && (
        <>
         <AlertFailed message={message}/>
        </>
      )
    }

    </>
  )
}

export default Signup