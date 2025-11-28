import { Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Box from '@component/general/Box'
import CustomHeader from '@component/general/CustomHeader'
import { getUserDetails } from '@utils/getUser'
import { useMutation } from 'react-query'
import httpService from '@utils/httpService'
import CustomText from '@component/general/CustomText'
import { Feather } from '@expo/vector-icons'


const del = require('../../../assets/images/foreground/delete.png')
const edit = require('../../../assets/images/foreground/edit-01.png')

const Banks = () => {

  useEffect(() => {
    async function getUser() {
      const userDetails = await getUserDetails();
      setUserProps(userDetails);
      console.log('userdetails for banks',userDetails)
    }
    getUser()
  }, []); 

  const [banks, setBanks] = useState<any>([])
  const [user, setUserProps] = useState<any>()

  const token = user?.token;
  console.log('tokinazation', token);

  const { mutate: mutateBanks, isLoading } = useMutation({
    mutationFn: (data: any) => httpService.get(`/bank/clu884ae000016k6t5gwn2hhu`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }),
    onSuccess: (data) => {
      console.log(data.data.message)
      console.log('fetched banks', data.data.data)
      const banks = data.data.data 
      // const address: React.SetStateAction<never[]> = []
      setBanks(banks)

    },
    onError: (error: any) => {
      console.log(error)
    },
  });

  useEffect(() => {
    setTimeout(() => {
      console.log('Hello, world!');
      mutateBanks(token); 
    }, 500) 

    
  }, []);

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleItemPress = (itemId: number) => {
    // Check if the item is already selected
    const isSelected = selectedItems.includes(itemId);

    // Update the selected items state
    setSelectedItems((prevSelectedItems) =>
      isSelected
        ? prevSelectedItems.filter((id) => id !== itemId)
        : [...prevSelectedItems, itemId]
    );
  };
  return (
    <Box flex={1} padding={'md'}>
    <CustomHeader title='Saved Address' />
    <Box marginTop={'md'} />
      <Box>
      <Box marginTop={'md'} />
      <Box>
        <Box marginTop={'xl'} flexDirection={'row'} alignItems={'center'} height={200} flexWrap={'wrap'} >
          {
            banks.length === 0?
            <>
            <CustomText variant={'body'}>No Banks </CustomText>
            </>
            : 
            <>
            {
              banks.map((item:any)=>{
                  return(
                      <>
                      <Box width={'100%'} key={item.id} height={130}>
                        <Pressable onPress={() => handleItemPress(item.id)}>
                          <Box borderRadius={10} style={{ backgroundColor: selectedItems.includes(item.id) ? '#EAF1FE' : '#EAECF0',}} height={'90%'}>
                              <Box borderRadius={10} borderWidth={2} style={{borderColor: selectedItems.includes(item.id) ? '#2D66DD' : 'grey',}}  
                                height={'100%'} justifyContent={'center'} alignItems={'center'}>
                                <Box width={'90%'} height={'90%'}>
                                  <Box flexDirection={'row'} alignItems={'center'} height={'45%'} >
                                    <Box width={'10%'}>
                                      <Box height={18} width={18} borderWidth={1} borderColor={selectedItems.includes(item.id) ? 'btnBlue' : 'textInputBorderColor'} borderRadius={100} 
                                          justifyContent={'center'} alignItems={'center'}>
                                          { selectedItems.includes(item.id) &&
                                          <Box height={8} width={8} backgroundColor={'btnBlue'} borderRadius={100} >
                                          </Box>}
                                      </Box>
                                    </Box>
                                    <Box width={'70%'}>
                                      <CustomText variant={'subheader'} color={selectedItems.includes(item.id) ? 'btnBlue': 'black'} fontSize={14}>{item.isDefault == true? 'Default':null }</CustomText>
                                    </Box>
                                    <Box width={'20%'} flexDirection={'row'}>
                                    <Feather name='edit-2' size={25} />
                                    <Image source={del} resizeMode='cover' style={{marginLeft:5, width:20, height:20}}  />
                                    </Box>
                                    
                                  </Box>
                                  <Box marginLeft={'xl'}>
                                    <CustomText lineHeight={12} color={selectedItems.includes(item.id) ? 'btnBlue': 'black'} fontSize={12}>{item.address}</CustomText>
                                    <CustomText lineHeight={12} color={selectedItems.includes(item.id) ? 'btnBlue': 'black'} fontSize={12}>{item.country}</CustomText>
                                  </Box>
                              </Box>
                              </Box>
                          </Box>
                        </Pressable>
                      </Box> 
                      </>
                  )
              })
            }
            </>
          
          }           
        </Box>
      </Box>
      </Box>
    </Box>
  )
}

export default Banks