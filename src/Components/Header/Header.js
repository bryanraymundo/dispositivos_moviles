import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import iconSet from "@expo/vector-icons/build/Fontisto";

const Header = (props) => {

return (
      <View style={styles.container}>
      <TouchableOpacity>
      <View>
         <Image
            style={styles.imagen}
            source={require("../../Img/Pokeball.png")}
          />
        <Text style={styles.title}> Cerrar Sesión </Text>
      </View>
      </TouchableOpacity> 
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
      justifyContent: 'center',
      alignItems: "center",
      backgroundColor: '#ff0000'
    },
    title: {
      color: '#ffff',
      fontSize: 18,
    },
    imagen:
    {
      marginLeft: 35,
      width:25,
      height: 25,
    }
  });
  
export default Header