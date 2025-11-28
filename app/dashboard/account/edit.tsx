import { View, Text, Pressable, useWindowDimensions, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import Box from '@component/general/Box'
import CustomHeader from '@component/general/CustomHeader'
import CustomText from '@component/general/CustomText'
import useForm from '@hooks/useForm'
import { editProfileSchema } from '@services/validation'
import { CustomTextInput } from '@component/form/CustomInput'
import { SubmitButton } from '@component/form/CustomButton'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { getUserDetails } from '@utils/getUser'
import { Ionicons } from '@expo/vector-icons'
import { useMutation } from 'react-query'
import httpService from '@utils/httpService'
import Loader from '@component/loader'
import * as SecureStorage from 'expo-secure-store'
import EditProfilePic from '@component/modals/EditProfilePic'
import * as ImagePicker from 'expo-image-picker'
import { Base64 } from 'js-base64';

const EditProfile = () => {
     
  useEffect(() => {
    async function getUser() {
      const userDetails = await getUserDetails();
      setUserProps(userDetails);
      // console.log('userdetails',userDetails)
    }
    getUser()
  }, []); 

  const [user, setUserProps] = useState<any>()
  const [loading, setIsLoading] = useState(false)
  const [changePhoto, setChangePhoto] = useState(false)
  const [imagesPicked, setImages] = useState<any[]>([]);

  useEffect(() => {
    console.log('on the run')
    if(imagesPicked.length === 1){
       const image = imagesPicked.map(image => image.uri);
       const binaryData = image.join(''); // Concatenate binary data strings// Concatenate binary data strings
       const base64Data = Base64.encode(binaryData);
      //  const data = base64Data;
       console.log('base 64 image', base64Data)
       const data = {
        file: base64Data
       }

       uploadPic(data)
    }

   }, [imagesPicked]); 

   const firstname = user?.firstname
   const lastname = user?.lastname
   const email = user?.email
   const phone = user?.phone
   const profilePic = user?.profilePicture
   const id = user?.id
   const token = user?.token
   console.log('token:',token)
    // const { height } = useWindowDimensions();
    const { renderForm } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        },
        validationSchema: editProfileSchema
    })

    const {  mutate: uploadPic } = useMutation({
      mutationFn: (data: any) => httpService.post(`/file-upload/upload?uploadType=PROFILE_PIC`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
      }),
      onSuccess: (data) => {

        console.log(data);
        const { url } = data.data;
        Alert.alert(url)
        setIsLoading(false)

      },

      onError: (error: any) => {
        const message = error?.message
        alert(message)
        setIsLoading(false)
      },
    })

    const { isLoading, mutate } = useMutation({
        mutationFn: (data: any) => httpService.put(`/user/?id=${id}`, data, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
          }
        }),
        onSuccess: (data) => {
          console.log(data);
          const { message } = data.data;
          Alert.alert(message)
        //   clearUserDetails()
          setIsLoading(false)

        //   console.log(data.data.data.data);
            
            // const { token } = data.data.data;
            // const  user  = data.data.data.data;
            // const {id, email, profilePicture, emailVerified, firstName, lastName, phone, roles, accountVerified, addressVerified, createdAt} = user;
            // // console.log(user)
            // console.log(message)
            // console.log(token)
            // console.log(email)
            // console.log(id)
            // console.log(firstName)
            // console.log(lastName)
            // console.log(phone)
            // console.log(emailVerified)
            // console.log(profilePicture)
            // console.log(roles)
            // console.log(accountVerified)
            // console.log(addressVerified)
            // console.log(createdAt)


    //   async function storeSession() {
    //       try {
    //           const userDetails = {
    //             firstname: firstName,
    //             lastname: lastName,
    //             email: email,
    //             id: id,
    //             token: token,
    //             phone: phone,
    //             profilePicture: profilePicture,
    //             roles: roles,
    //             accountVerified: accountVerified,
    //             addressVerified: addressVerified,
    //             createdAt: createdAt
    //           }
    //           const userDetailsString = JSON.stringify(userDetails);
    //           await SecureStorage.setItemAsync("userDetails", userDetailsString);

    //       } catch (error) {
    //         // console.error("Error storing user details:", error);
    //       }
    //   }
    //   storeSession()


        },
        onError: (error: any) => {
          const message = error?.message
          alert(message)
          setIsLoading(false)
        },
      })

    const handleSubmit = async (data: any) => {
          setIsLoading(true)
          console.log(data)
          mutate(data)
      };

    async function clearUserDetails() {
            try {
                await SecureStorage.deleteItemAsync("userDetails");
            } catch (error) {
            }
    }

    const pickImage = async () => {
        if (imagesPicked.length >= 10) {
          // Display an alert message when the limit is exceeded
          Alert.alert('Limit Exceeded', 'You can only select up to 10 images.');
          return;
        }
      
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: false,
          aspect: [4, 3],
          quality: 1,
          allowsMultipleSelection: true,
        });
      
        if (!result.canceled) {
          // Add selected images to the array, but limit it to 10
          const selectedImages = result.assets.slice(0, 10 - imagesPicked.length);
          setImages([...imagesPicked, ...selectedImages]);
        }
    };
    const removeImage = (selectedIndex: number) => {
        const updatedImages = imagesPicked.filter((image, index) => index !== selectedIndex);
        setImages(updatedImages);
    };

  return renderForm(
    <>
    <Box height={'100%'} width={'100%'} justifyContent={'center'} alignItems={'center'}>
       <Box width={'95%'} height={'95%'}>
       <CustomHeader title='Account' />

                <Box width='100%' flexDirection={'row'} marginTop={'xs'} alignItems={'center'}>
                    <Box width={'auto'} height={'auto'} alignItems={'center'} justifyContent={'center'} > 
                        {
                        user?.profilePhoto == null && imagesPicked.length === 0?
                        <>
                          <Ionicons name='person-circle-sharp' size={120} color={'#667085'}/>
                        </>
                        :
                        user?.profilePhoto?
                        <>
                        {/* <Image source={user?.profilePic} resizeMode='cover' /> */}
                        </> 
                        : null
                        }
                         <> 
                        {imagesPicked.map((imagePicked, index) => (
                            <Box key={index} marginLeft={'sm'} borderRadius={100}  
                              borderWidth={1}>
                                <Image source={{ uri: imagePicked.uri }} style={{ width: 100, height: 100, borderRadius:100 }} />
                                <Box position={'absolute'} style={{marginLeft:'85%'}}>
                                  <Pressable onPress={() => removeImage(index)}>
                                    <Ionicons name='close-sharp' size={15} color={'red'} />
                                  </Pressable>
                                </Box>
                              </Box>
                            ))}
                        </> 
                    </Box>
                        
                        <Pressable onPress={()=>setChangePhoto(true)} style={{ width: 'auto', height: 40, borderRadius: 10, borderWidth: 1,
                         borderColor: 'lightgrey', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, marginLeft: 20}}>
                            <CustomText variant={'medium'} fontSize={14}>Change Picture</CustomText>
                        </Pressable>
                </Box>

                    <Box width={'100%'} flexDirection={'row'} marginVertical={'md'} justifyContent={'space-between'}>
                        <Box width={'45%'}>
                            <CustomTextInput name='firstName' isPassword={false} placeholder={firstname} label='First Name' />
                        </Box>

                        <Box width={'45%'}>
                            <CustomTextInput name='lastName' isPassword={false} placeholder={lastname} label='Last Name' />
                        </Box>
                    </Box>

                    <CustomTextInput name='email' placeholder={email} label='Email' />

                    <Box width={'100%'} paddingTop={'xs'} >
                        <CustomText variant={'xs'}>To change your email contact <CustomText variant={'xs'} color={'primaryColor'}> support@propertymart</CustomText></CustomText>
                    </Box>

                    <Box marginBottom={'md'} />
                    <CustomTextInput name='phone' placeholder={phone} label='Phone' />
                    <Box marginBottom={'2xl'} />
                    <TouchableOpacity>
                        <SubmitButton onSubmit={(data) => handleSubmit(data)} isLoading={isLoading} label='Update' width='100%' />
                    </TouchableOpacity>
       </Box>
    </Box>
        {
            loading && (
            <Loader/>
            )
        }
        {
        changePhoto && (
            <EditProfilePic setChangePhoto={setChangePhoto} pickImage={pickImage}/>
        )
        }
    </>
  )
}



export default EditProfile;