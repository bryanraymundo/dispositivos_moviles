import React, { useState } from 'react'
import { View, TextInput, Button } from 'react-native'

const Login = () => {

  const [user, setUser] = useState()
  const [password, setPassword] = useState()

  return(
    <View style={[styles.container]}>
    <View style={styles.common_container}> <Text style={styles.title}>Login</Text></View>

    <View style={styles.common_container}>
    <TextInput placeholder="USER" style={styles.style_input} onChangeText={(text)=>SetUser(text)}/>
    </View>
    <View style={styles.common_container}>
    <TextInput placeholder="PASSWORD" style={styles.style_input} secureTextEntry={true} onChangeText={(text)=>SetPassword(text)}/>
    </View>
    <View style={styles.common_container}>
    <Button title="Ingresar" onPress={()=>alert(`El usuario es ${user} y la contraseña es ${password}`)}/>
    </View>
</View>
)

}
const styles = StyleSheet.create({
    container:
    {
     alignItems:"center"
    },

    title:
    {
      fontWeight:"bold",
      fontSize:24
    },
    common_container:
    {
      marginBottom:10
    },

    style_input:
    {
      backgroundColor:"white",
    }

})

export default Login;