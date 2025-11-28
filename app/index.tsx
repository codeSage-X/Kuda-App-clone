import React, { useEffect, useState } from 'react';
import * as SecureStorage from 'expo-secure-store';
import { QueryClientProvider, useQuery } from 'react-query';
import { useRouter } from 'expo-router';
import LandingPage from './splash/landingPage';
import Box from '@component/general/Box';
import { Image } from 'react-native';

// import queryClient from '@utils/queryClient';

const Home = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   async function retrieveUserDetails() {
  //     try {
  //       const userDetailsString = await SecureStorage.getItemAsync("userDetails");
  //       if (userDetailsString) {
  //         const userDetails = JSON.parse(userDetailsString);
  //         if (userDetails.token) {
  //           console.log("Token Retrieved:", userDetails.token);
  //           setIsLoggedIn(true);
  //           // queryClient.setQueryData('userDetails', userDetails); // Store user details in React Query
  //           router.replace("/dashboard/tabs/home/");
  //         } else {
  //           console.log("Token is not stored.");
  //           setIsLoggedIn(false);
  //         }
  //         return userDetails;
  //       } else {
  //         console.log("User details not found in secure storage.");
  //         router.replace('/splash/onboarding')
  //         return null;
  //       }
  //     } catch (error) {
  //       console.error("Error retrieving user details:", error);
  //       return null;
  //     }
  //   }

  //   retrieveUserDetails();

    // Retrieve user details from React Query cache
  
  // }, []); // Empty dependency array ensures useEffect runs only once

  useEffect(() => {
    setTimeout(() => {
      router.replace('/splash/landingPage')
    },5000)
  }, []);
 
  return (
    // <QueryClientProvider client={queryClient}>
      // <LandingPage />
     <Box height={'100%'} width={'100%'}>
       <Image source={require('../assets/images/splash.png')} style={{ width: '100%', height: '100%' }} />
     </Box>
    // </QueryClientProvider>
  );
}

export default Home;
