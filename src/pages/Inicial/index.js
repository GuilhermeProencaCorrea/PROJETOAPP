import React from "react";
import { StatusBar } from "expo-status-bar";
import {Text,StyleSheet,View,Image,Alert} from "react-native";
import Mybutton from "../../components/Mybutton";
import { Container } from "..//../styles/styleGeral";

function Inicial ({navigation}){

    const Entrar = () =>{
        navigation.navigate('Home');
    }
    return(
        
        <Container>
        <StatusBar barStyle="dark-content" backgroundColor='#F9EF04' /> 
        <Text style={style.titulo}>Consientiza</Text>
        <Image source={require('..//../assets/planet-earth.png')}
        style={style.logoImage}
        />
        <Text style={style.fraseText}>Rico é aquele que sabe ter o suficiente.</Text>
        <Mybutton acao={Entrar}></Mybutton>
        <Image source={require('..//../assets/plant.png')}
        style={style.rodapeImage}
        />
        <Text style={style.rodapeText}>Em busca de um futuro melhor!</Text>
        </Container>
       
    );

}
const style = StyleSheet.create({
    // boxInicial:{
    //     flex:1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     backgroundColor: '#fff',
    // },
    titulo: {
        color: '#F9EF04',
        fontSize: 40,
        fontWeight: 700,
        marginLeft:20,
        textShadowColor:'black',
        textShadowOffset:{width: 2, height: 2},
        textShadowRadius:1,
    }, 
    logoImage:{
        width: 46,
        resizeMode: 'contain',
        height:70,
        right:130,
        bottom:59,
    },
    rodapeText:{
        top:230,
        marginLeft:30,
    },
    rodapeImage:{
        marginRight:210,
        resizeMode: 'contain',
        width: 30,
        height:70,
        top:274,  
    },
    fraseText:{
        bottom:80,
        left: 30,
    }
});
export default Inicial;

