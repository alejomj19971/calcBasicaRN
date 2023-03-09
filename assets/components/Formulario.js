import { View,TextInput,Button ,TouchableOpacity,Text} from "react-native";
import { styles } from "./Estilos"; 
import { useState } from "react";
import Alerta from "./Alerta";
export default function Formulario(){
   
    //Definir variables de estado de este componente
    const [valor1,setValor1]=useState('')
    const [valor2,setValor2]=useState('')
    const[mensaje,setMensaje]=useState('')
    const [resultado,setResultado]=useState(0)
    //Metodo limpiar
    let limpiar = function(){
        setResultado(0)
        setValor1('')
        setValor2('')
    }
    //Definir los métodos
    let calcular=(operador)=>{
        let resulta=0;
        if(valor1!=''&& valor2!=''){
            
            switch (operador) {
                case "+":
                    resulta=parseFloat(valor1)+parseFloat(valor2)
                break;

                case "-":
                   resulta=parseFloat(valor1)-parseFloat(valor2)
                    
                break;

                case "X":
                    resulta=parseFloat(valor1)*parseFloat(valor2)
                    
                break;

                case "/":
                    resulta=parseFloat(valor1)/parseFloat(valor2)
                    
                break;

                case "^":
                    resulta=Math.pow(parseFloat(valor1),parseFloat(valor2))
                    
                break;

                case "Raíz":
                    resulta=Math.pow(parseFloat(valor1),1/parseFloat(valor2))
                    
                break;
            
                default:
                    break;
            }
            setResultado(resulta)
            setMensaje('')
        }
        else{
            setMensaje('Debe ingresar los dos valores')
        }
     
    }
    return(
        
        <>
        
        <View style={[styles.container,{marginTop:50}]} >
            
            <View style={{marginBottom:10,padding:1,marginTop:4}} >
            {mensaje!="" && <Alerta/> }
            
                <TextInput onChangeText={value=>setValor1(value)} style={styles.textInputs} value={valor1}   placeholder="Inserte un número"/>
            </View>

            <View  style={{marginBottom:10,padding:1,marginTop:4}}>
                <TextInput onChangeText={value=>setValor2(value)} style={styles.textInputs} value={valor2} placeholder="Inserte un número"/>
            </View>

            <Text style={[styles.textTouchables]}>Resultado</Text>

            <Text style={[styles.textTouchables,{borderWidth:2,borderRadius:10,borderColor:'green',width:200,height:50,textAlign:'center',color:'black',textAlignVertical:'center',padding:10}]}>
                {resultado.toFixed(2)} </Text>
             
            <View style={[styles.container,{flex:1,flexDirection:"row",justifyContent:'center',alignItems:'center'}]}>
                <TouchableOpacity onPress={()=>calcular("+")}
                style={styles.touchables}
                >
                    <Text style={[styles.textTouchables, {backgroundColor:'green',marginLeft:5}]}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=>calcular("-")}
                style={styles.touchables}
                >
                    <Text style={[styles.textTouchables, {backgroundColor:'red',marginLeft:5}]}>-</Text>
                </TouchableOpacity>
                

                <TouchableOpacity 
                onPress={()=>calcular("X")}
                style={styles.touchables}
                >
                    <Text style={[styles.textTouchables, {backgroundColor:'blue',marginLeft:5}]}>X</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=>calcular("/")}
                style={styles.touchables}
                >
                    <Text style={[styles.textTouchables, {backgroundColor:'purple'}]}>/</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=>calcular("^")}
                style={styles.touchables}
                >
                    <Text style={[styles.textTouchables, {backgroundColor:'brown'}]}>^</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=>calcular("Raíz")}
                style={styles.touchables}
                >
                    <Text style={[styles.textTouchables, {backgroundColor:'gray'}]}>Raíz</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.touchables}
                onPress={limpiar}
                >
                    <Text  style={[styles.textTouchables, {backgroundColor:'orange'}]}>C</Text>
                </TouchableOpacity>

              
                
                
                
            </View>

            
        </View>
        
        
        </>
    )
}