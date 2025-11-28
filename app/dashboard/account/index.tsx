import { View, Text } from 'react-native'
import React, { ReactNode, useEffect, useState } from 'react'
import Box from '@component/general/Box'
import CustomHeader from '@component/general/CustomHeader'
import CustomText from '@component/general/CustomText'
import { Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'
import { getUserDetails } from '@utils/getUser'

interface IProps {
  link: string;
  title: string
  icon: ReactNode;
}

const arr: IProps[] = [
  {
    link: '/dashboard/account/edit',
    icon: <Ionicons name='person-outline' size={24} color='black' />,
    title: 'Edit Profile'
  },
  {
    link: '/dashboard/account/change-password',
    icon: <Ionicons name='key-outline' size={24} color='black' />,
    title: 'Change Password'
  },
  {
    link: '/dashboard/account/banks',
    icon: <Ionicons name='cash-outline' size={24} color='black' />,
    title: 'Saved Banks'
  },
  {
    link: '/dashboard/account/address',
    icon: <Ionicons name='location-outline' size={24} color='black' />,
    title: 'Saved Addresses'
  }
]
const NavItem = ({ link, title, icon }: IProps) => {
  return (
    <Box width='100%' height={40} flexDirection={'row'} alignItems={'center'}marginBottom={'md'}>
      {icon}
      <Box width={20} />
      <Link href={link as any}>
        <CustomText variant={'body'}  color='black' marginLeft={'3xl'}>{title}</CustomText>
      </Link>
    </Box>
  )
}

const SettingsPage = () => {
  

  const [user, setUserProps] = useState<any>()
  useEffect(() => {
    async function getUser() {
      const userDetails = await getUserDetails();
      setUserProps(userDetails);
      // console.log('userdetails',userDetails)
    }
    getUser()
  }, []); 
  
   
   const firstname = user?.firstname
   const lastname = user?.lastname
   const email = user?.email
   const profilePic = user?.profilePicture
   console.log('profile pic',profilePic)
  //  console.log(user)

  

  return (
    
    <Box flex={1} bg='white' padding='md' paddingTop={'3xl'}>
        <CustomHeader title='My Account' />
        <Box width='100%' height={150} flexDirection={'row'} alignItems={'center'}>
          <Box width={'auto'} height={'auto'} alignItems={'center'} justifyContent={'center'} > 
            {
              user?.profilePhoto == null?
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
          </Box>

          <Box marginLeft={'xs'} width={'70%'}>
            <CustomText variant={'subheader'} fontSize={18} textTransform={'capitalize'} color='black'>{firstname} {lastname}</CustomText>
              <CustomText variant={'xs'} fontSize={14}>{email} </CustomText>
          </Box>
        </Box>
        <ScrollView style={{ flex: 1 }}>
          { arr.map((item, indx) => (
            <NavItem key={indx} {...item} />
          ))}
        </ScrollView>
    </Box>
  )
}

export default SettingsPage