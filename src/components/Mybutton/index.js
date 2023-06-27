import React from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";


const Mybutton = (props) => {

    return (
        <View style={style.container}>
            <TouchableOpacity style={style.button} onPress={props.acao}>
                <Text style={style.texto}>Entra</Text>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    button:{
        alignItems: 'center',
        backgroundColor: '#F9EF04',
        borderColor:'#010101',
        borderWidth:2,
        padding:2,
        width:310,
        borderRadius:5,
        marginBottom:10,
        marginTop:10
        
    },
    texto:{
        fontSize:24,
        color:'#010101',

    }

})

export default Mybutton;