import { StatusBar, useState}from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView, TouchableHighlight,TextInput} from 'react-native';

export default function calcimc(){

  const [peso,setPeso]=useState(0)
  const [altura,setAltura]=useState(0)
  const [resultado,setResultado]=useState(0)

  return(
    <View>
    <Text>Meu App</Text>
    <View>
      <text>Informe seu peso:</text>
      <TextInput>
        autoFocus={true}
        keyboardType={'numeric'}
        value={peso}
        onChangeText={text=>setPeso(text)}
      </TextInput>


    </View>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
