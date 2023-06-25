import React from "react";
import { StatusBar } from "expo-status-bar";
import {Text,StyleSheet,View,Image} from "react-native";
import Mybutton from "../../components/Mybutton";

function Inicial (){
    return(
        <View style={style.boxInicial}>
        <StatusBar barStyle="dark-content" backgroundColor='#F9EF04' /> 
        <Text style={style.titulo}>Consientiza</Text>
        <Image source={require('..//../assets/planet-earth.png')}
        style={style.logoImage}
        />
        <Text style={style.frase}>Rico é aquele que sabe ter o suficiente.</Text>
        <Mybutton></Mybutton>
        <Image source={require('..//../assets/plant.png')}
        style={style.rodapeImage}
        />
        <Text style={style.rodapeText}>Em busca de um futuro melhor!</Text>
        </View>
    );

}
const style = StyleSheet.create({
    boxInicial:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        //backgroundColor: 'blue',
    },
    titulo: {
        color: '#F9EF04',
        fontSize: 40,
        fontWeight: 700,
        marginLeft:80,
        textShadowColor:'black',
        textShadowOffset:{width: 2, height: 2},
        textShadowRadius:1,
    }, 
    logoImage:{
        width: 46,
        resizeMode: 'contain',
        height:70,
        right:100,
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
    frase:{
        bottom:80,
        left: 50,
    }
});
export default Inicial;

