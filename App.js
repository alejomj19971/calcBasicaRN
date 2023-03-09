import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import {styles} from './assets/components/Estilos'
import { Banner } from './assets/components/Banner.js';
import Formulario from './assets/components/Formulario';

export default function App() {


  return (
    <View style={[styles.container,{flex:1,backgroundColor:'white'}]}>
      <View style={[styles.container,{flex:1,backgroundColor:'powderblue'}]}>
       {/*<Image source={require('./assets/img/calculadora.jpg')} style={{width:'100%',height:'100%',resizeMode:'stretch'}}></Image>*/}
       <Banner name='calculadora' />
      </View>

      <View style={[styles.container,{flex:4,backgroundColor:'white',marginBottom:10}]}>
        <Formulario/>
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


