import React from "react";
import {Text, Image, TouchableOpacity,StyleSheet} from "react-native"
import { Container } from "..//../styles/styleGeral";

import BotoesHome1 from "../../components/BotoesHome1"
import BotoesHome2 from "../../components/BotoesHome2";
import BotoesHome3 from "../../components/BotoesHome3";

function Home ({navigation}){
    const Entrar1 = () =>{
         navigation.navigate('Screen1');
    }
    const Entrar2 = () =>{
         navigation.navigate('Screen2');
    }
    const Entrar3 = () =>{
        navigation.navigate('Screen3');
   }
    return(
        <Container>

        <Text style={style.titulo}>Descate de Lixo</Text>

        <BotoesHome1 acao={Entrar1}></BotoesHome1> 

        <Text style={style.titulo}>ODS</Text>

        <BotoesHome2 acao={Entrar2}></BotoesHome2>

        <Text style={style.titulo}>Consumo Consiente</Text>

        <BotoesHome3 acao={Entrar3}></BotoesHome3>

        </Container>
       
    );

}
const style = StyleSheet.create({
buttonStyle:{
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#485a96', 
    borderWidth: 0.5, 
    borderColor: '#fff', 
    height: 100, 
    borderRadius: 20, 
    margin: 5,
},
buttonImageIconStyle:{
    resizeMode: 'contain',
    padding: 10,
    borderRadius:20,
    margin: 0,
    height: 100,
    width: 290,
    resizeMode: 'stretch',
},
titulo:{
    color: '#F9EF04',
    alignContent: 'center',
    fontSize: 30,
    fontWeight: 700,
    textShadowColor:'black',
    textShadowOffset:{width: 2, height: 2},
    textShadowRadius:2,  
    marginTop: 30,   
},
});



export default Home;