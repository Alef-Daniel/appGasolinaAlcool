import React from "react";
import {Image, Modal, StyleSheet, Text, View} from 'react-native'



export default function Resultado(){
    return(
       <View style={styles.modalContainer}>
            <Modal transparent={false} animationType='slide' visible={true} style={styles.modal} >
                    <View style={styles.areaImg}>
                            <Image source={require('../../img/gas.png')}></Image>
                    </View>
                    
                    <View style={styles.resultado}>
                            <Text style={{fontSize: 30, color: '#00FF00', fontWeight: 'bold', marginBottom: 20}}>Compensa usar Álcool</Text>
                            <Text style={{fontSize: 30, fontWeight:'bold', marginBottom: 10}}>Com os preços:</Text>
                            <Text style={styles.titulo}>Álcool: R$4.60</Text>
                            <Text style={styles.titulo}>Gasolina: R$7.10</Text>
                    </View>
                    </Modal>
            </View>
    );
}


const styles= StyleSheet.create({
   
    modalContainer:{
        backgroundColor: 'black',
        width: '100%',
        height: '100%'
    },
    
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
    }
})