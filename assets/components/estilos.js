import { StyleSheet } from "react-native";
 
const styles = StyleSheet.create({

    container: {
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%',
      height:'100%'
    },

    botones:{
      padding:2,
      color:'white',
      backgroundColor:'white',
      width:10,
      height:10 ,
      borderRadius:2,
      marginBottom:20
      

    },
    touchables:{
      padding:10,borderRadius:10,width:200,justifyContent:'center',alignItems:'center'
    },

    textTouchables:{
      color:'white',fontWeight:'bold',fontSize:20,width:'50%',textAlign:'center',borderRadius:20
    },
    textInputs:{
      borderColor:'black',
      borderRadius:5,
      height:50,
      width:'auto',
      borderWidth:2,
      padding:10

    },
    alerta:{
      backgroundColor:'red',
      color:'white',
      padding:10,
      borderRadius:15,
      opacity:0.7,
      fontSize:12,
      textAlign:'center',
      textTransform:'uppercase',
      marginBottom:5
     
    }
  });
export{
  styles
}