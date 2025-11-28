import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import useForm from '@hooks/useForm'
import { loginSchema } from '@services/validation'
import { Styles } from '../../styles/auth/styles'
import { CustomTextInput } from '@component/form/CustomInput'
import { Link, router } from 'expo-router';
import { SubmitButton } from '@component/form/CustomButton'
import { Separator } from 'tamagui'
import { useMutation } from 'react-query'
import httpService from '@utils/httpService'
import * as SecureStorage from 'expo-secure-store';

import AlertSuccess from '@component/alerts/success'
import AlertFailed from '@component/alerts/failed'
import LoginVerify from './loginVerify'
import Loader from '@component/loader'

const logo = require('../../assets/images/logo/logo.png')

const Login = () => {
  
  const [step, setStep ] = React.useState(0);
  const [success, isSuccess] = React.useState(false)
  const [failed, isFailed] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const [loading, setIsLoading] = React.useState(false);

  // store server props
  const [userId, setUserId] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  // const [isLoading, setIsLoading] = React.useState(false);

  const { renderForm, formState: { isValid } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
  })

  // login mutation
  const { isLoading, mutate } = useMutation({
    mutationFn: (data: any) => httpService.post(`/user/login-as-seller`, data),
    onSuccess: (data) => {
      console.log(data.data.data.data);
      const { message } = data.data;
      const { token } = data.data.data;
      const  user  = data.data.data.data;
      const {id, email, profilePicture, emailVerified, firstName, lastName, phone, roles, accountVerified, addressVerified, createdAt} = user;
      // console.log(user)
      console.log(message)
      console.log(token)
      console.log(email)
      console.log(id)
      console.log(firstName)
      console.log(lastName)
      console.log(phone)
      console.log(emailVerified)
      console.log(profilePicture)
      console.log(roles)
      console.log(accountVerified)
      console.log(addressVerified)
      console.log(createdAt)

      if(emailVerified === true ){
        console.log("succefully logged in")

        async function storeSession() {
          try {
              const userDetails = {
                firstname: firstName,
                lastname: lastName,
                email: email,
                id: id,
                token: token,
                phone: phone,
                profilePicture: profilePicture,
                roles: roles,
                accountVerified: accountVerified,
                addressVerified: addressVerified,
                createdAt: createdAt
              }
              const userDetailsString = JSON.stringify(userDetails);
              // console.log("Token to be stored:", userDetailsString);
              await SecureStorage.setItemAsync("userDetails", userDetailsString);
              // console.log("userdetails stored successfully.");
              // If you need to redirect after storing the token
              router.replace("/dashboard/tabs/home/");

          } catch (error) {
            // console.error("Error storing user details:", error);
          }
      }
      storeSession()


      } else(
        setMessage("Verify your email"),
        isFailed(true),
        turnOffAlert(),
        setUserEmail(email),
        setUserId(id),
        setStep(1)
        
      )
    
  
    },
    onError: (error: any) => {
      const message = error?.message
      setMessage(message)
      isFailed(true)
      turnOffAlert()
    },
  })

  const turnOffAlert = () =>{
    function setFalse(){
      isFailed(false);
      isSuccess(false);
      // setIsLoading(false);
     }
    const timeoutId = setTimeout(setFalse, 3000);
  }
  return renderForm(
  <>
    <Box style={[Styles.martContainer, Styles.flex]} >
      <Box style={Styles.subContainer} marginTop={'lg'}>
        <Box height={'80%'} borderColor={'successColor'}>
          {
            step == 0? 
          <Box height={'100%'} width={'100%'}>
            <Image source={logo} resizeMode="cover" style={Styles.logo} />
            <CustomText variant={'subheader'} textAlign={'left'} fontSize={26} lineHeight={25} marginTop={'md'}
              color={'black'} fontWeight={'800'}>Welcome Back
            </CustomText>
            <CustomText variant={'xs'} textAlign={'left'} fontSize={12} lineHeight={25}
              color={'black'} fontWeight={'400'}>Enter your email address and password to gain access.
            </CustomText>

            <Box marginTop={'xl'}>
              <CustomTextInput name='email' placeholder='Email' label='Email Address' isPassword={false} />
              <Box marginBottom={'xl'} />
              <CustomTextInput name='password' placeholder='Password' label='Password' isPassword />
            </Box>

            <Box width='100%' marginBottom={'md'} height={40} justifyContent={'center'} alignItems={'flex-end'}>
              <Link href="/auth/forgotpassword">
                <CustomText variant={'xs'} color={'primaryColor'} fontSize={12} fontWeight={'800'} >Forgot Password?</CustomText>
              </Link>
            </Box>
            <SubmitButton label='Log in' width='100%' isLoading={isLoading} onSubmit={(data) => {
              mutate(data)
            }} />

            <Box width='100%' flexDirection={'row'} height={60} alignItems={'center'} >
              <Separator />
              <CustomText variant={'xs'} fontSize={12} fontWeight={'800'} color={'black'}>OR</CustomText>
              <Separator />
            </Box>

            <Box flexDirection={'row'} width='100%' justifyContent={'center'} alignItems={'center'}>
              <CustomText variant={'xs'} fontSize={12}>Don't have an account?</CustomText>
              <Link href={'/auth/signup'} style={{ marginLeft: 4 }}>
                <CustomText variant={'body'} fontSize={12} fontWeight={'800'} color={'primaryColor'} marginLeft={'xs'}>Create Account</CustomText>
              </Link>
            </Box>

          </Box>
           :
           step == 1?
           <Box height={'100%'} width={'100%'}>
             <LoginVerify userEmail={userEmail} userId={userId} setIsLoading={setIsLoading} isLoading={isLoading} setStep={setStep}
             isFailed={isFailed} isSuccess={isSuccess} setMessage={setMessage} />
           </Box>
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

export default Login;