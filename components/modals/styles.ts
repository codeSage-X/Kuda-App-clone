import { StyleSheet } from 'react-native'
import { Keyframe } from 'react-native-reanimated'

export const Styles = StyleSheet.create({
   martContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection:'column',
    backgroundColor: 'white'
   },
    modal: {
      height: '100%',
      width: '100%',
      position: 'absolute',
      zIndex:999,
      backgroundColor: 'white'
    },
    span: {
      position: 'absolute',
      width:'100%',
      height:'100%',
      backgroundColor: 'inherit',
      borderRadius: 100,
    
    
    }

    // @Keyframe: pulseAnimate
    

});