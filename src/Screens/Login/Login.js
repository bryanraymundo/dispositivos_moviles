import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import { Text, View, TextInput, Button, StyleSheet, Alert, Image} from 'react-native'

const Login = ( props ) => {

  const { navigation } = props
  const [user, setUser] = useState()
  const [password, setPassword] = useState()

  const Separator = () => (
    <View style={styles.separator} />
  );
  

  return(
    <View style = {styles.container}>
      <Text  style = {styles.text}>¡Bienvenido!</Text>
      <TextInput placeholder="Ingresa tu correo electronico"onChangeText={setUser} style = {styles.input}/>
      <TextInput secureTextEntry={true} placeholder="Contraseña"  style = {styles.input} onChangeText={setPassword} />
      <Button title="Enviar"  style = {styles.button} color="#2e90db" onPress =
      { () => { 
        console.log(`Usuario: ${user} Pass: ${password}`) 
        navigation.navigate('Home')} 
      }/>
      <Separator></Separator>
     <Button
        title="Olvidé la contraseña"
        color="#eb5446"
        onPress={() => Alert.alert('Acuerdate XD')}
      />
    </View>
  )
}
  const styles = StyleSheet.create({
    text:{
      position: 'absolute',
      top: 50,
      fontSize: 30
    },

    container: {
      color: '#FFF',
      flex: 1,
      backgroundColor: '#f5f5f5',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20
    },
    input:
    {
      backgroundColor: '#fff',
      marginBottom: 10,
      padding: 10,
      borderRadius: 10,
      width: 300
    },
    button:
    {
      marginBottom: 30
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });


export default Login