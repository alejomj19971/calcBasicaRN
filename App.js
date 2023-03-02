import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import {styles} from './assets/components/estilos'
import { useState } from 'react';
import { Banner } from './assets/components/Banner.js';


export default function App() {
  const [valor1,setValor1]=useState()

  return (
    <View style={[styles.container,{flex:1,backgroundColor:'orange'}]}>
      <View style={[styles.container,{flex:1,backgroundColor:'powderblue'}]}>
       {/*<Image source={require('./assets/img/calculadora.jpg')} style={{width:'100%',height:'100%',resizeMode:'stretch'}}></Image>*/}
       <Banner name='calculadora' />
      </View>

      <View style={[styles.container,{flex:4,backgroundColor:'yellowgreen'}]}>
        <Text style={[{color:'white'}]}>Cuerpo</Text>
      </View>


      <View style={[styles.container,{flex:1,backgroundColor:'#4F33FF'}]}>
        <Text style={[{color:'white'}]}>Todos los derechos Reservados</Text>
      </View> 

      <View style={[styles.container,{flex:1,backgroundColor:'#33DAFF'}]}>
   
        <Text style={[{color:'white'}]}>Derechos Reservados</Text>
      </View> 

      <View style={[styles.container,{flex:1,backgroundColor:'#33DAFF'}]}>
        <Banner name='numeros' />
      </View> 
     

    </View>
  );
}


