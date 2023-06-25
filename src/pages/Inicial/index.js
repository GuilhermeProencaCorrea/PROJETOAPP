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
        <Text>Precisamos plantar mais e colher menos!</Text>
        <Mybutton></Mybutton>
        <Image source={require('..//..//assets/plant (1).png')}
        style={style.rodapeImage}
        />
        <Text>Em busca de um futuro melhor!</Text>
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
    },
    logoImage:{
        width: 46,
        resizeMode: 'contain',
        height:70,
        right:100,
        bottom:59,
    },
    rodapeImage:{
        resizeMode: 'contain',
        width: 2,
        alignItems: 'center',
    }
});
export default Inicial;

