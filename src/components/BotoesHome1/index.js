import React from "react";
import {StyleSheet, Text, View, TouchableOpacity,Image} from "react-native";

const BotoesHome1 = (props) => {

    return (
        <View style={style.container}>
        <TouchableOpacity style={style.buttonStyle} onPress={props.acao}>
        <Image source={require('..//../assets/coletaseletiva.png')}
         style={style.buttonImageIconStyle}
        />
        </TouchableOpacity>
        </View>
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
});

export default BotoesHome1;