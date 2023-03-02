import { View,TextInput,Button } from "react-native";
import {styles} from './assets/components/estilos'
function Formulario(props){
    return(
        <>
        
        <View style={styles.container}>

            <View>
                <TextInput placeholder="Inserte un número"/>
            </View>

            <View>
                <TextInput placeholder="Inserte un número"/>
            </View>

            <View>
                <Button style={styles.botones}>+</Button>
                <Button style={styles.botones}>-</Button>
            </View>

            
        </View>
        
        
        </>
    )
}