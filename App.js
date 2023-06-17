import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal, Keyboard } from 'react-native';
import Resultado from './src/components/Resultado/Index';


export default function App(){

  const [visible, setVisible]=useState(false);
  const[alcool, setAlcool] = useState(0);
  const[gasolina, setGasolina] = useState(0);
  const[resultado, setResultado] = useState('');

  function calcula(){
    
   (alcool / gasolina < 0.7 ? setResultado('Álcool'):setResultado('Gasolina'));
   setVisible(true);
  }





  return (

    <View style={styles.container}>
        <View style={styles.areaImg}>
          <Image source={require('./src/img/logo.png')}/>
          <Text style={{color: '#FFF', marginTop:20, fontSize: 30, fontWeight: 'bold'}}>Qual a Melhor opção?</Text>
        </View>
        <View style={styles.areaInput}>
              <Text style={styles.titulo}>Álcool(preço por litro)</Text>
              <TextInput  keyboardType='numeric' placeholder='Ex: 4.60' style={styles.input} onChangeText={(valor)=>setAlcool(valor)}></TextInput>
              <Text style={styles.titulo} >Gasolina(preço por litro)</Text>
              <TextInput keyboardType='numeric' placeholder='Ex: 7.10' style={styles.input} onChangeText={(valor)=>setGasolina(valor)}></TextInput>
              <TouchableOpacity style={styles.btnCalcula} onPress={()=>calcula()} >
                <Text style={{color: '#fff', fontSize: 25, fontWeight: 'bold'}}>Calcular</Text>
              </TouchableOpacity>
        </View>
         
        <Resultado visible={visible} resultado={resultado} alcool={alcool} gasolina={gasolina} voltar={()=>setVisible(false)}></Resultado>
              

        
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
    alignItems: 'center',
    
  },
  modalContainer:{
    backgroundColor: 'black',
    width: '100%',
    height: '100%'
  }

})