import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal } from 'react-native';
import Resultado from './src/components/Resultado/Index';


export default function App(){
  return (

    <View style={styles.container}>
        <View style={styles.areaImg}>
          <Image source={require('./src/img/logo.png')}/>
          <Text style={{color: '#FFF', marginTop:20, fontSize: 30, fontWeight: 'bold'}}>Qual a Melhor opção?</Text>
        </View>
        <View style={styles.areaInput}>
              <Text style={styles.titulo}>Álcool(preço por litro)</Text>
              <TextInput placeholder='Ex: 4.60' style={styles.input}></TextInput>
              <Text style={styles.titulo}>Gasolina(preço por litro)</Text>
              <TextInput placeholder='Ex: 7.10' style={styles.input}></TextInput>
              <TouchableOpacity style={styles.btnCalcula}>
                <Text style={{color: '#fff', fontSize: 25, fontWeight: 'bold'}}>Calcular</Text>
              </TouchableOpacity>
        </View>
         

              

        
    </View>

  );
}


const styles = StyleSheet.create({
  container:{
  flex:1,
  backgroundColor: '#000'
  },
  areaImg:{
    flexDirection: 'column',
    justifyContent:'flex-start',
    alignItems: 'center',
    marginTop: 60,
  },
  areaInput:{
    marginTop:50,
    marginLeft: 10
  },
  titulo:{
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    margin:5
  },
  input:{
    backgroundColor: '#fff',
    borderRadius: 6,
    margin:5,
    color: 'black'
    
  },

  btnCalcula:{
    backgroundColor: '#FF4500',
    padding: 10,
    margin: 5,
    marginTop:15,
    borderRadius: 5,
    alignItems: 'center'
  },
  modalContainer:{
    backgroundColor: 'black',
    width: '100%',
    height: '100%'
  }

})