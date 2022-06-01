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
    <>
    <Separator></Separator>
    <View style={styles.container}>
      <View style={styles.caja}></View>
      <TouchableOpacity onPress={()=> {navigation.navigate("Home")}}><ButtonLogin/></TouchableOpacity>
    </View>
    </>
  )
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  caja:{
    backgroundColor: '#ff0000',
    position: 'absolute',
    top: 0,
    width: 450,
    height: 410,
    borderBottomColor: 'black',
    borderBottomWidth: 12
  },
  separator: {
    position: 'absolute',
    top: 150,
    width: 450,
    height: 10,
    backgroundColor: 'black',
  },
  imagen:
  {
    backgroundColor: "#FFFF", width: 150, height: 150, marginBottom: 1, borderRadius: 80,
    borderWidth: 10,
    borderColor: '#000'
  }
});


export default Login