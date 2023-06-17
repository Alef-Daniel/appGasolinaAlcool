import React from "react";
import {Image, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native'



export default function Resultado(props){
    return(
            <Modal  animationType='slide' visible={props.visible} style={styles.modal} >
                    <View style={styles.areaImg}>
                            <Image source={require('../../img/gas.png')}></Image>
                    </View>
                    
                    <View style={styles.resultado}>
                            <Text style={{fontSize: 30, color: '#00FF00', fontWeight: 'bold', marginBottom: 20}}>Compensa usar {props.resultado}</Text>
                            <Text style={{fontSize: 30, fontWeight:'bold', marginBottom: 10}}>Com os preços:</Text>
                            <Text style={styles.titulo}>Álcool: R${props.alcool}</Text>
                            <Text style={styles.titulo}>Gasolina: R${props.gasolina}</Text>
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={props.voltar}>
                        <Text style={{color:'#FF4500', fontSize: 20, fontWeight: 'bold' }}>Calcular novamente</Text>
                    </TouchableOpacity>
                    </Modal>
    );
}


const styles= StyleSheet.create({
    
    areaImg:{
        
        flexDirection: 'column',
         justifyContent:'flex-start',
         alignItems: 'center',
        marginTop: 60,
    },
    resultado:{
        alignItems: 'center'
    },
    titulo:{
            fontSize: 20,
    },
    btn:{
        marginTop: 30,
        margin: 60,
        borderColor:'#FF4500',
        alignItems: 'center',
        borderRadius: 8,
        padding: 5,
        borderStartWidth : 2,
        borderEndWidth : 2,
        borderTopWidth : 2,
        boderLeftWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth : 2,
    }
})