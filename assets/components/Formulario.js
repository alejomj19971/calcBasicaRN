import { View,TextInput,Button } from "react-native";
import { styles } from "./Estilos"; 
export default function Formulario({numero}){
    return(
        <>
        
        <View >

            <View style={{marginBottom:10,padding:1}} >
                <TextInput   value={numero} placeholder="Inserte un número"/>
            </View>

            <View  style={{marginBottom:10,padding:1}}>
                <TextInput value={numero} placeholder="Inserte un número"/>
            </View>

            <View style={{flex:1,justifyContent:'space-between'}}>
                <Button  style={styles.botones}>Sumar</Button>
                <Button style={styles.botones}>Restar</Button>
            </View>

            
        </View>
        
        
        </>
    )
}