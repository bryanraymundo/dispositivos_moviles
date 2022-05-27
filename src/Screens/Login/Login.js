import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import { Text, View, TextInput, Button, StyleSheet, Alert, Image, TouchableOpacity} from 'react-native'


const Login = (props) => {


  const { navigation } = props
  const [user, setUser] = useState()
  const [password, setPassword] = useState()

  const Separator = () => (
    <View style={styles.separator} />
  );

  const ButtonLogin = () => {
    return (
      <Image
        style={styles.imagen}
        source={require("./googleicon.png")}
      />
    )

  }


  return (
    <View style={styles.container}>
      <Separator></Separator>
      <TouchableOpacity onPress={()=> {console.log("Me tocaste")}}><ButtonLogin/></TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({

  container: {
    color: '#ff0000',
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 400
  },
  separator: {
    position: 'absolute',
    top: 420,
    width: 450,
    height: 10,
    backgroundColor: 'black',
  },
  imagen:
  {
    alignContent: "center",
    top: 210,
    backgroundColor: "#FFFF", width: 150, height: 150, marginBottom: 1, borderRadius: 80,
    borderWidth: 10,
    borderColor: '#000'
  }
});


export default Login