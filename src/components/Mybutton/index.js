import React from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";

const Mybutton = (props) => {

    return (
        <View style={style.container}>
            <TouchableOpacity style={style.button}>
                <Text style={style.texto}>Entra</Text>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    button:{
        alignItems: 'center',
        backgroundColor: '#F9EF04',
        borderWidth:2,
        borderColor:'#010101',
        padding:2,
        width:310,
        borderRadius:5,
        marginTop:5
    },
    texto:{
        fontSize:24,
        color:'#010101',
        fontWeight: 70,
    }

})

export default Mybutton;