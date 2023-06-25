import React from "react";

import {SafeAreaView,TextInput,StyleSheet,Text} from 'react-native'


const Myinput = (props) => {
    
    return(
        <SafeAreaView>
            <Text>{props.label}</Text>
            <TextInput
            style = {style.input}
            placeholder = {props.placeholder}
            ></TextInput>
        </SafeAreaView>
    );
}
const style = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginBottom:15,
        marginTop:2,
        padding:10,
        width:320,
        fontSize:18,
        color: "#1a1a1a",
        borderRadius:4,
    }
});
export default Myinput;
