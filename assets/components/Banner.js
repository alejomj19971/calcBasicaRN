 import { View,Text,Image } from 'react-native'
 import { StyleSheet } from 'react-native'


 
 function Banner({name}){
    return(
      <Image source={require(`../img/${name}.jpg`)} style={{width:'100%',height:'100%',resizeMode:'cover'}}></Image>
    )
  }


  export {
    Banner
  }