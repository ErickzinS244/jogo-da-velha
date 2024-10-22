import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { useState } from 'react';


export default function App() {
  const[tela,setTela] = useState('menu')
switch(tela){
  case'menu':
    return getTelaMenu();
  case'jogo':
    return getTelaJogo();  
  case'ganhador':
    return getTelaGanhador();
}
function getTelaMenu(){
  return(
  <View style={styles.container}>
    <Text style={styles.titulo}>Jogo da velha</Text>
    <Text style={styles.subtitulo}>jogão do pão</Text>
    <StatusBar style="auto" />

    <View style={styles.inlineItems}>
      <TouchableOpacity style={styles.boxJogador}>
       <Text style={styles.jogadorX}>X</Text>
      </TouchableOpacity>
    
      <TouchableOpacity style={styles.boxJogador}>
        <Text style={styles.jogadorO}>O</Text>
      </TouchableOpacity>
    </View>

</View>
  );
}
function getTelaJogo(){
  <View style={styles.container}>
    <Text>Jogo</Text>
    <StatusBar style="auto" />
</View>
}
function getTelaGanhador(){
  <View style={styles.container}>
    <Text>Ganhador</Text>
    <StatusBar style="auto" />
</View>
}






























}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize:30,
    fontWeight:'bold',
    color:'black',
  },
  subtitulo:{
    fontSize:20,
    color:'#555',
    marginTop:20,
  },
  boxJogador:{
    margin:10,
    width:80,
    height:80,
    backgroundColor:"#ddd",
    alignItems:'center',
    justifyContent:'center',
  },
  jogadorX:{
    fontSize:40,
    color:"#eb4634",
  },
  jogadorO:{
    fontSize:40,
    color:"#0044ff",
  },
  inlineItems:{
    flexDirection:'row'
  }

});
