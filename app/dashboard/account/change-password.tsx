import { View, Text, Pressable, useWindowDimensions } from 'react-native'
import React from 'react'
import Box from '@component/general/Box'
import CustomHeader from '@component/general/CustomHeader'
import CustomText from '@component/general/CustomText'
import useForm from '@hooks/useForm'
import { editProfileSchema } from '@services/validation'
import { CustomTextInput } from '@component/form/CustomInput'
import { SubmitButton } from '@component/form/CustomButton'
import { ScrollView } from 'react-native-gesture-handler'

const ChangePassword = () => {
  const { height } = useWindowDimensions();
  const { renderForm } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
    validationSchema: editProfileSchema
  })

  const handleSubmit = (data:any) => {
   console.log(data)
  }

  return renderForm(
    <Box flex={1} padding="md">

      <CustomHeader title='Change Password' />
      <CustomText>Follow this steps to change your password</CustomText>

      <ScrollView style={{ minHeight: height, flex: 1, marginTop: 20 }} contentContainerStyle={{ paddingBottom: 200 }}>
       

       
        <CustomTextInput name='' placeholder='' label='Enter current password' />
        <Box marginBottom={'md'} />
        <CustomTextInput name='' placeholder='' label='Enter new password' isSignup={true} />
        
        <Box marginBottom={'md'} />
        <CustomTextInput name='' placeholder='' label='Confirm password' isSignup={true} />
        
        <Box marginBottom={'2xl'} />
        <SubmitButton onSubmit={(data) => handleSubmit(data)} label='Update' width='100%' />
      </ScrollView>

    </Box>
  )
}

export default ChangePassword