import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import { Text, View, TextInput, Button, StyleSheet, Alert} from 'react-native'


const Login = ( props ) => {

  const { navigation } = props
  const [user, setUser] = useState()
  const [password, setPassword] = useState()

  return(
    <View style = {styles.container}>
      <Text  style = {styles.text}>¡Bienvenido!</Text>
      <TextInput placeholder="Ingresa tu correo electronico"onChangeText={setUser} style = {styles.input}/>
      <TextInput secureTextEntry={true} placeholder="Contraseña"  style = {styles.input} onChangeText={setPassword} />
      <Button title="Enviar"  style = {styles.button} onPress =
      { () => { 
        console.log(`Usuario: ${user} Pass: ${password}`) 
        navigation.navigate('Home')} 
      }/>
     <Button
        title="Olvidé la contraseña"
        color="#f194ff"
        onPress={() => Alert.alert('Acuerdate XD')}
      />
    </View>
  )
}
  const styles = StyleSheet.create({
    text:{
      position: 'absolute',
      top: 50,
      color: "#21afc",
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
    }
  });


export default Login