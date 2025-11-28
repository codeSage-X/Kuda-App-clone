import React, {useState} from 'react'
import { router } from 'expo-router'
import { Image,Alert } from 'react-native'
import Box from '@component/general/Box'
import CustomText from '@component/general/CustomText'
import useForm from '@hooks/useForm'
import { newPasswordSchema } from '@services/validation'
import { Styles } from '../../styles/auth/styles'
import { CustomTextInput } from '@component/form/CustomInput'
import { Link } from 'expo-router';
import { SubmitButton } from '@component/form/CustomButton'
// import { Ionicons } from '@expo/vector-icons'
import { PrimaryButton } from '@component/general/CustomButton'
const palmfone = require('../../assets/images/foreground/acctcreated.png')
// import HttpClient from '../../utils/httpService'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useMutation } from 'react-query'
import httpService from '../../utils/httpService'

const  NewPassword = ({userId}:any) => {

  const { renderForm, formState: { isValid },values } = useForm({
    defaultValues: {
      newPassword: '',
    },
    validationSchema: newPasswordSchema,
  })

  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const Router = router
  const login = () => {
    Router.push("/auth/login") 
  }
  const { isLoading: Saving, mutate } = useMutation({
    mutationFn: (data: any) => httpService.put('/authentication/user/reset-password/', data),
    onSuccess: (data) => {
      setStep(1)
      setIsLoading(false)
      const {message} = data.data;
      console.log(data.data);
      Alert.alert(message);
    },
    onError: (error: any) => {
      alert(error?.message)
    },
  })

  const SaveChanges = async ({data}:any) => {
    const formdata = values()
    console.log(formdata)
    const password = formdata.newPassword
    console.log(password)
    const user_id = userId
    console.log('stored Id', user_id)

    const newformdata = {
      user_id: user_id,
      password: password,
    }; 
    
    console.log(newformdata)
    if(formdata){
      let data = newformdata
      setIsLoading(true)
      mutate(data)
    }
};



  return renderForm(
    <Box style={[Styles.martContainer, Styles.flex]} >
      <Box style={Styles.subContainer}  marginTop={'xs'}>
        {step === 0?
        <>
        <Box height={'100%'}>
          <Box height={'100%'} width={'100%'}>   
            <CustomText variant={'subheader'} textAlign={'left'} fontSize={26} lineHeight={25} marginTop={'xl'} 
                  color={'black'} fontWeight={'800'}>Create New Password
            </CustomText>
              <Box marginTop={'xl'} marginBottom={'xs'}>
                  <CustomTextInput name='newPassword' placeholder='****' label='New Password' isPassword  />
              </Box>

              <Box marginTop={'xl'} marginBottom={'xs'}>
                  <CustomTextInput name='confirmPassword' placeholder='****' label='Confirm Password' isPassword  />
              </Box>

              {/* <Box width='100%' marginTop={'xl'} height={40} justifyContent={'center'} alignItems={'flex-end'}> */}
              <TouchableOpacity>
                  <Box width='100%' marginTop={'xs'} height={50} justifyContent={'center'} alignItems={'flex-end'}>
                      {/* <PrimaryButton label='Request OTP' width='100%' onPress={handleRequest} isLoading={isLoading}/> */}
                      <SubmitButton label='Save Changes' width='100%' onSubmit={(data) => SaveChanges(data)} isLoading={isLoading} /> 
                  </Box>
              </TouchableOpacity>
              {/* </Box> */}
          </Box>
        </Box>
        <Box height={'20%'} flexDirection={'row'} alignItems={'flex-end'}>
                    <Box height={5} width={'100%'}  flexDirection={'row'} justifyContent={'center'} >
                        <Box height={5} width={'30%'} backgroundColor={'black'} borderRadius={10}>
                            <CustomText>Hello</CustomText>
                        </Box>
                    </Box>
        </Box>
        </>
         :
         step == 1?
         <>
             <Box width={'100%'} height={'100%'}>
                  <Box height={'30%'} width={'100%'} >
                    <CustomText variant={'xs'} textAlign={'right'} fontSize={12} lineHeight={20} 
                      color={'btnBlue'} fontWeight={'800'}>
                        {/* I’ll do this later */}
                    </CustomText>
                  </Box> 
                <Box height={'70%'} width={'100%'} flexDirection={'column'} alignItems={'center'}>
                  <Box height={'20%'} paddingBottom={'xl'}>
                    <Image source={palmfone} resizeMode="cover" style={{width:100, height:100}} />
                  </Box>
                  <Box height={20}></Box>
                  <Box height={'10%'} marginTop={'xl'}>
                    <CustomText variant={'subheader'} textAlign={'left'} fontSize={20} lineHeight={25} marginTop={'sm'} 
                        color={'black'} fontWeight={'800'}>Password Reset Successful!
                    </CustomText>
                  </Box>
                  <Box height={'20%'}>
                    <CustomText variant={'xs'} textAlign={'center'} fontSize={14} lineHeight={20} 
                      color={'black'} fontWeight={'400'}>
                        Your password reset was successful. Please Login to continue.
                    </CustomText>
                  </Box>
                  <Box width={'100%'} marginTop={'xs'}>
                    <PrimaryButton onPress={()=>{login()}} label={'Login'} width={'100%'} 
                          />        
                  </Box>
                  <Box height={'60%'} flexDirection={'row'} alignItems={'flex-end'}>
                    <Box height={5} width={'100%'}  flexDirection={'row'} justifyContent={'center'} >
                        <Box height={5} width={'30%'} backgroundColor={'black'} borderRadius={10}>
                            <CustomText>Hello</CustomText>
                        </Box>
                    </Box>
                  </Box>
                </Box>
                
            </Box>
            </> 
         : null }
      </Box>
    </Box>
  )
}

export default NewPassword