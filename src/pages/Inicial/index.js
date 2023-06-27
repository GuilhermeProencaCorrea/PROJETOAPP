import React from "react";
import { StatusBar } from "expo-status-bar";
import {Text,StyleSheet,Image,View} from "react-native";

import Mybutton from "../../components/Mybutton";
import { Container } from "..//../styles/styleGeral";
import { Box } from "..//../styles/styleGeral";

function Inicial ({navigation}){

    const Entrar = () =>{
        navigation.navigate('Home');
    }
    return(
        
        <Container>
        
        <StatusBar barStyle="dark-content" backgroundColor='#F9EF04'/> 
        <Box>
        <Image source={require('..//../assets/planet-earth.png')} style={style.logoImage}/>
        <Text style={style.titulo}>Consientiza</Text>
        </Box>

        <Text style={style.fraseText}>Rico é aquele que sabe ter o suficiente.</Text>

        <Mybutton acao={Entrar}></Mybutton>
        
        <Box>
        <Image source={require('..//../assets/plant.png')} style={style.rodapeImage}/> 
        <Text style={style.rodapeText}>Em busca de um futuro melhor!</Text>
        </Box>
        
        
        
    
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
    logoImage:{ 
        width: 46,
        resizeMode: 'contain',
        marginLeft:50
    },
    titulo: { 
        color: '#F9EF04',
        fontSize: 40,
        fontWeight: 700,
        textShadowColor:'black',
        textShadowOffset:{width: 2, height: 2},
        textShadowRadius:2,
        marginLeft:3,
        marginRight:50
    }, 
    fraseText:{ 
        alignItems:'center'

    },
    rodapeText:{ 
        marginLeft:5,
        
    },
    rodapeImage:{
        resizeMode: 'contain',
        width: 30, 
    },
});
export default Inicial;

