import React from "react";
import { StatusBar } from "expo-status-bar";
import {Text,StyleSheet,Image,ScrollView} from "react-native";
import { Container } from "../../styles/styleGeral";

import {MeuTexto,MeuTitulo,MeuTextoCentralizado} from "./styles";
function Screen3 (){

    return(
        
        <Container>
            <ScrollView>
            <Image source={require('..//..//assets/consumoconsciente.png')}
            style={style.imageStyle}/>
            <MeuTitulo>Dicas de consumo</MeuTitulo>
            <MeuTexto>👕 Prefira produtos duráveis: Opte por produtos de qualidade, que tenham uma vida útil mais longa. Isso reduzirá a necessidade de substituí-los com frequência, evitando o desperdício.</MeuTexto>
            <MeuTexto>📦 Reduza embalagens: Dê preferência a produtos com embalagens minimalistas ou com embalagens recicláveis. Evite produtos excessivamente embalados.</MeuTexto>
            <MeuTexto>🔄 Compartilhe e empreste: Considere compartilhar itens que você usa ocasionalmente com amigos, familiares ou vizinhos. Isso reduzirá a necessidade de comprar produtos que serão pouco utilizados.</MeuTexto>
            <MeuTexto>🗑️ Reduza o desperdício: Evite o desperdício de alimentos, planejando refeições, armazenando adequadamente e aproveitando restos de comida. Reduza o uso de descartáveis, optando por produtos reutilizáveis, como garrafas de água e sacolas de compras.</MeuTexto>
            <MeuTexto>⚡ Desligue os aparelhos eletrônicos: Desligue os aparelhos eletrônicos quando não estiverem em uso. Muitos dispositivos consomem energia mesmo em modo de espera (standby).</MeuTexto>
            <MeuTexto>🚿 Banhos conscientes: Tome banhos mais curtos e feche a torneira ao ensaboar-se ou escovar os dentes.</MeuTexto>      
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
    height: 200,
    width: 350,
    resizeMode: 'stretch',
    
    },



});


export default Screen3;