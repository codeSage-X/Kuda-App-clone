import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({
   martContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection:'column'
   },
   subContainer: {
    height:'90%',
    width: '95%',
   },

   flex: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
   },
   
   logo: {
      width:100,
      height:50
   },

   container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: '#333',
      borderRadius: 5,
      padding: 10,
      fontSize: 16,
      width: 50, // Adjust width based on your design
      textAlign: 'center',
    },

});