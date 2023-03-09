
import { View,Text} from "react-native";
import { styles } from "./Estilos"; 

 const Alerta=()=>{
    return(

    <View style={{marginTop:5}} >
        <Text style={styles.alerta}>Debe Ingresar los dos valores</Text>
    </View>

    )
}


export default Alerta;