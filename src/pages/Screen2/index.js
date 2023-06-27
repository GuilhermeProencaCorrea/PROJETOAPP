import React from "react";
import { StatusBar } from "expo-status-bar";
import {Text,StyleSheet,Image,ScrollView} from "react-native";
import { Container } from "../../styles/styleGeral";

import {MeuTexto,MeuTitulo,MeuTextoCentralizado} from "./styles";
function Screen2 (){

    return(
        
        <Container>
            <ScrollView>
            <Image source={require('..//..//assets/onu.jpg')}
            style={style.imageStyle}/>
            <MeuTitulo>As 17 ODS</MeuTitulo>
                <MeuTexto>⭕ As ODS (Objetivos de Desenvolvimento Sustentável) são um conjunto de 17 metas estabelecidas pelas Nações Unidas como parte da Agenda 2030 para o Desenvolvimento Sustentável. Esses objetivos foram adotados por todos os países membros das Nações Unidas em setembro de 2015, e têm como objetivo principal abordar os principais desafios globais, como a pobreza, a fome, a desigualdade, a degradação ambiental, entre outros.</MeuTexto>
                <MeuTexto>1) Erradicação da pobreza: Acabar com a pobreza em todas as suas formas e garantir a inclusão social e econômica para todos.</MeuTexto>
                <MeuTexto>2) Fome zero e agricultura sustentável: Acabar com a fome, alcançar a segurança alimentar, melhorar a nutrição e promover a agricultura sustentável.</MeuTexto>
                <MeuTexto>3) Saúde e bem-estar: Garantir uma vida saudável e promover o bem-estar para todas as idades, com acesso a serviços de saúde de qualidade.</MeuTexto>
                <MeuTexto>4) Educação de qualidade: Assegurar uma educação inclusiva, equitativa e de qualidade, promovendo oportunidades de aprendizagem ao longo da vida.</MeuTexto>
                <MeuTexto>5) Igualdade de gênero: Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas.</MeuTexto>
                <MeuTexto>6) Água limpa e saneamento: Garantir a disponibilidade e gestão sustentável da água e saneamento para todos.</MeuTexto>
                <MeuTexto>7) Energia limpa e acessível: Assegurar o acesso à energia confiável, sustentável, moderna e a um preço acessível para todos.</MeuTexto>
                <MeuTexto>8) Trabalho decente e crescimento econômico: Promover o crescimento econômico sustentado, inclusivo e sustentável, emprego pleno e produtivo, e trabalho decente para todos.</MeuTexto>
                <MeuTexto>9) Indústria, inovação e infraestrutura: Construir infraestruturas resilientes, promover a industrialização inclusiva e sustentável, e fomentar a inovação.</MeuTexto>
                <MeuTexto>10) Redução das desigualdades: Reduzir as desigualdades dentro e entre países, promovendo a inclusão social, econômica e política de todos.</MeuTexto>
                <MeuTexto>11) Cidades e comunidades sustentáveis: Tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis.</MeuTexto>
                <MeuTexto>12) Consumo e produção responsáveis: Assegurar padrões de consumo e produção sustentáveis.</MeuTexto>
                <MeuTexto>13) Ação contra a mudança global do clima: Tomar medidas urgentes para combater a mudança climática e seus impactos.</MeuTexto>
                <MeuTexto>14) Vida abaixo da água: Conservar e usar de forma sustentável os oceanos, mares e recursos marinhos para o desenvolvimento sustentável.</MeuTexto>
                <MeuTexto>15) Vida terrestre: Proteger, restaurar e promover o uso sustentável dos ecossistemas terrestres, combater a desertificação, deter a degradação da terra e a perda da biodiversidade.</MeuTexto>
                <MeuTexto>16) Paz, justiça e instituições eficazes: Promover sociedades pacíficas e inclusivas para o desenvolvimento sustentável, garantir o acesso à justiça para todos e construir instituições eficazes, responsáveis e inclusivas.</MeuTexto>
                <MeuTexto>17) Parcerias em prol das metas: Fortalecer os meios de implementação e revitalizar a parceria global para o desenvolvimento sustentável.</MeuTexto>

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
    height: 190,
    width: 350,
    resizeMode: 'stretch',
    },



});

export default Screen2;