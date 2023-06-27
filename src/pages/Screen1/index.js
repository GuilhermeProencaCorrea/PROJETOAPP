import React from "react";
import { StatusBar } from "expo-status-bar";
import {Text,StyleSheet,Image,ScrollView} from "react-native";
import { Container } from "../../styles/styleGeral";

import {MeuTexto,MeuTitulo,MeuTextoCentralizado} from "./styles";

function Screen1 (){

    return(
        
        <Container>
            <ScrollView>
            <Image source={require('..//../assets/coletaseletiva3.jpg')}
            style={style.imageStyle}/>

            <MeuTitulo>♻️</MeuTitulo>

            

            <MeuTexto> Vivemos em um mundo que enfrenta desafios ambientais cada 
                vez mais urgentes. Um dos problemas mais significativos que enfrentamos
                 é o descarte inadequado de lixo. O ato irresponsável de jogar resíduos em
                  locais impróprios tem um impacto negativo direto na saúde humana, na vida
                   selvagem e no equilíbrio dos ecossistemas. No entanto, podemos fazer a 
                   diferença adotando práticas de descarte correto de lixo.
                   
            </MeuTexto>
            <MeuTexto>O primeiro passo para um descarte adequado é entender a importância da
                 separação dos resíduos. Em muitas regiões, a coleta seletiva já é uma realidade. 
                 Separar o lixo em diferentes categorias, como plástico, papel, metal e vidro, permite 
                 que esses materiais sejam reciclados e reutilizados, reduzindo a necessidade de produção 
                 de novos recursos.</MeuTexto>
            <MeuTitulo>Cores da coleta seletiva:</MeuTitulo>
            <MeuTextoCentralizado>
            🟥 Plástico
            🟨 Metal
            🟩 Vidro
            🟦 Papel
            🟫 Orgânico

            </MeuTextoCentralizado>
        
            
            </ScrollView>
        </Container>
       
    );
}
const style = StyleSheet.create({
    imageStyle:{
    resizeMode: 'contain',
    padding: 10,
    borderRadius:5,
    margin: 10,
    height: 220,
    width: 350,
    resizeMode: 'stretch',
    
    },



});


export default Screen1;