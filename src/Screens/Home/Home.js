import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const Home = ()=>
{
    return(
        <View style = {styles.container} >
        <Text>Hola munddo!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      color: '#fff',
      flex: 1,
      backgroundColor: '#00ff00',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
  

export default Home;