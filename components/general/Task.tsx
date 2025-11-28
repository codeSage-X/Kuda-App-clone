import { Ionicons } from '@expo/vector-icons';
import Box from '@component/general/Box'
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CustomText from './CustomText';

const Task = (props:any) => {

  return (
    <Box flexDirection={'row'} alignItems={'center'} marginTop={'md'}>
      <Box width={'10%'}>
        <Box height={34} width={34} justifyContent={'center'} alignItems={'center'} style={{backgroundColor:'#F5F8FF', borderRadius:100}}>
           <Ionicons name={'business-outline'} color={'blue'} size={20}/>
        </Box>
      </Box>
      <Box width={'90%'} justifyContent={'center'} padding={'xs'}> 
        <CustomText variant={'xs'}>{props.text}</CustomText>
      </Box>
    </Box>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;